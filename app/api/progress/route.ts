import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '../../chatgpt-auth';
import {initial,mutate,type State} from '../../../lib/progress';
import {lessons} from '../../../lib/lessons';
export const dynamic='force-dynamic';
const response=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
const database=()=>(env as unknown as {DB:D1Database}).DB;
async function read(user:string){const row=await database().prepare('SELECT data,revision FROM practice_state WHERE user_id=?').bind(user).first<{data:string;revision:number}>();return row?{...JSON.parse(row.data),revision:row.revision} as State:initial();}
export async function GET(){const user=await getChatGPTUser();if(!user)return response({authenticated:false,state:initial()});try{return response({authenticated:true,state:await read(user.userId)});}catch{return response({error:'기록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.'},503);}}
export async function POST(request:Request){
 const user=await getChatGPTUser();if(!user)return response({error:'기록을 저장하려면 ChatGPT로 로그인해 주세요.'},401);
 if(request.headers.get('sec-fetch-site')==='cross-site')return response({error:'같은 앱에서 저장해 주세요.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return response({error:'잘못된 요청입니다.'},415);
 const text=await request.text();if(text.length>100000)return response({error:'기록이 너무 깁니다.'},413);
 let body:Record<string,unknown>;try{body=JSON.parse(text);}catch{return response({error:'요청을 읽을 수 없습니다.'},400);}
 try{
  const state=await read(user.userId);if(body.revision!==state.revision)return response({error:'다른 창에서 기록이 바뀌었습니다. 새로고침 후 다시 저장해 주세요.'},409);
  let next:State;try{next=mutate(state,body,lessons[Number(body.lesson)-1]?.criteria.length??0);}catch(e){return response({error:e instanceof Error?e.message:'입력을 확인해 주세요.'},400);}
  const result=await database().prepare('INSERT INTO practice_state(user_id,data,revision,updated_at) VALUES(?,?,?,?) ON CONFLICT(user_id) DO UPDATE SET data=excluded.data,revision=excluded.revision,updated_at=excluded.updated_at WHERE practice_state.revision=?').bind(user.userId,JSON.stringify(next),next.revision,new Date().toISOString(),state.revision).run();
  if(!result.meta.changes)return response({error:'다른 창에서 기록이 바뀌었습니다. 새로고침 후 다시 저장해 주세요.'},409);
  return response({state:next,authenticated:true});
 }catch{return response({error:'저장하지 못했습니다. 작성 내용은 화면에 남아 있습니다. 다시 저장해 주세요.'},503);}
}
