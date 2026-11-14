export type Draft={steps:boolean[];criteria:boolean[];note:string;stuck:string;minutes:string;mode:30|60;file:string;plugin:Record<string,string>;evalChecks:boolean[];evalMinutes:string;evalSource:string;independent:boolean};
export type Entry={status:'partial'|'complete';draft:Draft;updatedAt:string;completedAt?:string;proof?:Draft};
export type Log={id:string;lesson:number;kind:'partial'|'complete'|'review'|'reopen';minutes:number;note:string;stuck:string;at:string};
export type State={records:Record<number,Entry>;logs:Log[];keys:Record<string,{binding:string;recall:boolean}>;revision:number};
export const initial=():State=>({records:{},logs:[],keys:{},revision:0});
export const blank=():Draft=>({steps:[],criteria:[],note:'',stuck:'',minutes:'',mode:60,file:'',plugin:{},evalChecks:[],evalMinutes:'',evalSource:'',independent:false});
export const frontier=(s:State)=>Array.from({length:42},(_,i)=>i+1).find(id=>s.records[id]?.status!=='complete')??43;
export const evaluation=['새 프로젝트를 만들고 저장','악기 2트랙·오디오 1트랙에 8마디 구성','MIDI 음높이·길이와 이벤트 이동·복제·분할 편집','로케이터를 설정하고 반복 재생','공용 리버브와 볼륨 오토메이션 구성','WAV를 내보내 들어보고 CPR을 다시 열어 재생'];
const clean=(v:unknown,n=10000)=>typeof v==='string'?v.slice(0,n):'';
export function sanitizeDraft(v:Partial<Draft>):Draft{const d=blank();return {...d,steps:Array.isArray(v.steps)?v.steps.slice(0,20).map(x=>x===true):[],criteria:Array.isArray(v.criteria)?v.criteria.slice(0,12).map(x=>x===true):[],note:clean(v.note),stuck:clean(v.stuck,2000),minutes:clean(v.minutes,6),mode:v.mode===30?30:60,file:clean(v.file,500),plugin:Object.fromEntries(Object.entries(v.plugin??{}).slice(0,12).map(([k,x])=>[k,clean(x,1000)])),evalChecks:Array.isArray(v.evalChecks)?v.evalChecks.slice(0,6).map(x=>x===true):[],evalMinutes:clean(v.evalMinutes,6),evalSource:clean(v.evalSource,300).trim(),independent:v.independent===true};}
export function mutate(s:State,b:Record<string,unknown>,criteriaCount:number,now=new Date().toISOString()):State{
 const next=structuredClone(s);const action=b.action;
 if(action==='keys') {const k=clean(b.command,100);if(!k)throw Error('명령을 확인해 주세요.');next.keys[k]={binding:clean(b.binding,100),recall:b.recall===true};next.revision++;return next;}
 const id=Number(b.lesson);if(!Number.isInteger(id)||id<1||id>42)throw Error('회차가 올바르지 않습니다.');
 if(id>frontier(s)&&s.records[id]?.status!=='complete')throw Error('앞 회차의 완료 확인이 먼저 필요합니다.');
 if(!['save','partial','complete','reopen'].includes(String(action)))throw Error('저장 동작이 올바르지 않습니다.');
 const prev=s.records[id];const d=sanitizeDraft((b.draft??prev?.draft??{}) as Partial<Draft>);
 if(action==='partial'&&(!Number.isFinite(Number(d.minutes))||Number(d.minutes)<=0||Number(d.minutes)>1440))throw Error('실제 소요 시간을 1~1440분으로 기록해 주세요.');
 if(action==='complete'){
  if(b.confirmation!==`${String(id).padStart(2,'0')}회차 완료`)throw Error('직접 완료 확인이 필요합니다.');
  if(d.criteria.length!==criteriaCount||!d.criteria.every(Boolean))throw Error('완료 기준을 모두 확인해 주세요.');
  const min=Number(d.minutes);if(!Number.isFinite(min)||min<=0||min>1440)throw Error('실제 소요 시간을 1~1440분으로 기록해 주세요.');
  if(id>=41){if(d.evalChecks.length!==6||!d.evalChecks.every(Boolean)||!d.independent||!d.evalSource||!Number.isFinite(Number(d.evalMinutes))||Number(d.evalMinutes)<=0||Number(d.evalMinutes)>30)throw Error('자료 없이 30분 이내에 여섯 과제를 재현하고 평가 기록을 남겨 주세요.');if(Number(d.minutes)<Number(d.evalMinutes))throw Error('전체 실습 시간은 평가 시간 이상이어야 합니다.');if(id===42&&(!s.records[41]?.proof||d.evalSource===s.records[41].proof?.evalSource))throw Error('41회차와 다른 소스로 재현해 주세요.');}
 }
 if(action==='reopen'&&b.confirmation!==`${String(id).padStart(2,'0')}회차 다시 연습`)throw Error('완료 취소 확인이 필요합니다.');
 const complete=action==='complete'||(prev?.status==='complete'&&action!=='reopen');
 next.records[id]={status:complete?'complete':'partial',draft:d,updatedAt:now,...(complete?{completedAt:prev?.completedAt??now,proof:prev?.proof??structuredClone(d)}:{})};
 if(action!=='save')next.logs.push({id:crypto.randomUUID(),lesson:id,kind:action==='reopen'?'reopen':prev?.status==='complete'&&action!=='reopen'?'review':action as 'partial'|'complete',minutes:action==='reopen'?0:Number(d.minutes)||0,note:d.note,stuck:d.stuck,at:now});
 if(action==='partial')next.records[id].draft.minutes='';
 next.logs=next.logs.slice(-1200);next.revision++;return next;
}
