import outline from './outline.json';
import lessonDetails from './details.json';
export type Shortcut={first:number;name:string;key:string;scope:string;numpad?:boolean};
export const shortcuts:Shortcut[]=[
 {first:1,name:'Save',key:'Ctrl + S',scope:'활성 프로젝트. 파일 이름 입력 중에는 대화상자를 먼저 닫습니다.'},
 {first:1,name:'Save As',key:'Ctrl + Shift + S',scope:'활성 프로젝트를 새 CPR 이름으로 저장. 오디오를 별도 복사하는 백업과 다릅니다.'},
 {first:1,name:'Open',key:'Ctrl + O',scope:'Cubase가 활성화된 상태에서 프로젝트 선택 창을 엽니다.'},
 {first:1,name:'Start/Stop',key:'Space',scope:'Project 창에 포커스. 텍스트 입력·On-Screen Keyboard를 종료한 뒤 사용합니다.'},
 {first:2,name:'MixConsole',key:'F3',scope:'Cubase 활성. 노트북은 Fn 기능키 설정을 확인합니다.'},
 {first:2,name:'Audio Connections',key:'F4',scope:'Cubase 활성. 노트북은 Fn 기능키 설정을 확인합니다.'},
 {first:4,name:'Metronome On/Off',key:'C',scope:'Project 창 활성, 텍스트 편집 중이 아닐 때.'},
 {first:5,name:'Zoom In',key:'H',scope:'Project 창에서 가로 확대. Key Editor에서는 해당 편집기 확대.'},
 {first:5,name:'Zoom Out',key:'G',scope:'Project 창에서 가로 축소. 텍스트 입력을 마친 뒤 사용.'},
 {first:5,name:'Zoom Full',key:'Shift + F',scope:'Project 창에서 프로젝트 전체를 볼 때 사용.'},
 {first:8,name:'Undo',key:'Ctrl + Z',scope:'활성 편집 창의 직전 작업을 취소. 실행 전 현재 창을 확인.'},
 {first:8,name:'Redo',key:'Ctrl + Shift + Z',scope:'활성 편집 창에서 취소한 작업을 다시 실행.'},
 {first:9,name:'Duplicate',key:'Ctrl + D',scope:'Object Selection으로 복제할 이벤트/파트를 먼저 선택.'},
 {first:10,name:'Split at Cursor',key:'Alt + X',scope:'분할할 이벤트를 선택하고 프로젝트 커서를 그 안에 위치.'},
 {first:11,name:'Snap On/Off',key:'J',scope:'Project 창 활성. Snap 종류와 Grid 설정은 별도로 확인.'},
 {first:12,name:'Locators to Selection',key:'P',scope:'반복할 이벤트/파트 선택 후 로케이터 설정. 실제 메뉴 표기는 수업 참고.'},
 {first:12,name:'Cycle',key:'Num /',scope:'숫자 키패드의 나눗셈 키. 일반 / 키와 다릅니다. 키패드 없으면 Cycle 버튼 사용.',numpad:true},
 {first:12,name:'To Left Locator',key:'Num 1',scope:'숫자 키패드 1. 일반 숫자열 1이 아닙니다. 키패드 없으면 Transport 메뉴 사용.',numpad:true},
 {first:15,name:'On-Screen Keyboard',key:'Alt + K',scope:'Studio의 화면 건반을 열거나 닫기. 열린 동안 문자 키를 연주에 사용.'},
 {first:16,name:'Record',key:'Num *',scope:'숫자 키패드 곱셈 키. 녹음할 트랙 Record Enable과 입력을 먼저 확인.',numpad:true},
 {first:17,name:'Open/Close Editor',key:'Ctrl + E',scope:'MIDI 파트를 선택. 기본 MIDI 편집기 환경설정에 따라 열리는 편집기가 달라질 수 있음.'},
 {first:24,name:'Crossfade',key:'X',scope:'같은 오디오 트랙에서 겹친 두 이벤트를 선택.'}
];
export const docRoot='https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/';
export const refs:Record<string,{title:string;url:string}>={
 new:{title:'새 프로젝트',url:docRoot+'project_handling/project_handling_projects_new_creating_t.html'},hub:{title:'Hub',url:docRoot+'project_handling/project_handling_steinberg_hub_r.html'},driver:{title:'오디오 드라이버 선택',url:docRoot+'setting_up/setting_up_audio_driver_selecting_t.html'},bus:{title:'Audio Connections',url:docRoot+'vst_connections/vst_connections_window_r.html'},import:{title:'오디오 가져오기',url:docRoot+'importing_audio_and_midi/importing_audio_and_midi_importing_audio_files_t.html'},importopt:{title:'가져오기 옵션',url:docRoot+'importing_audio_and_midi/importing_audio_and_midi_on_import_audio_files_settings_r.html'},inspector:{title:'Track Inspector',url:docRoot+'project_window/project_window_inspector_opening_track_inspector_t.html'},key:{title:'Key Commands',url:docRoot+'key_commands/key_commands_dialog_r.html'},filekeys:{title:'파일 기본키',url:docRoot+'key_commands/key_commands_file_category_c.html'},transportkeys:{title:'재생 기본키',url:docRoot+'key_commands/key_commands_transport_category_c.html'},editkeys:{title:'편집 기본키',url:docRoot+'key_commands/key_commands_edit_category_c.html'},zoomkeys:{title:'확대 기본키',url:docRoot+'key_commands/key_commands_zoom_category_c.html'},studiokeys:{title:'Studio 기본키',url:docRoot+'key_commands/key_commands_devices_category_c.html'},transport:{title:'Transport 메뉴',url:docRoot+'playback/playback_transport_menu_functions_r.html'},manager:{title:'VST Plug-in Manager',url:docRoot+'installing_and_managing_plugins/installing_and_managing_plugins_plugin_manager_window_r.html'},vst2:{title:'VST2 설정',url:docRoot+'installing_and_managing_plugins/installing_and_managing_plugins_vst_plug_in_manager_settings_r.html'},locations:{title:'Windows 플러그인 위치',url:'https://helpcenter.steinberg.de/hc/en-us/articles/115000177084-VST-plug-in-locations-on-Windows'},split:{title:'이벤트 분할',url:docRoot+'parts_events/parts_and_events_splitting_t.html'},range:{title:'Range 편집',url:docRoot+'range_editing/range_editing_selection_ranges_splitting_t.html'},grid:{title:'Grid 종류',url:docRoot+'project_window/project_window_grid_types_r.html'},instrument:{title:'악기 트랙 만들기',url:docRoot+'vst_instruments/vst_insruments_creating_instrument_tracks_t.html'},keyboard:{title:'화면 건반으로 MIDI 녹음',url:docRoot+'virtual_keyboard/virtual_keyboard_recording_midi_with_the_virtual_keyboard_t.html'},editor:{title:'Key Editor',url:docRoot+'midi_editors/midi_editors_key_editor_r.html'},quantize:{title:'퀀타이즈',url:docRoot+'quantizing_midi_audio/quantizing_midi_audio_c.html'},record:{title:'오디오 녹음',url:docRoot+'recording/recording_recording_audio_c.html'},monitor:{title:'Cubase 모니터링',url:docRoot+'recording/recording_monitoring_via_cubase_t.html'},fade:{title:'페이드 핸들',url:docRoot+'fades_crossfades_and_envelopes/fades_event_based_creating_and_editing_with_handles_t.html'},cross:{title:'크로스페이드',url:docRoot+'fades_crossfades_and_envelopes/fades_crossfades_creating_t.html'},gain:{title:'이벤트 볼륨',url:docRoot+'fades_crossfades_and_envelopes/fades_event_envelopes_adjusting_static_event_volume_changes_t.html'},take:{title:'테이크 조합',url:docRoot+'track_handling/track_handling_perfect_take_assembling_t.html'},insert:{title:'Insert 효과',url:docRoot+'audio_effects/audio_effects_insert_effects_adding_t.html'},fx:{title:'FX 채널',url:docRoot+'audio_effects/audio_effects_send_effects_fx_channel_tracks_adding_t.html'},send:{title:'Send 효과',url:docRoot+'mixconsole/mixconsole_adding_send_effects_t.html'},group:{title:'그룹 채널',url:docRoot+'mixconsole/mixconsole_using_group_channels_t.html'},auto:{title:'오토메이션 그리기',url:docRoot+'automation/automation_manual_writing_of_automation_data_t.html'},pool:{title:'Pool',url:docRoot+'pool/pool_window_r.html'},backup:{title:'프로젝트 백업',url:docRoot+'project_handling/project_handling_backing_up_projects_t.html'},export:{title:'Audio Mixdown',url:docRoot+'export_audio_mixdown/export_audio_mixdown_options_r.html'},render:{title:'Render in Place',url:docRoot+'rendering_to_audio/rendering_to_audio_rendering_selections_t.html'},freeze:{title:'악기 Freeze',url:docRoot+'vst_instruments/vst_instruments_freezing_t.html'},template:{title:'템플릿 저장',url:docRoot+'project_handling/project_handling_saving_a_project_template_file_t.html'}
};
export const videos:Record<string,{id:string;title:string;channel:string;note:string;focus:string}>={
 start:{id:'MgI-UScWPdA',title:'Start Producing in Cubase in Only 10 Minutes | Beginners Guide',channel:'Cubase',note:'공식 설명에서 Cubase 15를 확인했습니다.',focus:'프로젝트 시작과 오디오를 배치·재생하는 흐름'},
 tools:{id:'gHX31gkpKOs',title:'Project Window Tools Explained | Cubase Beginner Guide',channel:'AliceByno',note:'Cubase 15 이전 공개 영상입니다. 화면과 메뉴는 아래 15 매뉴얼을 기준으로 확인하세요.',focus:'선택 도구, Range, 가위 도구의 차이'},
 midi:{id:'xkNIy-s2TLg',title:'Record MIDI & Use VST Instruments – Made Simple | Your First Steps in Cubase',channel:'Cubase',note:'Cubase 15 이전 공개 영상입니다. 화면 차이는 15 매뉴얼을 기준으로 확인하세요.',focus:'악기 트랙 선택 → MIDI 입력 → 녹음과 편집'},
 audio:{id:'s-FNQK8l0JQ',title:'Edit Audio Recordings Like a Pro',channel:'Cubase',note:'Cubase 15 이전 공개 영상입니다. 이벤트 볼륨 핸들 등의 화면 위치에 차이가 있습니다.',focus:'오디오 이벤트의 경계와 연결부를 듣고 편집하는 과정'},
 mix:{id:'WgLN3ztdD7g',title:'Mix Your First Song',channel:'Cubase',note:'Cubase 15 이전 공개 영상입니다. 실제 메뉴는 15 매뉴얼을 기준으로 확인하세요.',focus:'볼륨 균형과 효과를 적용하기 전후의 비교'},
 export:{id:'zWNM2Nl5tJU',title:'Export Your Song for Spotify & Co',channel:'Cubase',note:'Cubase 15 이전 공개 영상입니다. 형식과 범위 선택을 15 매뉴얼에서 확인하세요.',focus:'로케이터 범위와 오디오 파일 내보내기'}
};
export type Detail={why:string;concept:string;prep:string;steps:string[];criteria:string[];confusion:string[];recovery:string;reproduce:string;result:string;refs:string[];video?:string;plugin?:boolean};
export const details:Record<number,Detail>=lessonDetails;
export const lessons=outline.map(o=>({...o,...(details[o.id]??{why:'작업을 다시 열어 이어갈 수 있는 기본 동작을 익힙니다.',concept:o.goal,prep:'현재 PC에서 실행되는 Cubase Pro 15와 저장 폴더',steps:[o.goal,o.apply,'저장한 프로젝트를 다시 열어 결과를 확인합니다.'],criteria:['설명한 작업을 실행했다.','결과를 듣고 확인했다.','저장하고 다시 열었다.'],confusion:['완료 기준 확인과 회차 완료 보고는 별개입니다.'],recovery:'현재 화면과 실패한 동작을 메모합니다.',reproduce:o.apply,result:`${String(o.id).padStart(2,'0')}_Practice.cpr`,refs:['key']} as Detail)}));
export const weeks=['프로젝트와 화면','이벤트 편집','악기와 MIDI','오디오 녹음·편집','믹싱과 오토메이션','파일 관리와 기초 평가'];
export const plans={60:[10,10,20,15,5],30:[5,5,15,3,2]};
export const wav='https://chatgpt.com/library?file_id=libfile_193cc756d5488191a4c7f7edaf6fe0ed&account_id=personal';
