/* 공통 기초 42회차 데이터. 기존 Cubase Practice Room(lib/outline.json, lib/details.json, lib/lessons.ts)의 내용을 그대로 옮겼습니다. */
(function(root){var CG=root.CG=root.CG||{};CG.base={
 "shortcuts": [
  {
   "first": 1,
   "name": "Save",
   "key": "Ctrl + S",
   "scope": "활성 프로젝트. 파일 이름 입력 중에는 대화상자를 먼저 닫습니다."
  },
  {
   "first": 1,
   "name": "Save As",
   "key": "Ctrl + Shift + S",
   "scope": "활성 프로젝트를 새 CPR 이름으로 저장. 오디오를 별도 복사하는 백업과 다릅니다."
  },
  {
   "first": 1,
   "name": "Open",
   "key": "Ctrl + O",
   "scope": "Cubase가 활성화된 상태에서 프로젝트 선택 창을 엽니다."
  },
  {
   "first": 1,
   "name": "Start/Stop",
   "key": "Space",
   "scope": "Project 창에 포커스. 텍스트 입력·On-Screen Keyboard를 종료한 뒤 사용합니다."
  },
  {
   "first": 2,
   "name": "MixConsole",
   "key": "F3",
   "scope": "Cubase 활성. 노트북은 Fn 기능키 설정을 확인합니다."
  },
  {
   "first": 2,
   "name": "Audio Connections",
   "key": "F4",
   "scope": "Cubase 활성. 노트북은 Fn 기능키 설정을 확인합니다."
  },
  {
   "first": 4,
   "name": "Metronome On/Off",
   "key": "C",
   "scope": "Project 창 활성, 텍스트 편집 중이 아닐 때."
  },
  {
   "first": 5,
   "name": "Zoom In",
   "key": "H",
   "scope": "Project 창에서 가로 확대. Key Editor에서는 해당 편집기 확대."
  },
  {
   "first": 5,
   "name": "Zoom Out",
   "key": "G",
   "scope": "Project 창에서 가로 축소. 텍스트 입력을 마친 뒤 사용."
  },
  {
   "first": 5,
   "name": "Zoom Full",
   "key": "Shift + F",
   "scope": "Project 창에서 프로젝트 전체를 볼 때 사용."
  },
  {
   "first": 8,
   "name": "Undo",
   "key": "Ctrl + Z",
   "scope": "활성 편집 창의 직전 작업을 취소. 실행 전 현재 창을 확인."
  },
  {
   "first": 8,
   "name": "Redo",
   "key": "Ctrl + Shift + Z",
   "scope": "활성 편집 창에서 취소한 작업을 다시 실행."
  },
  {
   "first": 9,
   "name": "Duplicate",
   "key": "Ctrl + D",
   "scope": "Object Selection으로 복제할 이벤트/파트를 먼저 선택."
  },
  {
   "first": 10,
   "name": "Split at Cursor",
   "key": "Alt + X",
   "scope": "분할할 이벤트를 선택하고 프로젝트 커서를 그 안에 위치."
  },
  {
   "first": 11,
   "name": "Snap On/Off",
   "key": "J",
   "scope": "Project 창 활성. Snap 종류와 Grid 설정은 별도로 확인."
  },
  {
   "first": 12,
   "name": "Locators to Selection",
   "key": "P",
   "scope": "반복할 이벤트/파트 선택 후 로케이터 설정. 실제 메뉴 표기는 수업 참고."
  },
  {
   "first": 12,
   "name": "Cycle",
   "key": "Num /",
   "scope": "숫자 키패드의 나눗셈 키. 일반 / 키와 다릅니다. 키패드 없으면 Cycle 버튼 사용.",
   "numpad": true
  },
  {
   "first": 12,
   "name": "To Left Locator",
   "key": "Num 1",
   "scope": "숫자 키패드 1. 일반 숫자열 1이 아닙니다. 키패드 없으면 Transport 메뉴 사용.",
   "numpad": true
  },
  {
   "first": 15,
   "name": "On-Screen Keyboard",
   "key": "Alt + K",
   "scope": "Studio의 화면 건반을 열거나 닫기. 열린 동안 문자 키를 연주에 사용."
  },
  {
   "first": 16,
   "name": "Record",
   "key": "Num *",
   "scope": "숫자 키패드 곱셈 키. 녹음할 트랙 Record Enable과 입력을 먼저 확인.",
   "numpad": true
  },
  {
   "first": 17,
   "name": "Open/Close Editor",
   "key": "Ctrl + E",
   "scope": "MIDI 파트를 선택. 기본 MIDI 편집기 환경설정에 따라 열리는 편집기가 달라질 수 있음."
  },
  {
   "first": 24,
   "name": "Crossfade",
   "key": "X",
   "scope": "같은 오디오 트랙에서 겹친 두 이벤트를 선택."
  }
 ],
 "refs": {
  "new": {
   "title": "새 프로젝트",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/project_handling/project_handling_projects_new_creating_t.html"
  },
  "hub": {
   "title": "Hub",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/project_handling/project_handling_steinberg_hub_r.html"
  },
  "driver": {
   "title": "오디오 드라이버 선택",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/setting_up/setting_up_audio_driver_selecting_t.html"
  },
  "bus": {
   "title": "Audio Connections",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/vst_connections/vst_connections_window_r.html"
  },
  "import": {
   "title": "오디오 가져오기",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/importing_audio_and_midi/importing_audio_and_midi_importing_audio_files_t.html"
  },
  "importopt": {
   "title": "가져오기 옵션",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/importing_audio_and_midi/importing_audio_and_midi_on_import_audio_files_settings_r.html"
  },
  "inspector": {
   "title": "Track Inspector",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/project_window/project_window_inspector_opening_track_inspector_t.html"
  },
  "key": {
   "title": "Key Commands",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/key_commands/key_commands_dialog_r.html"
  },
  "filekeys": {
   "title": "파일 기본키",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/key_commands/key_commands_file_category_c.html"
  },
  "transportkeys": {
   "title": "재생 기본키",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/key_commands/key_commands_transport_category_c.html"
  },
  "editkeys": {
   "title": "편집 기본키",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/key_commands/key_commands_edit_category_c.html"
  },
  "zoomkeys": {
   "title": "확대 기본키",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/key_commands/key_commands_zoom_category_c.html"
  },
  "studiokeys": {
   "title": "Studio 기본키",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/key_commands/key_commands_devices_category_c.html"
  },
  "transport": {
   "title": "Transport 메뉴",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/playback/playback_transport_menu_functions_r.html"
  },
  "manager": {
   "title": "VST Plug-in Manager",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/installing_and_managing_plugins/installing_and_managing_plugins_plugin_manager_window_r.html"
  },
  "vst2": {
   "title": "VST2 설정",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/installing_and_managing_plugins/installing_and_managing_plugins_vst_plug_in_manager_settings_r.html"
  },
  "locations": {
   "title": "Windows 플러그인 위치",
   "url": "https://helpcenter.steinberg.de/hc/en-us/articles/115000177084-VST-plug-in-locations-on-Windows"
  },
  "split": {
   "title": "이벤트 분할",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/parts_events/parts_and_events_splitting_t.html"
  },
  "range": {
   "title": "Range 편집",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/range_editing/range_editing_selection_ranges_splitting_t.html"
  },
  "grid": {
   "title": "Grid 종류",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/project_window/project_window_grid_types_r.html"
  },
  "instrument": {
   "title": "악기 트랙 만들기",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/vst_instruments/vst_insruments_creating_instrument_tracks_t.html"
  },
  "keyboard": {
   "title": "화면 건반으로 MIDI 녹음",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/virtual_keyboard/virtual_keyboard_recording_midi_with_the_virtual_keyboard_t.html"
  },
  "editor": {
   "title": "Key Editor",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/midi_editors/midi_editors_key_editor_r.html"
  },
  "quantize": {
   "title": "퀀타이즈",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/quantizing_midi_audio/quantizing_midi_audio_c.html"
  },
  "record": {
   "title": "오디오 녹음",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/recording/recording_recording_audio_c.html"
  },
  "monitor": {
   "title": "Cubase 모니터링",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/recording/recording_monitoring_via_cubase_t.html"
  },
  "fade": {
   "title": "페이드 핸들",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/fades_crossfades_and_envelopes/fades_event_based_creating_and_editing_with_handles_t.html"
  },
  "cross": {
   "title": "크로스페이드",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/fades_crossfades_and_envelopes/fades_crossfades_creating_t.html"
  },
  "gain": {
   "title": "이벤트 볼륨",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/fades_crossfades_and_envelopes/fades_event_envelopes_adjusting_static_event_volume_changes_t.html"
  },
  "take": {
   "title": "테이크 조합",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/track_handling/track_handling_perfect_take_assembling_t.html"
  },
  "insert": {
   "title": "Insert 효과",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/audio_effects/audio_effects_insert_effects_adding_t.html"
  },
  "fx": {
   "title": "FX 채널",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/audio_effects/audio_effects_send_effects_fx_channel_tracks_adding_t.html"
  },
  "send": {
   "title": "Send 효과",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/mixconsole/mixconsole_adding_send_effects_t.html"
  },
  "group": {
   "title": "그룹 채널",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/mixconsole/mixconsole_using_group_channels_t.html"
  },
  "auto": {
   "title": "오토메이션 그리기",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/automation/automation_manual_writing_of_automation_data_t.html"
  },
  "pool": {
   "title": "Pool",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/pool/pool_window_r.html"
  },
  "backup": {
   "title": "프로젝트 백업",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/project_handling/project_handling_backing_up_projects_t.html"
  },
  "export": {
   "title": "Audio Mixdown",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/export_audio_mixdown/export_audio_mixdown_options_r.html"
  },
  "render": {
   "title": "Render in Place",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/rendering_to_audio/rendering_to_audio_rendering_selections_t.html"
  },
  "freeze": {
   "title": "악기 Freeze",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/vst_instruments/vst_instruments_freezing_t.html"
  },
  "template": {
   "title": "템플릿 저장",
   "url": "https://www.steinberg.help/r/cubase-pro/15.0/en/cubase_nuendo/topics/project_handling/project_handling_saving_a_project_template_file_t.html"
  }
 },
 "videos": {
  "start": {
   "id": "MgI-UScWPdA",
   "title": "Start Producing in Cubase in Only 10 Minutes | Beginners Guide",
   "channel": "Cubase",
   "note": "공식 설명에서 Cubase 15를 확인했습니다.",
   "focus": "프로젝트 시작과 오디오를 배치·재생하는 흐름"
  },
  "tools": {
   "id": "gHX31gkpKOs",
   "title": "Project Window Tools Explained | Cubase Beginner Guide",
   "channel": "AliceByno",
   "note": "Cubase 15 이전 공개 영상입니다. 화면과 메뉴는 아래 15 매뉴얼을 기준으로 확인하세요.",
   "focus": "선택 도구, Range, 가위 도구의 차이"
  },
  "midi": {
   "id": "xkNIy-s2TLg",
   "title": "Record MIDI & Use VST Instruments – Made Simple | Your First Steps in Cubase",
   "channel": "Cubase",
   "note": "Cubase 15 이전 공개 영상입니다. 화면 차이는 15 매뉴얼을 기준으로 확인하세요.",
   "focus": "악기 트랙 선택 → MIDI 입력 → 녹음과 편집"
  },
  "audio": {
   "id": "s-FNQK8l0JQ",
   "title": "Edit Audio Recordings Like a Pro",
   "channel": "Cubase",
   "note": "Cubase 15 이전 공개 영상입니다. 이벤트 볼륨 핸들 등의 화면 위치에 차이가 있습니다.",
   "focus": "오디오 이벤트의 경계와 연결부를 듣고 편집하는 과정"
  },
  "mix": {
   "id": "WgLN3ztdD7g",
   "title": "Mix Your First Song",
   "channel": "Cubase",
   "note": "Cubase 15 이전 공개 영상입니다. 실제 메뉴는 15 매뉴얼을 기준으로 확인하세요.",
   "focus": "볼륨 균형과 효과를 적용하기 전후의 비교"
  },
  "export": {
   "id": "zWNM2Nl5tJU",
   "title": "Export Your Song for Spotify & Co",
   "channel": "Cubase",
   "note": "Cubase 15 이전 공개 영상입니다. 형식과 범위 선택을 15 매뉴얼에서 확인하세요.",
   "focus": "로케이터 범위와 오디오 파일 내보내기"
  }
 },
 "lessons": [
  {
   "id": 1,
   "title": "프로젝트 생성·출력·저장",
   "goal": "새 빈 프로젝트에서 현재 출력과 WAV를 확인하고, 저장·닫기·재열기까지 직접 수행",
   "apply": "같은 프로젝트를 다른 이름으로 저장하고 위치 비교",
   "why": "작업을 시작하고 다음 날 같은 소리를 다시 들을 수 있어야 모든 음악 작업을 이어갈 수 있습니다.",
   "concept": "프로젝트(.cpr)는 배치와 설정을 기억하고, WAV는 실제 소리를 담습니다. 출력 버스는 Cubase의 소리를 현재 듣는 장치로 보내는 길입니다.",
   "prep": "실행 가능한 Cubase Pro 15, 현재 연결된 헤드폰·스피커, 새 프로젝트 폴더, 아래 8초 건반 WAV. 설치·드라이버·외부 플러그인 상태는 아직 미확인입니다.",
   "steps": [
    "Cubase를 실행합니다. File > New Project에서 Hub의 Create Empty를 선택하고 새 폴더를 지정합니다. 예: 문서의 Cubase Practice/01_Restart. 실행되지 않을 때만 설치·활성화 문제를 먼저 확인합니다.",
    "Studio > Studio Setup > Audio System의 ASIO Driver에서 현재 출력 장치를 지원하는 실제 드라이버를 확인합니다. 변경했다면 Switch로 적용합니다. 드라이버의 Control Panel에서 사용할 출력이 활성화되어 있는지 봅니다. 과거 USB 헤드셋 설정을 그대로 가정하지 않습니다.",
    "Studio > Audio Connections > Outputs에서 스테레오 출력 버스를 확인합니다. 없다면 Add Bus에서 Stereo 1개를 만듭니다. Audio Device와 Device Port의 Left/Right를 현재 듣는 장치의 포트에 연결합니다.",
    "아래 01_Keys_Practice.wav를 다운로드합니다. 프로젝트 시작 위치를 클릭한 뒤 File > Import > Audio File로 가져옵니다. 가져오기 옵션이 보이면 Copy File to Project Folder를 켭니다. 새 오디오 트랙의 출력이 방금 확인한 스테레오 버스인지 확인합니다.",
    "Project 창 빈 곳을 클릭해 포커스를 옮기고 Space로 재생·정지합니다. 파형 구간에서 실제 소리가 들리는지 확인합니다. File > Save로 01_Restart.cpr를 프로젝트 폴더에 저장합니다.",
    "File > Close로 닫고 File > Open에서 방금 저장한 CPR을 엽니다. 파형 앞의 눈금자를 클릭한 뒤 재생합니다. 누락 파일 창 없이 같은 소리가 나면 재열기까지 성공입니다."
   ],
   "criteria": [
    "새 빈 프로젝트에서 가져온 WAV의 파형과 소리를 확인했다.",
    "프로젝트 폴더에 CPR과 가져온 오디오가 저장되었다.",
    "프로젝트를 닫고 다시 열어 누락 경고 없이 재생했다."
   ],
   "confusion": [
    "Windows에서 소리가 나는 것과 Cubase의 ASIO 출력이 연결된 것은 별개입니다.",
    "Save As는 새 CPR 이름을 만듭니다. 사용 오디오 전체를 별도 폴더로 복사하는 백업 기능과는 다릅니다."
   ],
   "recovery": "무음이면 커서가 파형 안에 있는지 → 트랙 Mute/출력 → Audio Connections의 실제 포트 → 드라이버 Control Panel 순으로 확인합니다. Control Room을 쓰고 있다면 모니터 경로도 확인합니다. Missing Files가 뜨면 원본 WAV 위치를 찾아 연결하고 다시 가져올 때 프로젝트 폴더로 복사합니다. 실행 오류는 메시지만 기록해 설치·활성화 보충으로 분리합니다.",
   "reproduce": "안내를 가리고 저장 → 닫기 → 열기 → 재생을 재현합니다. 다른 짧은 WAV가 있다면 01_Second 프로젝트에도 가져옵니다. 없으면 같은 WAV로 새 폴더에서 저장·재열기를 먼저 재현하고 '다른 소스 적용 미확인'으로 기록합니다.",
   "result": "01_Restart.cpr + 같은 프로젝트 폴더의 Audio 파일",
   "refs": [
    "new",
    "driver",
    "bus",
    "import",
    "importopt",
    "filekeys",
    "transportkeys"
   ],
   "video": "start"
  },
  {
   "id": 2,
   "title": "화면과 Inspector",
   "goal": "단축키·Hub 복습 후 Project 창·좌우/하단 영역과 VST Plug-in Manager 위치 찾기",
   "apply": "편집 화면·믹싱 화면·플러그인 관리창을 오가며 위치 재현",
   "why": "원하는 설정이 어디에 있는지 알아야 편집과 믹싱 사이에서 길을 잃지 않습니다.",
   "concept": "Project 창은 시간에 따른 배치, Inspector는 선택한 트랙의 설정, MixConsole은 여러 트랙의 믹싱을 보여줍니다.",
   "prep": "재시작 01회차에서 저장·재열기를 확인한 프로젝트. 외부 플러그인 설치는 확인되지 않아도 진행할 수 있습니다.",
   "steps": [
    "자료를 가리고 Save·Open·Start/Stop 중 2개를 재현합니다. File > Save As로 02_Screen.cpr를 저장하고 원본과 위치를 확인합니다.",
    "File > New Project에서 Hub의 Recent와 프로젝트 생성 영역을 확인합니다. 이번에는 새 프로젝트를 만들지 않고 닫아 기존 작업으로 돌아옵니다.",
    "Project 창의 Show/Hide Left Zone을 켜고 Track 탭에서 오디오 트랙을 선택합니다. Inspector의 이름·Volume·Output Routing을 찾아 메모합니다.",
    "Studio > MixConsole을 열어 같은 트랙 이름을 찾고 Project 창으로 돌아옵니다. Studio > Audio Connections에서 기존 출력 버스를 읽기만 합니다.",
    "Studio > VST Plug-in Manager를 열고 VST Instruments와 VST Effects 목록 위치를 찾습니다. 오늘은 목록 위치 확인까지 진행합니다."
   ],
   "criteria": [
    "선택 트랙과 Inspector 내용의 연결을 설명했다.",
    "Project 창·MixConsole·Audio Connections를 찾아갔다.",
    "VST Plug-in Manager의 악기·효과 목록 위치를 확인했다."
   ],
   "confusion": [
    "Inspector는 선택한 트랙에 따라 달라집니다.",
    "관리창에 제품이 보이는 것과 패치·샘플을 로드해 소리를 확인한 것은 서로 다른 확인입니다."
   ],
   "recovery": "Inspector가 안 보이면 Left Zone과 Track 탭을 확인합니다. F3/F4가 동작하지 않으면 메뉴로 실행하고 Edit > Key Commands 및 노트북 Fn 설정을 확인합니다.",
   "reproduce": "다른 오디오 트랙을 선택해 Inspector 변화 → 믹서에서 같은 이름 찾기를 자료 없이 실행합니다.",
   "result": "02_Screen.cpr",
   "refs": [
    "hub",
    "inspector",
    "manager",
    "bus",
    "studiokeys",
    "key"
   ],
   "video": "start"
  },
  {
   "id": 3,
   "title": "트랙 종류와 플러그인 위치",
   "goal": "Audio·Instrument·MIDI·Folder의 역할 구분, 보유 플러그인 한 개의 형식·설치 경로 확인",
   "apply": "이름·색상·폴더로 트랙 정리, 실행 앱·플러그인·샘플 폴더 구분",
   "why": "연주 정보와 실제 소리 파일, 악기 프로그램의 위치를 구분하면 트랙과 파일을 올바르게 관리할 수 있습니다.",
   "concept": "Audio는 녹음·WAV, Instrument는 악기와 MIDI, MIDI는 연주 정보, Folder는 트랙 정리용입니다. 플러그인 본체·실행 앱·샘플 폴더는 각각 다릅니다.",
   "prep": "현재 설치된 제품만 확인합니다. 설치된 외부 제품이 없다면 그 상태를 기록하고 내장 악기로 트랙 역할을 실습합니다.",
   "steps": [
    "Save와 화면 전환 중 이미 배운 2개를 자료 없이 실행합니다. File > Save As로 03_Track_Types.cpr를 만듭니다.",
    "Project > Add Track에서 Audio, Instrument, MIDI, Folder를 각각 추가합니다. Instrument에는 현재 사용 가능한 내장 악기를 선택합니다. MIDI 트랙은 출력 연결 전에는 스스로 소리를 만들지 않는다는 점을 확인합니다.",
    "트랙 이름을 Audio_WAV, Inst_Keys, MIDI_Test, Practice_Folder로 바꾸고 색을 지정합니다. 트랙 목록에서 필요한 트랙을 Folder 안에 넣어 접기·펼치기를 확인합니다.",
    "Studio > VST Plug-in Manager에서 현재 설치된 외부 제품 1개가 있으면 정확한 이름·버전·악기/효과·VST2/3·본체 경로를 기록합니다. 외부 제품이 없다면 '현재 설치 미확인/없음'으로 남깁니다. VST3 표준 공용 폴더는 C:\\Program Files\\Common Files\\VST3입니다. 실제 제품 경로와 구분합니다.",
    "샘플 폴더는 제품의 콘텐츠 설정에서 확인합니다. Splice 앱을 실제로 쓴다면 Preferences > Go to folder는 앱이 다운로드한 샘플 폴더 확인 경로입니다. 이것을 Sounds 플러그인의 모든 캐시 경로와 같다고 쓰지 않습니다. 샘플 없는 제품은 '해당 없음'으로 기록합니다."
   ],
   "criteria": [
    "Audio·Instrument·MIDI·Folder의 역할을 구분하고 트랙을 정리했다.",
    "플러그인 본체·독립 실행 앱·실제 소리 파일을 구분했다.",
    "현재 PC에서 확인한 제품 값 또는 미설치·미확인 상태를 정확히 기록했다."
   ],
   "confusion": [
    "VST3는 형식 이름이며 실제 폴더 주소가 아닙니다.",
    "VST 2 Plug-in Path Settings는 VST2 검색 경로입니다. VST3 경로 설정으로 사용하지 않습니다."
   ],
   "recovery": "실제 인식 오류가 있을 때만 설치·인증/64비트·형식 → Manager 검색 → VST2 사용 시 Enable VST2 Plug-ins와 실제 경로 → Collection·필터·Blocklist 순서로 확인합니다. Cubase 15의 VST2는 기본 비활성 상태이며 필요 시 활성화합니다. 파일을 임의로 이동하거나 Blocklist를 무조건 해제하지 않습니다.",
   "reproduce": "다른 트랙 2개를 새 Folder로 정리하고, WAV 폴더와 플러그인 본체 폴더를 말로 구분합니다.",
   "result": "03_Track_Types.cpr + 확인한 제품 정보",
   "refs": [
    "instrument",
    "manager",
    "vst2",
    "locations"
   ],
   "plugin": true
  },
  {
   "id": 4,
   "title": "재생과 시간",
   "goal": "커서 위치·템포·박자를 확인하고 재생·정지·메트로놈 조작",
   "apply": "다른 템포에서 동일 작업 반복",
   "why": "재생 시작 위치와 박자 기준을 맞추면 녹음과 편집의 기준이 흔들리지 않습니다.",
   "concept": "프로젝트 커서는 재생 시작 위치, 템포는 분당 박 수, 박자는 한 마디의 박 구성입니다.",
   "prep": "소리가 확인된 프로젝트와 짧은 WAV.",
   "steps": [
    "Save·Start/Stop 2개를 자료 없이 실행하고 04_Transport.cpr로 저장합니다.",
    "Transport > Transport Panel을 열어 위치·Tempo·Time Signature를 찾습니다. 값 입력 중에는 Space가 재생 대신 입력에 쓰일 수 있으니 입력을 확정합니다.",
    "Project 눈금자에서 1마디와 3마디를 차례로 클릭하고 재생해 시작 위치의 차이를 확인합니다.",
    "템포 트랙 사용 여부를 확인한 뒤 고정 템포 모드에서 Tempo를 100, 다음 120으로 바꾸고 4/4에서 메트로놈 간격을 듣습니다. C로 메트로놈을 켜고 끕니다. 세부 설정은 Transport > Metronome Setup에서 확인합니다."
   ],
   "criteria": [
    "커서 위치를 바꾸어 원하는 지점에서 재생했다.",
    "템포·박자 표시를 찾아 값을 확인했다.",
    "메트로놈을 켜고 끈 뒤 실제 차이를 들었다."
   ],
   "confusion": [
    "템포 변경이 모든 WAV 길이를 자동으로 바꾸지는 않습니다.",
    "녹음용 클릭과 실제 내보낼 음악 소리는 별도입니다."
   ],
   "recovery": "템포 값이 유지되지 않으면 템포 트랙 활성 여부를 확인합니다. 클릭만 안 들리면 Metronome Setup의 클릭 설정과 출력 경로를 확인합니다.",
   "reproduce": "다른 템포에서 커서를 두 위치로 옮기고 재생·클릭 전환을 자료 없이 실행합니다.",
   "result": "04_Transport.cpr",
   "refs": [
    "transport",
    "transportkeys"
   ],
   "video": "start"
  },
  {
   "id": 5,
   "title": "화면 탐색",
   "goal": "확대·축소, 전체 보기, 이벤트 위치로 이동",
   "apply": "멀리 떨어진 3구간을 반복해서 찾아가기",
   "why": "음악 전체 구조와 아주 짧은 편집 지점을 빠르게 오갈 수 있습니다.",
   "concept": "가로 확대는 시간의 자세함, 세로 크기는 트랙을 읽기 편한 정도입니다. 확대는 오디오 길이를 바꾸지 않습니다.",
   "prep": "이벤트가 있는 04회차 프로젝트.",
   "steps": [
    "05_Navigation.cpr로 저장하고 프로젝트에 3개 이벤트 위치를 확인합니다.",
    "Project 창을 클릭한 뒤 H로 확대하고 G로 축소합니다. 키를 누르기 전 텍스트 입력을 끝냅니다.",
    "Shift + F로 전체 범위를 확인하고 필요한 이벤트 부근의 눈금자를 클릭합니다.",
    "가로 스크롤과 트랙 높이를 조절해 앞·중간·끝 세 구간을 차례로 찾습니다. 각 구간에서 재생해 올바른 이벤트인지 확인합니다."
   ],
   "criteria": [
    "가로 확대·축소·전체 보기를 실행했다.",
    "지정한 세 위치를 찾아 재생했다.",
    "확대와 이벤트 길이 변경을 구분했다."
   ],
   "confusion": [
    "편집기 포커스에 따라 확대 대상이 달라집니다.",
    "트랙 높이와 실제 소리 크기는 관계가 없습니다."
   ],
   "recovery": "키가 먹지 않으면 Project 창을 클릭하고 Edit > Key Commands의 Zoom 카테고리를 확인합니다. 이벤트가 안 보이면 전체 보기부터 실행합니다.",
   "reproduce": "다른 WAV가 있는 프로젝트에서 세 지점 찾기를 반복합니다.",
   "result": "05_Navigation.cpr",
   "refs": [
    "zoomkeys",
    "key"
   ],
   "video": "tools"
  },
  {
   "id": 6,
   "title": "1주 통합",
   "goal": "빈 프로젝트에서 01~05의 핵심 작업을 자료 없이 재현",
   "apply": "새 프로젝트로 동일 작업 반복",
   "why": "각각 외운 동작을 실제 프로젝트 시작 흐름으로 연결합니다.",
   "concept": "통합 실습은 기능을 새로 늘리기보다 이미 배운 동작을 순서대로 이어보는 시간입니다.",
   "prep": "짧은 WAV 1개와 새 프로젝트 폴더.",
   "steps": [
    "File > New Project에서 새 빈 프로젝트와 06_Integrated 폴더를 만듭니다.",
    "Studio > Studio Setup 및 Audio Connections에서 현재 출력이 맞는지 확인하고 WAV를 가져옵니다.",
    "트랙 이름을 바꾸고 Inspector·MixConsole을 찾아갑니다. 커서 위치·메트로놈·확대를 사용합니다.",
    "File > Save 후 닫고 File > Open으로 다시 열어 재생합니다. 안내를 가리고 막힌 단계만 메모한 뒤 다시 시도합니다."
   ],
   "criteria": [
    "새 프로젝트에서 출력·가져오기·저장 흐름을 연결했다.",
    "화면 전환·재생 위치·확대 동작을 재현했다.",
    "재열기 후 같은 소리를 확인했다."
   ],
   "confusion": [
    "시간이 남았다고 다음 회차 완료로 처리하지 않습니다.",
    "출력 드라이버 설정과 프로젝트 파일 저장은 별개입니다."
   ],
   "recovery": "막힌 동작만 해당 앞 회차의 공식 자료로 돌아가 확인한 뒤 통합 순서에 다시 연결합니다.",
   "reproduce": "다른 WAV와 새 폴더로 같은 흐름을 한 번 더 실행합니다.",
   "result": "06_Integrated.cpr",
   "refs": [
    "new",
    "driver",
    "bus",
    "import",
    "key"
   ],
   "video": "start"
  },
  {
   "id": 7,
   "title": "단축키 확인·복습",
   "goal": "Edit > Key Commands에서 실제 배정 확인, 막힌 동작 3개 반복",
   "apply": "현재 설정을 프리셋으로 보관하고 기록",
   "why": "단축키를 아는 것과 실제 작업 중 자료 없이 쓰는 것을 구분해 연습합니다.",
   "concept": "기본키는 출발점이고, 현재 PC의 실제 배정이 최종 기준입니다.",
   "prep": "01~06회차 중 직접 만든 프로젝트.",
   "steps": [
    "안내를 가리고 저장·재생·확대·믹서 열기 중 3개를 실행합니다. 성공 여부만 기록합니다.",
    "Edit > Key Commands에서 명령 이름으로 검색합니다. Press Key Search를 켜면 누른 키의 배정을 확인할 수 있습니다.",
    "충돌하거나 다른 키가 배정된 명령은 현재 배정을 노트에 적고 그 키로 다시 실행합니다. 오늘 새 사용자 지정키를 강요하지 않습니다.",
    "필요하면 Key Commands의 프리셋 저장 기능으로 현재 배정을 이름 붙여 보관합니다. 가장 막혔던 3개 동작을 서로 다른 순서로 재현합니다."
   ],
   "criteria": [
    "실제 명령 배정을 확인했다.",
    "성공·미확인을 구분해 단축키 노트를 기록했다.",
    "막힌 동작을 다시 실행하고 결과를 확인했다."
   ],
   "confusion": [
    "암기했다는 느낌만으로 독립 실행을 완료로 기록하지 않습니다.",
    "숫자 키패드와 일반 숫자열은 서로 다른 키입니다."
   ],
   "recovery": "키 입력이 검색문자로 들어가는지 명령 검색으로 작동하는지 Press Key Search 상태를 확인합니다. 동작이 다르면 활성 창과 선택 대상을 먼저 확인합니다.",
   "reproduce": "다른 프로젝트에서 순서를 바꿔 같은 명령 3개를 자료 없이 실행합니다.",
   "result": "07_Review.cpr + 실제 단축키 노트",
   "refs": [
    "key",
    "filekeys",
    "transportkeys",
    "zoomkeys"
   ]
  },
  {
   "id": 8,
   "title": "선택과 이동",
   "goal": "이벤트 선택·다중 선택·이동·Undo 재현",
   "apply": "서로 다른 길이의 이벤트로 반복",
   "why": "소리의 시작 위치를 의도대로 바꾸고 실수를 되돌리는 기본 편집입니다.",
   "concept": "트랙은 세로의 역할, 이벤트는 시간 위에 놓인 소리 조각입니다.",
   "prep": "짧은 WAV 이벤트가 있는 프로젝트를 08_Edit.cpr로 복사 저장.",
   "steps": [
    "Object Selection 도구로 WAV 이벤트를 클릭해 선택 상태를 확인합니다.",
    "이벤트 가운데를 드래그해 같은 트랙의 다른 마디로 옮깁니다. 모서리를 잡아 길이가 바뀌지 않게 합니다.",
    "Ctrl + Z로 되돌리고 Ctrl + Shift + Z로 다시 실행합니다. 처음 위치와 이동 후 위치를 비교합니다.",
    "다른 Audio 트랙을 하나 추가하고 이벤트를 세로로 옮겨 봅니다. 재생 후 최종 배치를 저장합니다."
   ],
   "criteria": [
    "선택 대상을 확인하고 시작 위치를 옮겼다.",
    "이동을 Undo·Redo로 확인했다.",
    "가로 이동과 트랙 간 이동을 구분했다."
   ],
   "confusion": [
    "빈 곳을 클릭하면 선택이 해제됩니다.",
    "이벤트 모서리 드래그는 가운데 드래그와 결과가 다릅니다."
   ],
   "recovery": "뜻밖의 길이 변화가 있으면 Undo하고 Object Selection의 Normal Sizing 상태와 잡은 위치를 확인합니다.",
   "reproduce": "다른 WAV를 다른 시작 마디로 옮기고 Undo·Redo를 재현합니다.",
   "result": "08_Edit.cpr",
   "refs": [
    "editkeys"
   ],
   "video": "tools"
  },
  {
   "id": 9,
   "title": "복제와 반복",
   "goal": "짧은 이벤트를 복제해 8마디 배열 만들기",
   "apply": "복제본 한 개만 바꿔 변형 구간 만들기",
   "why": "반복 구간을 빠르게 만들고 원본과 복사본을 구분합니다.",
   "concept": "복제는 선택 이벤트를 이어서 배치하는 편집입니다. 배치 길이는 선택 범위에 영향을 받습니다.",
   "prep": "짧은 오디오 또는 MIDI 파트.",
   "steps": [
    "Object Selection으로 복제할 이벤트 하나를 선택합니다.",
    "Edit > Functions > Duplicate 또는 Ctrl + D를 실행하고 복사본 위치를 확인합니다.",
    "복제와 이동으로 8마디 안에 반복 패턴을 배치합니다. WAV가 마디 길이에 딱 맞는다고 가정하지 않고 눈금자에서 시작 위치를 확인합니다.",
    "복사본 하나를 다른 위치로 옮긴 뒤 원본이 남는지 확인합니다. 재생 후 저장합니다."
   ],
   "criteria": [
    "선택 이벤트를 복제했다.",
    "8마디 구간의 반복 배치를 확인했다.",
    "원본과 복사본의 위치를 구분했다."
   ],
   "confusion": [
    "WAV의 실제 길이와 마디 길이는 다를 수 있습니다.",
    "복제 후 선택 대상이 바뀌므로 다음 명령의 대상을 확인합니다."
   ],
   "recovery": "예상과 다른 간격이면 선택한 여러 이벤트의 범위와 끝 위치를 확인합니다. Undo 후 하나만 선택해 재현합니다.",
   "reproduce": "다른 길이의 이벤트로 두 번 복제하고 배치 간격을 비교합니다.",
   "result": "09_Duplicate.cpr",
   "refs": [
    "editkeys",
    "grid"
   ],
   "video": "tools"
  },
  {
   "id": 10,
   "title": "분할과 길이",
   "goal": "커서에서 분할하고 앞뒤 길이 조절",
   "apply": "잘못 나눈 편집을 되돌리고 다른 지점에서 재편집",
   "why": "불필요한 부분을 잘라내고 필요한 소리만 배치할 수 있습니다.",
   "concept": "분할은 하나를 두 이벤트로 나누고, 경계 조절은 보이는 재생 범위를 바꿉니다.",
   "prep": "8초 정도의 WAV 이벤트.",
   "steps": [
    "분할할 이벤트를 선택하고 이벤트 안의 원하는 지점에 프로젝트 커서를 놓습니다.",
    "Edit > Functions > Split at Cursor 또는 Alt + X로 나눕니다. 두 이벤트가 생겼는지 확인합니다.",
    "Object Selection의 Normal Sizing 모드에서 이벤트 아래쪽 좌우 경계를 드래그해 앞뒤 범위를 줄입니다. 원래 범위로 다시 늘려 봅니다.",
    "경계를 재생해 듣고 Undo로 비교한 뒤 최종 범위를 저장합니다."
   ],
   "criteria": [
    "커서 위치에서 선택 이벤트를 분할했다.",
    "이벤트 경계로 재생 범위를 조절했다.",
    "편집 전후를 듣고 저장했다."
   ],
   "confusion": [
    "Normal Sizing과 Sizing Applies Time Stretch는 다릅니다.",
    "이벤트 경계를 줄이는 작업이 원본 WAV 자체를 삭제하는 것은 아닙니다."
   ],
   "recovery": "길이 조절 후 속도가 변하면 Undo하고 Object Selection 모드를 확인합니다. 분할이 안 되면 커서가 선택 이벤트 안에 있는지 봅니다.",
   "reproduce": "다른 WAV에서 시작·중간·끝을 기준으로 분할과 범위 조절을 재현합니다.",
   "result": "10_Split.cpr",
   "refs": [
    "split",
    "editkeys"
   ],
   "video": "tools"
  },
  {
   "id": 11,
   "title": "Range와 Snap",
   "goal": "오브젝트 선택과 범위 선택을 비교하고 그리드에 맞춰 이동",
   "apply": "Snap을 바꿨을 때 이동 결과 비교",
   "why": "여러 트랙에서 같은 시간 범위를 고르고 박자에 맞춰 편집합니다.",
   "concept": "Object Selection은 이벤트, Range Selection은 시간 구간을 고릅니다. Snap은 편집 위치가 기준점에 붙게 합니다.",
   "prep": "이벤트가 있는 오디오 트랙 2개.",
   "steps": [
    "Project 툴바의 Snap Type을 Grid, Grid Type을 Bar로 설정합니다. Snap을 켭니다.",
    "Object Selection으로 이벤트를 이동해 마디선에 붙는지 확인하고 Undo합니다.",
    "Range Selection 도구로 두 트랙의 같은 시간 구간을 드래그해 선택합니다. 이벤트 전체 선택과 색·범위 차이를 확인합니다.",
    "J로 Snap을 끈 뒤 같은 범위를 잡고 차이를 봅니다. 필요한 마디 범위를 정확히 고른 뒤 저장합니다."
   ],
   "criteria": [
    "이벤트 선택과 시간 범위 선택을 구분했다.",
    "Grid 기준과 Snap 켜짐 상태를 확인했다.",
    "두 트랙에서 같은 마디 범위를 선택했다."
   ],
   "confusion": [
    "Snap이 켜져 있어도 Grid 종류에 따라 붙는 위치가 다릅니다.",
    "Range 선택은 이벤트를 통째로 선택한 것과 다릅니다."
   ],
   "recovery": "잘못된 위치에 붙으면 Snap Type·Grid Type·툴을 함께 확인합니다. 편집 실수는 Undo 후 선택 범위부터 다시 잡습니다.",
   "reproduce": "다른 두 트랙에서 Bar와 더 작은 Grid를 비교합니다.",
   "result": "11_Range_Snap.cpr",
   "refs": [
    "range",
    "grid",
    "editkeys"
   ],
   "video": "tools"
  },
  {
   "id": 12,
   "title": "로케이터와 Cycle",
   "goal": "선택 구간에 로케이터를 맞추고 반복 재생",
   "apply": "다른 3구간을 차례로 반복",
   "why": "같은 구간을 반복해 듣거나 녹음하고, 내보낼 범위를 정하는 기반입니다.",
   "concept": "좌우 로케이터는 구간의 시작·끝이고 Cycle은 그 사이를 반복하는 스위치입니다.",
   "prep": "4~8마디에 이벤트가 배치된 프로젝트.",
   "steps": [
    "반복할 이벤트들을 선택합니다. Transport > Locators > Set Locators to Selection Range 또는 P로 좌우 로케이터를 설정합니다.",
    "눈금자에서 왼쪽 로케이터가 오른쪽보다 앞에 있는지 확인합니다. 필요한 경우 손잡이를 옮겨 정확히 8마디로 맞춥니다.",
    "Transport > Transport Commands > Cycle을 켭니다. 숫자 키패드가 있으면 Num /를 사용할 수 있습니다.",
    "Transport > Locators > Go to Left Locator Position 또는 Num 1로 시작에 가서 재생합니다. 끝에서 시작으로 돌아오는지 듣고 저장합니다."
   ],
   "criteria": [
    "반복할 구간의 좌우 로케이터를 설정했다.",
    "Cycle이 실제로 끝에서 시작으로 돌아오는 것을 확인했다.",
    "로케이터와 프로젝트 커서를 구분했다."
   ],
   "confusion": [
    "일반 /와 숫자 키패드 /는 다릅니다.",
    "선택 이벤트 길이와 원하는 8마디 범위는 같지 않을 수 있습니다."
   ],
   "recovery": "반복이 안 되면 Cycle 상태와 좌우 로케이터 순서·범위를 확인합니다. 키패드가 없으면 메뉴나 Transport 버튼을 사용합니다.",
   "reproduce": "다른 이벤트 묶음으로 4마디 반복 범위를 새로 설정합니다.",
   "result": "12_Cycle.cpr",
   "refs": [
    "transport",
    "transportkeys"
   ],
   "video": "start"
  },
  {
   "id": 13,
   "title": "2주 통합",
   "goal": "4마디 소스를 16마디로 배열하고 일부를 수정",
   "apply": "마커로 구간 이름 붙이기",
   "why": "선택·복제·분할·반복 재생을 묶어 짧은 편곡 구조를 만듭니다.",
   "concept": "반복 구조를 만들되 바뀌는 구간을 하나 넣어 편집 결과를 들을 수 있게 합니다.",
   "prep": "짧은 WAV 2개 또는 앞 회차의 4마디 배치.",
   "steps": [
    "13_Arrangement.cpr로 저장하고 4마디 기본 구간을 선택합니다.",
    "Duplicate와 이동으로 16마디 범위를 만듭니다. Snap 기준을 확인합니다.",
    "한 구간을 Split at Cursor로 나누고 끝부분 배치를 바꿔 변화를 만듭니다.",
    "로케이터를 전체 범위에 맞추고 Cycle로 들으며 겹침과 빈 구간을 확인합니다. 닫고 다시 열어 재생합니다."
   ],
   "criteria": [
    "4마디 아이디어를 16마디로 배치했다.",
    "분할·이동으로 변화 한 곳을 만들었다.",
    "전체 구간을 반복 재생하고 재열기를 확인했다."
   ],
   "confusion": [
    "복제 횟수와 최종 음악 길이는 따로 확인합니다.",
    "격자에 맞아도 소리의 실제 시작이 늦을 수 있습니다."
   ],
   "recovery": "예상치 못한 겹침은 확대해 이벤트 시작·끝을 확인합니다. 문제 구간만 Undo 후 다시 편집합니다.",
   "reproduce": "다른 WAV로 변화 구간의 위치를 바꿔 재현합니다.",
   "result": "13_Arrangement.cpr",
   "refs": [
    "split",
    "grid",
    "transport"
   ],
   "video": "tools"
  },
  {
   "id": 14,
   "title": "편집 복습",
   "goal": "복제·분할·범위 선택·반복·복구를 자료 없이 수행",
   "apply": "실수했던 편집만 다시 연습",
   "why": "이벤트 편집을 설명 없이 재현하고 다음 MIDI 작업의 기반을 다집니다.",
   "concept": "복습의 기준은 메뉴를 봤는지가 아니라 결과를 직접 만들었는지입니다.",
   "prep": "새 WAV와 빈 프로젝트.",
   "steps": [
    "자료 없이 WAV를 가져오고 저장합니다. 복제 → 이동 → 분할 → Undo를 순서대로 실행합니다.",
    "Range로 한 마디를 잡고 Snap 켜짐·꺼짐 차이를 확인합니다.",
    "8마디 로케이터를 정하고 Cycle 재생을 실행합니다.",
    "막힌 명령만 Edit > Key Commands에서 확인하고 다른 위치에서 한 번 더 실행합니다."
   ],
   "criteria": [
    "편집 핵심 네 동작을 재현했다.",
    "선택 도구와 Snap의 역할을 구분했다.",
    "8마디 반복 구간과 재열기를 확인했다."
   ],
   "confusion": [
    "빠르게 끝냈다는 것과 모든 동작이 독립적으로 가능한 것은 별개입니다.",
    "일부 완료라면 성공한 동작은 유지하고 남은 동작만 보충합니다."
   ],
   "recovery": "어느 도구·창·선택 상태에서 막혔는지 적고 그 조건을 바꿔 비교합니다.",
   "reproduce": "다른 소스로 같은 순서를 섞어서 반복합니다.",
   "result": "14_Edit_Review.cpr",
   "refs": [
    "key",
    "split",
    "range",
    "transport"
   ],
   "video": "tools"
  },
  {
   "id": 15,
   "title": "외부 가상악기와 MIDI 입력",
   "goal": "설치된 외부 악기 한 개의 인식을 확인하고 Instrument 트랙에서 음색 로드·입력·재생·저장",
   "apply": "같은 프로젝트를 다시 열어 음색·샘플 재호출 확인, 미인식이면 아래 진단 순서 적용",
   "why": "실제로 설치된 악기를 불러와 연주·저장·재열기까지 연결합니다.",
   "concept": "악기 트랙은 MIDI 입력을 가상악기로 보내 오디오를 만듭니다. 패치가 로드되어야 소리가 나는 제품도 있습니다.",
   "prep": "현재 PC에서 설치·인증된 악기. 외부 제품이 없으면 사용 가능한 내장 악기로 공통 조작을 진행하고 외부 제품 검증은 보충으로 남깁니다.",
   "steps": [
    "Studio > VST Plug-in Manager에서 사용하려는 악기의 정확한 제품명·버전·형식을 확인합니다.",
    "Project > Add Track > Instrument에서 그 악기를 고르고 트랙을 추가합니다. 악기 창에서 실제 사용 가능한 패치/프리셋을 로드합니다.",
    "현재 MIDI 건반을 입력으로 선택합니다. 건반이 없으면 Studio > On-Screen Keyboard를 열고 해당 트랙의 Record Enable을 켠 뒤 화면 건반으로 소리를 확인합니다.",
    "화면 건반을 닫고 15_Instrument.cpr로 저장합니다. 프로젝트를 닫고 다시 열어 같은 패치와 소리가 복원되는지 확인합니다."
   ],
   "criteria": [
    "현재 사용할 수 있는 악기와 패치를 불러왔다.",
    "MIDI 입력이 악기 소리로 출력되었다.",
    "저장·재열기 결과와 실제 확인한 제품 정보를 남겼다."
   ],
   "confusion": [
    "독립 실행 앱에서 소리가 나도 Cubase의 플러그인 경로는 별도 확인입니다.",
    "화면 건반이 열린 동안 문자 키가 연주에 사용될 수 있습니다."
   ],
   "recovery": "인식 → 패치·샘플 로드 → MIDI 입력/Record Enable → 오디오 출력 중 어느 단계가 실패했는지 확인합니다. 설치가 길어지면 별도 보충으로 분리합니다.",
   "reproduce": "다른 패치로 짧게 연주하고 새 이름으로 저장·재열기를 재현합니다.",
   "result": "15_Instrument.cpr + 실제 제품·인식·소리·재열기 기록",
   "refs": [
    "instrument",
    "manager",
    "keyboard",
    "studiokeys"
   ],
   "video": "midi",
   "plugin": true
  },
  {
   "id": 16,
   "title": "MIDI 녹음",
   "goal": "4마디를 녹음하고 결과 파트 확인",
   "apply": "두 번째 연주를 녹음해 비교",
   "why": "머릿속 리듬과 연주를 편집 가능한 MIDI로 남깁니다.",
   "concept": "MIDI 녹음은 소리 파일 대신 음높이·시작·길이·세기 같은 연주 정보를 기록합니다.",
   "prep": "소리가 확인된 악기 트랙과 MIDI 건반 또는 On-Screen Keyboard.",
   "steps": [
    "Tempo 100, 4/4에서 1~5마디 로케이터로 4마디 구간을 정합니다. 메트로놈을 켭니다.",
    "악기 트랙의 MIDI 입력과 Record Enable을 확인합니다. Transport > Transport Commands > Record 또는 Num *로 녹음하고 4마디를 연주합니다.",
    "정지한 뒤 화면 건반을 닫고 MIDI 파트를 재생합니다. 실제 노트가 생겼는지 확인합니다.",
    "별도 빈 구간에 두 번째 4마디를 녹음해 비교합니다. 마음에 드는 테이크 위치를 적고 저장합니다."
   ],
   "criteria": [
    "4마디 MIDI를 두 번 녹음했다.",
    "녹음된 파트를 재생해 입력 결과를 확인했다.",
    "실제 사용 입력과 선택한 테이크를 기록했다."
   ],
   "confusion": [
    "MIDI 파트가 생겼어도 악기 출력이 없으면 무음입니다.",
    "Record Enable과 실제 Transport Record는 다른 단계입니다."
   ],
   "recovery": "파트가 비면 입력 포트·트랙 선택·Record Enable을 확인합니다. 노트는 있는데 무음이면 패치와 오디오 출력을 확인합니다.",
   "reproduce": "다른 리듬으로 4마디를 녹음하고 재생합니다.",
   "result": "16_MIDI_Record.cpr",
   "refs": [
    "keyboard",
    "transport",
    "transportkeys"
   ],
   "video": "midi"
  },
  {
   "id": 17,
   "title": "Key Editor",
   "goal": "음높이·시작·길이 수정",
   "apply": "선택한 음들만 일괄 수정",
   "why": "연주를 다시 하지 않고 틀린 음과 타이밍·길이를 고칩니다.",
   "concept": "Key Editor의 세로는 음높이, 가로는 시간입니다. 노트 가운데와 끝을 잡는 결과가 다릅니다.",
   "prep": "직접 녹음한 MIDI 파트.",
   "steps": [
    "MIDI 파트를 선택하고 MIDI > Open Key Editor를 실행합니다. Ctrl + E는 현재 기본 편집기 설정에 따라 동작하므로 실제 배정을 확인합니다.",
    "노트 하나의 가운데를 위아래로 이동해 음높이를 바꿉니다. 다른 노트와 겹치지 않는지 봅니다.",
    "노트 가운데를 좌우로 옮겨 시작을 바꾸고 오른쪽 끝을 잡아 길이를 바꿉니다.",
    "편집 전후를 Undo로 비교하고 최종 노트 3개를 의도한 위치·길이로 만들어 저장합니다."
   ],
   "criteria": [
    "노트의 음높이·시작·길이를 각각 수정했다.",
    "의도치 않은 겹침을 확인했다.",
    "편집 결과를 들어보고 저장했다."
   ],
   "confusion": [
    "시작 위치 이동과 길이 변경은 서로 다른 조작입니다.",
    "파트 경계와 그 안의 노트 길이는 다릅니다."
   ],
   "recovery": "움직임이 과하면 Snap/Grid를 확인합니다. 다른 편집기가 열리면 메뉴의 Open Key Editor로 직접 엽니다.",
   "reproduce": "다른 MIDI 구절에서 3개의 노트를 골라 같은 세 편집을 재현합니다.",
   "result": "17_Key_Editor.cpr",
   "refs": [
    "editor",
    "editkeys"
   ],
   "video": "midi"
  },
  {
   "id": 18,
   "title": "퀀타이즈",
   "goal": "시작 위치 교정 전후 비교·Undo",
   "apply": "서로 다른 그리드에서 차이 청음",
   "why": "박자를 정리하면서 원래 연주의 느낌을 비교할 수 있습니다.",
   "concept": "퀀타이즈는 선택 노트의 시간 위치를 기준 격자에 맞춥니다. 음높이 교정 기능은 아닙니다.",
   "prep": "타이밍 차이가 있는 MIDI 파트의 복사본.",
   "steps": [
    "원본 파트를 남기고 복사본을 Key Editor에서 엽니다.",
    "정리할 노트만 선택하고 Quantize Presets를 1/8로 설정합니다.",
    "Edit > Quantize를 적용하고 원본과 번갈아 듣습니다. Undo 후 1/16 기준으로 다시 적용합니다.",
    "어느 기준이 리듬에 맞는지 기록하고 최종 선택을 저장합니다."
   ],
   "criteria": [
    "선택 노트에 1/8·1/16 기준을 비교 적용했다.",
    "원본과 결과를 들어 차이를 설명했다.",
    "원본을 보존하고 선택한 결과를 저장했다."
   ],
   "confusion": [
    "Position Quantize와 Length Quantize는 다릅니다.",
    "모든 노트를 같은 격자에 맞추는 것이 항상 원하는 리듬은 아닙니다."
   ],
   "recovery": "리듬이 달라지면 Undo 후 선택 범위와 Quantize Preset을 확인합니다. 먼저 소수 노트에 적용합니다.",
   "reproduce": "다른 리듬의 파트에 같은 두 격자를 비교합니다.",
   "result": "18_Quantize.cpr",
   "refs": [
    "quantize",
    "editor"
   ],
   "video": "midi"
  },
  {
   "id": 19,
   "title": "벨로시티",
   "goal": "벨로시티에 반응하는 피아노 등으로 강약 편집",
   "apply": "음높이·길이는 유지하고 강약만 다른 버전 제작",
   "why": "같은 음표라도 강약을 다르게 연주한 것처럼 표현할 수 있습니다.",
   "concept": "Velocity는 노트에 담긴 연주 세기입니다. 실제 음색·볼륨 반응은 악기 패치에 따라 다릅니다.",
   "prep": "동일한 음을 반복하는 MIDI 파트.",
   "steps": [
    "Key Editor에서 하단 Controller Lane의 Velocity를 표시합니다.",
    "네 개 노트의 벨로시티를 낮음·중간·높음·중간으로 바꿉니다.",
    "같은 패치로 재생해 볼륨뿐 아니라 음색 변화가 있는지 듣습니다.",
    "다른 패치를 로드해 같은 MIDI를 재생하고 반응 차이를 메모합니다. 실제 쓰기로 한 패치로 저장합니다."
   ],
   "criteria": [
    "노트별 벨로시티를 편집했다.",
    "같은 패치 안의 강약 변화를 들었다.",
    "패치별 반응 차이를 실제로 확인했다."
   ],
   "confusion": [
    "Velocity와 트랙 페이더는 다릅니다.",
    "CC1·CC11 기능은 패치마다 다르므로 여기서 값을 추정하지 않습니다."
   ],
   "recovery": "차이가 없으면 선택 노트와 해당 패치의 Velocity 반응을 확인합니다. 반응 없는 사실 자체를 정확히 기록합니다.",
   "reproduce": "다른 멜로디의 강박·약박에 서로 다른 세기를 적용합니다.",
   "result": "19_Velocity.cpr",
   "refs": [
    "editor"
   ],
   "video": "midi"
  },
  {
   "id": 20,
   "title": "3주 통합",
   "goal": "8마디 3트랙 MIDI 스케치",
   "apply": "트랙 간 복사·음역 이동으로 배치 비교",
   "why": "악기별 역할을 나누어 짧은 음악 스케치를 완성합니다.",
   "concept": "여러 트랙의 역할을 분리하면 편집과 믹싱이 쉬워집니다.",
   "prep": "현재 사용 가능한 내장 악기 중심으로 3트랙.",
   "steps": [
    "Project > Add Track > Instrument로 3개 악기 트랙을 준비하고 멜로디·화음·베이스 역할로 이름을 붙입니다.",
    "각 트랙에 MIDI 입력 또는 녹음으로 8마디를 만듭니다.",
    "Key Editor에서 필요한 음높이·길이·타이밍·벨로시티만 수정합니다.",
    "8마디 로케이터로 Cycle 재생하고 각 역할이 들리는지 확인합니다. 저장·재열기를 확인합니다."
   ],
   "criteria": [
    "8마디에 악기 3트랙을 구성했다.",
    "MIDI 편집을 각 트랙에 적용했다.",
    "반복 재생과 재열기를 확인했다."
   ],
   "confusion": [
    "트랙 수가 늘어도 실제 사용할 패치가 로드되어야 합니다.",
    "같은 MIDI를 복제하는 것과 역할에 맞는 음역을 만드는 것은 별개입니다."
   ],
   "recovery": "과부하가 있으면 복잡한 패치 수를 줄이고 현재 사용 가능한 내장 악기로 핵심 흐름을 유지합니다.",
   "reproduce": "다른 멜로디로 4마디를 만들어 같은 3역할에 적용합니다.",
   "result": "20_MIDI_Sketch.cpr",
   "refs": [
    "instrument",
    "editor",
    "quantize",
    "transport"
   ],
   "video": "midi"
  },
  {
   "id": 21,
   "title": "MIDI 복습",
   "goal": "틀린 음·길이·시작 위치를 독립적으로 수정",
   "apply": "녹음부터 스케치까지 재현",
   "why": "악기 생성부터 MIDI 편집까지 독립적으로 연결해 봅니다.",
   "concept": "완료한 결과와 자료 없이 재현한 동작을 따로 기록합니다.",
   "prep": "새 프로젝트와 다른 짧은 멜로디 아이디어.",
   "steps": [
    "자료 없이 악기 트랙·패치를 만들고 입력을 확인합니다.",
    "4마디를 녹음한 뒤 Key Editor에서 틀린 음 1개, 길이 1개, 세기 1개를 수정합니다.",
    "퀀타이즈 전후를 비교한 뒤 8마디로 배치하고 Cycle을 설정합니다.",
    "저장·재열기 후 같은 소리를 확인하고 막힌 동작만 보충합니다."
   ],
   "criteria": [
    "악기 생성·입력·녹음을 재현했다.",
    "음높이·길이·벨로시티·퀀타이즈를 구분해 사용했다.",
    "8마디 반복과 재열기를 확인했다."
   ],
   "confusion": [
    "악기 패치 복원이 안 되는 문제와 MIDI 입력 문제를 섞지 않습니다.",
    "빠르게 끝났더라도 확인하지 않은 동작은 미확인입니다."
   ],
   "recovery": "실패 지점을 악기 인식·입력·편집·재열기로 나누어 한 단계씩 확인합니다.",
   "reproduce": "다른 패치와 멜로디로 같은 흐름을 재현합니다.",
   "result": "21_MIDI_Review.cpr",
   "refs": [
    "instrument",
    "keyboard",
    "editor",
    "quantize"
   ],
   "video": "midi"
  },
  {
   "id": 22,
   "title": "오디오 입력·모니터링",
   "goal": "사용 가능한 입력으로 짧게 녹음하고 모니터링 경로 확인",
   "apply": "버퍼 설정 변화와 지연을 비교해 기록",
   "why": "실제 마이크나 악기 소리를 Cubase에 기록하는 기본 경로를 익힙니다.",
   "concept": "입력 버스는 외부 소리가 들어오는 길이고 모니터링은 그 소리를 듣는 방식입니다.",
   "prep": "현재 PC에서 사용 가능한 마이크·오디오 인터페이스·케이블. 실제 장치가 없으면 녹음 부분은 미확인으로 남깁니다.",
   "steps": [
    "Studio > Studio Setup > Audio System에서 현재 장치의 실제 드라이버를 확인합니다. Studio > Audio Connections > Inputs에서 연결한 실제 포트에 맞는 Mono 또는 Stereo 입력 버스를 만듭니다.",
    "Project > Add Track > Audio로 입력과 같은 구성을 선택하고 Input Routing을 실제 버스로 지정합니다.",
    "헤드폰으로 듣고 입력 신호를 확인합니다. 직접 모니터링과 Cubase Monitor 버튼 중 듣는 경로를 구분해 이중으로 들리지 않게 합니다.",
    "Record Enable을 켜고 10초 정도 녹음합니다. 정지 후 Monitor를 끄고 녹음된 이벤트를 재생해 확인합니다. 실제 입력·출력 이름을 메모합니다."
   ],
   "criteria": [
    "실제 입력 포트와 트랙 입력을 연결했다.",
    "클리핑 없이 짧은 오디오를 녹음했다.",
    "녹음 후 Monitor를 구분하고 재생·재열기를 확인했다."
   ],
   "confusion": [
    "오디오 입력과 MIDI 입력은 다릅니다.",
    "직접 모니터링과 소프트웨어 모니터링이 겹치면 두 번 들릴 수 있습니다."
   ],
   "recovery": "입력 미터가 안 움직이면 장치·입력 버스·트랙 입력 순으로 확인합니다. 녹음은 됐는데 안 들리면 Monitor와 출력 경로를 확인합니다. 장치 미보유는 완료로 바꾸지 않습니다.",
   "reproduce": "다른 짧은 구절이나 건반 소리를 녹음합니다.",
   "result": "22_Audio_Record.cpr + 실제 장치·포트 메모",
   "refs": [
    "record",
    "monitor",
    "bus",
    "driver"
   ]
  },
  {
   "id": 23,
   "title": "오디오 이벤트 편집",
   "goal": "녹음의 앞뒤를 정리하고 불필요한 구간 제거",
   "apply": "여러 편집 지점의 연결 상태 확인",
   "why": "불필요한 대기와 실수를 제거해 필요한 구절만 남깁니다.",
   "concept": "오디오 편집은 파형을 보는 것과 실제 경계를 듣는 것을 함께 해야 합니다.",
   "prep": "직접 녹음한 오디오 이벤트.",
   "steps": [
    "23_Audio_Edit.cpr로 복사 저장합니다. 원본 이벤트를 보존할 트랙이나 복사본을 준비합니다.",
    "Object Selection의 Normal Sizing으로 처음·끝의 무음 범위를 줄입니다.",
    "이벤트를 선택하고 두 지점에서 Split at Cursor를 실행해 중간의 불필요한 부분을 나눕니다.",
    "불필요한 조각을 지우고 필요한 이벤트를 배치합니다. 연결부를 확대해 듣고 저장합니다."
   ],
   "criteria": [
    "처음·끝의 불필요한 범위를 줄였다.",
    "중간 구간을 분할해 편집했다.",
    "연결부를 들어 결과를 확인했다."
   ],
   "confusion": [
    "파형이 작아 보여도 필요한 호흡·잔향일 수 있습니다.",
    "이벤트를 삭제하는 것과 원본 파일을 Pool에서 삭제하는 것은 다릅니다."
   ],
   "recovery": "필요한 부분을 잘랐으면 Undo하거나 이벤트 경계를 다시 늘립니다. 원본을 먼저 지우지 않습니다.",
   "reproduce": "다른 녹음에서 처음·중간·끝을 같은 방식으로 편집합니다.",
   "result": "23_Audio_Edit.cpr",
   "refs": [
    "split"
   ],
   "video": "audio"
  },
  {
   "id": 24,
   "title": "페이드·크로스페이드",
   "goal": "잘린 경계에 페이드 적용하고 청음",
   "apply": "연결 길이를 바꿔 가장 자연스러운 결과 선택",
   "why": "오디오의 시작·끝과 조각 사이가 자연스럽게 이어지게 합니다.",
   "concept": "Fade는 한 이벤트의 소리를 서서히 바꾸고 Crossfade는 겹친 두 이벤트를 연결합니다.",
   "prep": "연결할 녹음 조각 2개.",
   "steps": [
    "이벤트의 상단 왼쪽·오른쪽 페이드 핸들을 짧게 드래그해 Fade In/Out을 만듭니다.",
    "같은 트랙의 두 이벤트를 조금 겹치게 배치하고 둘을 선택합니다.",
    "Audio > Fades > Crossfade 또는 X로 연결합니다. 길이를 조절해 비교해서 듣습니다.",
    "각 이벤트의 시작·끝과 중간 연결부를 따로 재생하고 최종 선택을 저장합니다."
   ],
   "criteria": [
    "한 이벤트에 Fade In/Out을 만들었다.",
    "겹친 두 이벤트에 Crossfade를 적용했다.",
    "세 연결 지점을 듣고 길이를 조정했다."
   ],
   "confusion": [
    "페이드와 이벤트 길이 조절은 서로 다른 핸들입니다.",
    "크로스페이드는 두 이벤트의 겹치는 구간이 필요합니다."
   ],
   "recovery": "X가 동작하지 않으면 같은 트랙에서 두 이벤트를 모두 선택했고 겹침이 있는지 확인합니다. 길이가 과하면 Undo 후 짧게 다시 적용합니다.",
   "reproduce": "다른 두 녹음 조각에 같은 연결 처리를 적용합니다.",
   "result": "24_Fades.cpr",
   "refs": [
    "fade",
    "cross",
    "editkeys"
   ],
   "video": "audio"
  },
  {
   "id": 25,
   "title": "레벨 조절 위치",
   "goal": "이벤트 게인과 채널 페이더를 각각 조절·비교",
   "apply": "한 파일 안의 구간별 크기 정리",
   "why": "녹음 조각 사이의 레벨 차이를 다듬어 이후 믹싱을 편하게 합니다.",
   "concept": "이벤트 게인은 조각별 크기, 채널 페이더는 그 트랙 전체 크기를 조절합니다.",
   "prep": "크기가 다른 오디오 이벤트 2개.",
   "steps": [
    "오디오 이벤트를 선택하고 Info Line의 Volume 또는 이벤트 왼쪽 아래의 볼륨 조절 핸들을 찾습니다. Cubase 15 이전 영상의 핸들 위치와 다를 수 있습니다.",
    "큰 이벤트의 볼륨을 낮춰 작은 이벤트와 번갈아 듣습니다.",
    "Studio > MixConsole에서 같은 트랙의 페이더를 움직이고 두 이벤트 모두 변하는지 확인합니다.",
    "이벤트 볼륨은 조각 간 균형에, 페이더는 전체 균형에 사용해 저장합니다."
   ],
   "criteria": [
    "이벤트별 볼륨 차이를 조절했다.",
    "트랙 페이더가 두 이벤트에 영향을 주는 것을 확인했다.",
    "클리핑 여부를 확인하고 저장했다."
   ],
   "confusion": [
    "파형 표시 확대와 실제 이벤트 볼륨은 다릅니다.",
    "이벤트 게인을 올리는 것이 이미 찌그러진 녹음을 복원하지는 않습니다."
   ],
   "recovery": "눈으로만 판단하지 말고 같은 출력 볼륨에서 번갈아 듣습니다. 과하면 Undo하거나 Info Line Volume 값을 되돌립니다.",
   "reproduce": "다른 두 이벤트의 레벨 차이를 같은 순서로 조절합니다.",
   "result": "25_Event_Gain.cpr",
   "refs": [
    "gain"
   ],
   "video": "audio"
  },
  {
   "id": 26,
   "title": "테이크와 선택",
   "goal": "두 테이크에서 원하는 구간을 골라 연결",
   "apply": "짧은 Comping 실습",
   "why": "여러 번의 녹음에서 필요한 부분을 골라 하나의 연주로 만듭니다.",
   "concept": "Lanes는 테이크를 나누어 보여주며 Comp 도구는 구간별로 사용할 테이크를 고릅니다.",
   "prep": "같은 구절을 여러 번 녹음할 실제 입력 장치.",
   "steps": [
    "짧은 구간에 Cycle을 설정하고 실제 오디오 입력을 확인합니다. Record Mode에서 테이크를 보존하는 설정을 확인해 두 번 이상 녹음합니다.",
    "트랙의 Show Lanes를 켜 각 테이크를 봅니다. 각 테이크를 들어 차이를 메모합니다.",
    "Comp 도구로 첫 구간과 뒷 구간에 쓸 테이크를 고릅니다.",
    "연결부의 겹침과 페이드를 듣고 손본 뒤 저장합니다. 원래 테이크는 남겨 둡니다."
   ],
   "criteria": [
    "서로 다른 실제 테이크를 Lanes에서 확인했다.",
    "구간별로 사용할 테이크를 선택했다.",
    "연결부를 듣고 원래 테이크를 보존했다."
   ],
   "confusion": [
    "다른 테이크를 고르는 것과 이벤트를 새로 복사하는 것은 다릅니다.",
    "녹음 모드에 따라 이전 녹음 보존 방식이 다릅니다."
   ],
   "recovery": "이전 테이크가 안 보이면 Lanes 표시와 실제 녹음 모드를 확인합니다. 입력 장치가 없으면 이 과제는 보충으로 남깁니다.",
   "reproduce": "다른 짧은 구절을 두 번 녹음해 테이크 선택을 재현합니다.",
   "result": "26_Comp.cpr",
   "refs": [
    "take",
    "record"
   ],
   "video": "audio"
  },
  {
   "id": 27,
   "title": "4주 통합",
   "goal": "30초 오디오를 편집해 비교용 버전 저장",
   "apply": "같은 소스를 다른 방식으로 다시 편집",
   "why": "녹음과 편집 기능을 묶어 들을 수 있는 짧은 결과물을 만듭니다.",
   "concept": "한 번의 통합 작업에서 입력 경로·편집·연결부·레벨을 함께 확인합니다.",
   "prep": "약 30초의 직접 녹음 또는 조합할 녹음 조각.",
   "steps": [
    "실제 입력을 확인하고 필요한 오디오를 녹음합니다.",
    "불필요한 범위를 정리하고 필요한 테이크를 고릅니다.",
    "시작·끝의 Fade, 연결부의 Crossfade, 이벤트별 Volume을 적용합니다.",
    "전체 약 30초를 재생하고 소리의 시작·연결·끝을 확인합니다. 저장하고 다시 열어 듣습니다."
   ],
   "criteria": [
    "약 30초의 오디오 편집 결과를 만들었다.",
    "페이드·테이크·게인 기능을 목적에 맞게 사용했다.",
    "입출력 경로와 재열기를 확인했다."
   ],
   "confusion": [
    "편집 완료와 WAV 내보내기는 별도입니다. 오늘은 CPR과 사용 오디오를 보관합니다.",
    "클리핑 원인이 녹음인지 믹싱인지 구분해야 합니다."
   ],
   "recovery": "문제가 나는 구간만 확대해 들어보고 편집 또는 실제 입력 레벨 중 실패한 단계를 보충합니다.",
   "reproduce": "다른 구절의 시작·연결·끝을 같은 방식으로 다듬습니다.",
   "result": "27_Audio_30sec.cpr",
   "refs": [
    "record",
    "fade",
    "cross",
    "gain",
    "take"
   ],
   "video": "audio"
  },
  {
   "id": 28,
   "title": "오디오 복습",
   "goal": "분할·페이드·레벨·복구를 자료 없이 수행",
   "apply": "첫 녹음부터 다시 수행",
   "why": "오디오 작업을 설명 없이 재현하며 아직 막히는 입력·편집 동작을 찾습니다.",
   "concept": "확인하지 못한 장치 설정은 추정하지 않고 미확인으로 기록합니다.",
   "prep": "다른 짧은 녹음 소스와 현재 입력 장치.",
   "steps": [
    "자료 없이 입력 버스·트랙 입력·Monitor·Record Enable을 확인하고 짧게 녹음합니다.",
    "이벤트 분할·경계·Fade·Volume을 차례로 적용합니다.",
    "두 조각을 겹쳐 Crossfade를 만들고 결과를 듣습니다.",
    "저장·재열기 후 막힌 동작만 다시 실행합니다."
   ],
   "criteria": [
    "현재 입력·모니터링 경로를 재현했다.",
    "기본 오디오 편집을 재현했다.",
    "재열기 결과와 남은 문제를 기록했다."
   ],
   "confusion": [
    "이전에 해결한 장치 이름을 현재 PC의 값으로 쓰지 않습니다.",
    "녹음 결과 확인과 단축키 독립 실행은 따로 기록합니다."
   ],
   "recovery": "포트 이름과 실제로 선택한 값을 기록해 어느 경로에서 소리가 끊기는지 확인합니다.",
   "reproduce": "다른 소스로 같은 작업을 순서를 바꿔 실행합니다.",
   "result": "28_Audio_Review.cpr",
   "refs": [
    "bus",
    "monitor",
    "fade",
    "cross",
    "gain"
   ],
   "video": "audio"
  },
  {
   "id": 29,
   "title": "MixConsole",
   "goal": "볼륨·팬·Mute·Solo와 미터를 조작",
   "apply": "4트랙의 상대적 밸런스 비교",
   "why": "각 트랙을 함께 들었을 때 필요한 소리가 들리도록 균형을 잡습니다.",
   "concept": "Volume은 크기, Pan은 좌우 배치, Mute는 제외, Solo는 집중해서 듣는 도구입니다.",
   "prep": "최소 4트랙의 짧은 프로젝트. 부족하면 기존 스케치에 짧은 오디오를 추가합니다.",
   "steps": [
    "Studio > MixConsole을 열고 Project의 트랙 이름과 대응시킵니다.",
    "모든 페이더를 과하게 올리지 않은 상태에서 중심 트랙을 정하고 다른 트랙을 하나씩 더하며 균형을 맞춥니다.",
    "Pan으로 두 보조 트랙을 조금씩 좌우에 배치하고 Mute·Solo로 역할을 비교합니다.",
    "출력 미터의 클리핑 표시를 확인하며 전체를 듣습니다. 최종 Volume·Pan 상태를 저장합니다."
   ],
   "criteria": [
    "4트랙의 상대 볼륨을 조절했다.",
    "Pan·Mute·Solo의 역할을 실제로 비교했다.",
    "출력 클리핑을 확인하고 균형을 저장했다."
   ],
   "confusion": [
    "Solo로 좋게 들리는 것과 전체에서 잘 들리는 것은 다릅니다.",
    "페이더를 올리는 것만으로 마스킹 문제가 해결되지는 않습니다."
   ],
   "recovery": "특정 트랙이 안 들리면 Mute/Solo와 출력 경로를 확인합니다. 출력이 넘치면 관련 트랙 레벨을 낮춰 다시 비교합니다.",
   "reproduce": "다른 구간에서 중심 트랙을 바꾸어 균형을 잡습니다.",
   "result": "29_MixConsole.cpr",
   "refs": [
    "group",
    "studiokeys"
   ],
   "video": "mix"
  },
  {
   "id": 30,
   "title": "외부 이펙트와 Insert",
   "goal": "설치된 EQ 등 효과 한 개를 Insert에 넣고 파라미터·우회 전후를 비슷한 크기로 비교",
   "apply": "효과 순서를 바꾸어 비교하고 원복, 컴프레서의 입출력 확인",
   "why": "트랙 하나의 음색을 처리하고 실제 효과를 비교합니다.",
   "concept": "Insert는 트랙 신호가 통과하는 효과입니다. Bypass로 처리 전후를 비교할 수 있습니다.",
   "prep": "내장 효과 또는 현재 설치·인증된 외부 효과 1개.",
   "steps": [
    "Studio > VST Plug-in Manager에서 외부 효과를 쓴다면 정확한 제품명·버전·형식을 확인합니다. 미설치라면 내장 효과로 진행합니다.",
    "트랙의 Edit Channel Settings를 열고 Inserts의 빈 슬롯에서 효과를 하나 선택합니다.",
    "파라미터 하나만 바꾸어 재생합니다. 바꾼 값과 들린 차이를 메모합니다.",
    "Insert의 Bypass를 켜고 끄며 전후를 비교합니다. 음량 차이 때문에 좋게 느끼는지 함께 확인하고 저장·재열기를 확인합니다."
   ],
   "criteria": [
    "한 트랙에 Insert를 적용했다.",
    "파라미터 하나의 전후 차이를 비교했다.",
    "제품과 재열기 결과를 확인한 범위만 기록했다."
   ],
   "confusion": [
    "Bypass와 플러그인 제거는 다릅니다.",
    "외부 소프트웨어 효과를 External FX 하드웨어 연결과 혼동하지 않습니다."
   ],
   "recovery": "플러그인이 안 보이면 실제 설치·인증·형식과 Manager 분류를 먼저 확인합니다. 소리가 사라지면 Bypass로 경로를 비교합니다.",
   "reproduce": "다른 트랙에 같은 효과를 적용하고 같은 파라미터를 비교합니다.",
   "result": "30_Insert.cpr + 제품 확인 기록",
   "refs": [
    "insert",
    "manager"
   ],
   "video": "mix",
   "plugin": true
  },
  {
   "id": 31,
   "title": "Send와 FX",
   "goal": "사용 가능한 리버브로 FX 채널 하나를 만들고 두 트랙에서 보내기",
   "apply": "보유 외부 리버브로 재현하고 트랙별 전송량 차이 비교",
   "why": "여러 트랙에 하나의 공간감을 공유하며 양을 개별 조절합니다.",
   "concept": "Send는 트랙 소리 일부를 FX 채널로 보냅니다. 원래 소리와 효과 소리가 함께 출력됩니다.",
   "prep": "2개 이상의 소리 나는 트랙과 사용 가능한 리버브.",
   "steps": [
    "Project > Add Track > Effect에서 FX 채널을 만들고 실제 사용 가능한 리버브를 선택합니다.",
    "리버브의 실제 Mix/Dry-Wet 조절이 있다면 공용 효과 용도에 맞춰 wet 중심으로 설정합니다. 제품마다 이름과 동작은 확인합니다.",
    "Studio > MixConsole의 두 원본 트랙 Sends에서 그 FX 채널을 선택하고 Send를 활성화합니다.",
    "두 트랙의 Send 양을 다르게 조절합니다. 원본 페이더와 Send 양, FX 페이더를 각각 조금씩 바꿔 차이를 듣고 저장·재열기를 확인합니다."
   ],
   "criteria": [
    "공용 리버브 FX 채널을 만들었다.",
    "두 트랙에서 같은 FX로 Send를 보냈다.",
    "원본·Send·FX 볼륨의 차이를 확인했다."
   ],
   "confusion": [
    "Send 대상을 골라도 Send 활성화가 꺼져 있으면 전달되지 않습니다.",
    "Send 리버브와 원본 트랙 Insert 리버브는 신호 흐름이 다릅니다."
   ],
   "recovery": "잔향이 안 들리면 Send 활성화·양 → FX 효과 → FX 출력 순으로 확인합니다. 외부 제품 로드가 실패하면 사용 가능한 내장 리버브로 핵심 경로를 연습합니다.",
   "reproduce": "다른 두 트랙에 공용 리버브를 연결하고 양을 다르게 만듭니다.",
   "result": "31_Shared_Reverb.cpr + 효과 제품·재열기 기록",
   "refs": [
    "fx",
    "send",
    "manager"
   ],
   "video": "mix",
   "plugin": true
  },
  {
   "id": 32,
   "title": "Group",
   "goal": "두 트랙의 출력을 한 그룹으로 묶고 경로 설명",
   "apply": "그룹 볼륨과 개별 트랙 볼륨을 구분",
   "why": "여러 트랙의 크기와 처리를 한 번에 관리합니다.",
   "concept": "Group은 여러 출력 신호를 모으고, Folder는 화면에서 트랙을 정리합니다.",
   "prep": "소리 나는 트랙 2개 이상.",
   "steps": [
    "Project > Add Track > Group에서 Stereo 그룹을 만듭니다.",
    "두 원본 트랙의 Output Routing을 해당 그룹으로 지정하고 그룹 Output을 기존 최종 출력 버스로 연결합니다.",
    "그룹 페이더를 움직여 두 트랙이 함께 변하는지 확인합니다.",
    "원본 트랙 하나의 페이더를 움직여 내부 균형을 조절하고 그룹으로 전체 크기를 조절해 저장합니다."
   ],
   "criteria": [
    "두 트랙의 출력을 그룹으로 모았다.",
    "그룹에서 최종 출력까지 경로를 확인했다.",
    "내부 균형과 그룹 전체 볼륨을 구분했다."
   ],
   "confusion": [
    "Folder에 넣는 것만으로 오디오가 그룹으로 합쳐지지 않습니다.",
    "Output Routing과 Send는 다른 연결입니다."
   ],
   "recovery": "무음이면 원본 → Group → 최종 출력의 미터를 차례로 확인합니다. 잘못된 연결만 원래 출력 버스로 되돌립니다.",
   "reproduce": "다른 두 트랙의 그룹을 만들어 같은 경로를 재현합니다.",
   "result": "32_Group.cpr",
   "refs": [
    "group"
   ],
   "video": "mix"
  },
  {
   "id": 33,
   "title": "오토메이션",
   "goal": "볼륨 한 항목의 곡선을 만들고 Read/Write 동작 확인",
   "apply": "파라미터 하나를 더 자동화",
   "why": "시간에 따라 볼륨이 변하도록 만들어 음악의 흐름을 조절합니다.",
   "concept": "오토메이션은 파라미터 변화를 시간에 따라 저장합니다. Read는 읽기, Write는 조작 기록입니다.",
   "prep": "8마디 이상의 트랙.",
   "steps": [
    "트랙의 Show/Hide Automation을 열고 Volume 파라미터를 선택합니다.",
    "Draw 도구로 시작·중간·끝에 점을 만들고 중간이 낮아지는 곡선을 그립니다.",
    "트랙의 Read(R) 버튼을 켜고 재생해 페이더가 곡선을 따라 움직이는지 확인합니다.",
    "Write(W) 버튼을 사용하는 경우 짧은 구간만 기록하고 즉시 끕니다. Read를 켠 상태에서 다시 들어 원하는 결과를 저장합니다."
   ],
   "criteria": [
    "Volume 곡선과 점을 만들었다.",
    "Read 재생으로 실제 볼륨 변화를 확인했다.",
    "Write 상태를 확인하고 의도한 곡선을 저장했다."
   ],
   "confusion": [
    "여기의 R·W는 트랙 버튼 표기이며 새로 외울 기본 단축키가 아닙니다.",
    "Read가 켜진 구간에서 손으로 페이더를 움직이면 곡선으로 돌아갈 수 있습니다."
   ],
   "recovery": "변화가 없으면 표시한 파라미터와 Read 버튼을 확인합니다. 예상 밖 덮어쓰기는 Write를 끄고 Undo합니다.",
   "reproduce": "다른 트랙에 반대 형태의 볼륨 곡선을 만듭니다.",
   "result": "33_Automation.cpr",
   "refs": [
    "auto"
   ],
   "video": "mix"
  },
  {
   "id": 34,
   "title": "5주 통합",
   "goal": "4트랙·그룹·공용 리버브로 짧은 믹스",
   "apply": "필요한 화면과 미터를 빠르게 전환",
   "why": "트랙별 처리와 공용 효과·그룹·자동 변화를 하나의 믹스로 연결합니다.",
   "concept": "각 신호가 어디로 나가는지 설명할 수 있어야 믹싱 결과를 재현할 수 있습니다.",
   "prep": "4트랙 프로젝트.",
   "steps": [
    "4트랙의 Volume·Pan으로 기본 균형을 만듭니다.",
    "한 트랙에 Insert를 적용하고 두 트랙 이상을 공용 FX 리버브로 보냅니다.",
    "관련 트랙 2개를 Group으로 연결합니다. Group과 FX가 최종 출력으로 나가는지 확인합니다.",
    "한 트랙에 Volume 오토메이션을 만들고 전체를 들은 뒤 저장·재열기합니다."
   ],
   "criteria": [
    "4트랙에 Insert·Send·Group을 구성했다.",
    "볼륨 오토메이션이 실제로 재생되었다.",
    "원본부터 출력까지 경로를 설명하고 재열기를 확인했다."
   ],
   "confusion": [
    "효과가 많다는 것이 완료 기준은 아닙니다.",
    "그룹과 FX를 같은 역할로 연결하지 않습니다."
   ],
   "recovery": "원본 → Group/FX → 출력의 미터로 실패 지점을 좁히고 마지막에 추가한 처리부터 Bypass로 비교합니다.",
   "reproduce": "다른 구간에 같은 라우팅 구조를 적용해 균형을 다시 잡습니다.",
   "result": "34_Mix_Integrated.cpr",
   "refs": [
    "insert",
    "send",
    "group",
    "auto"
   ],
   "video": "mix"
  },
  {
   "id": 35,
   "title": "신호 흐름 복습",
   "goal": "트랙 → 그룹/FX → 출력 경로를 말로 설명하고 재현",
   "apply": "저장 후 다시 열어 결과 확인",
   "why": "신호 경로와 믹싱 동작을 자료 없이 구성해 봅니다.",
   "concept": "원본 신호와 보내는 신호의 차이를 실제 소리로 확인합니다.",
   "prep": "새 프로젝트에 2~4개 소리 소스.",
   "steps": [
    "자료 없이 MixConsole에서 Volume·Pan을 조절합니다.",
    "Insert 1개와 공용 리버브 FX 1개를 만들고 두 트랙의 Send를 연결합니다.",
    "Group에 두 트랙의 출력을 모으고 최종 출력으로 보냅니다.",
    "Volume 곡선을 만들어 Read로 재생합니다. 저장·재열기 후 막힌 단계만 메모합니다."
   ],
   "criteria": [
    "Insert·Send·Group을 구분해 연결했다.",
    "Volume 자동 변화를 재현했다.",
    "재열기와 남은 약점을 기록했다."
   ],
   "confusion": [
    "미터 움직임과 실제 청취 결과를 함께 확인합니다.",
    "자료를 보고 한 동작과 독립 실행을 구분합니다."
   ],
   "recovery": "막힌 경로 하나만 분리해 두 트랙으로 단순화한 뒤 다시 연결합니다.",
   "reproduce": "다른 소스로 같은 믹싱 구조를 재현합니다.",
   "result": "35_Mix_Review.cpr",
   "refs": [
    "insert",
    "send",
    "group",
    "auto"
   ],
   "video": "mix"
  },
  {
   "id": 36,
   "title": "파일 참조와 백업",
   "goal": "Pool의 프로젝트 오디오 위치와 외부 악기의 샘플 위치를 구분하고 백업 방법 학습",
   "apply": "백업 프로젝트 재열기, 샘플 이동이 필요하면 제조사별 재연결 절차 확인",
   "why": "다른 폴더에서 프로젝트를 열 때 파일이 사라지는 문제를 줄입니다.",
   "concept": "Pool은 프로젝트가 참조하는 오디오를 보여줍니다. 가상악기 샘플은 제조사의 별도 콘텐츠일 수 있습니다.",
   "prep": "오디오와 악기가 포함된 프로젝트, 백업할 새 폴더.",
   "steps": [
    "Media > Open Pool Window를 열고 View/Attributes에서 Path 정보를 표시해 사용 오디오의 실제 위치를 확인합니다.",
    "외부 악기를 쓰면 해당 제품의 콘텐츠 설정에서 실제 샘플 위치를 확인하고 프로젝트 Audio 폴더와 구분해 메모합니다.",
    "File > Back up Project에서 새 빈 폴더를 지정합니다. 필요한 오디오가 포함되는지 옵션을 확인하고 백업합니다.",
    "원래 프로젝트를 닫고 백업 폴더의 CPR을 열어 오디오와 악기를 재생합니다. 샘플 재연결이 필요하면 제품명을 확인한 뒤 제조사 공식 절차에 따라 별도 보충합니다."
   ],
   "criteria": [
    "Pool에서 실제 오디오 참조 경로를 확인했다.",
    "프로젝트 오디오와 악기 샘플 위치를 구분했다.",
    "백업 폴더의 CPR을 열어 소리를 확인했다."
   ],
   "confusion": [
    "Save As만으로 모든 오디오가 새 폴더에 복사되지는 않습니다.",
    "Back up Project가 외부 악기의 전체 샘플 라이브러리를 자동 복제한다고 가정하지 않습니다."
   ],
   "recovery": "Missing Files는 Pool에서 실제 경로부터 확인합니다. 샘플 오류는 해당 제품의 콘텐츠 연결 문제로 따로 다루며 폴더를 임의로 옮기지 않습니다.",
   "reproduce": "다른 짧은 프로젝트를 별도 폴더로 백업해 다시 엽니다.",
   "result": "36_Backup 폴더 + 오디오·샘플 위치 기록",
   "refs": [
    "pool",
    "backup",
    "locations"
   ],
   "plugin": true
  },
  {
   "id": 37,
   "title": "오디오 내보내기",
   "goal": "정확한 범위를 WAV로 내보내고 처음·끝 확인",
   "apply": "필요한 트랙을 따로 내보내기",
   "why": "Cubase가 없어도 들을 수 있는 WAV 결과물을 만듭니다.",
   "concept": "내보내기는 선택한 출력과 범위를 소리 파일로 만드는 작업입니다. CPR 저장과 다릅니다.",
   "prep": "짧은 완성 프로젝트와 출력 폴더.",
   "steps": [
    "내보낼 음악의 시작부터 필요한 잔향 끝까지 좌우 로케이터를 설정합니다.",
    "File > Export > Audio Mixdown에서 실제 최종 출력 채널, 파일명, 저장 경로를 선택합니다.",
    "File Type을 Wave로 선택하고 연습용으로 48 kHz·24 bit를 정합니다. 프로젝트와 다른 샘플레이트를 고른 경우 변환됨을 기록합니다.",
    "Export Audio를 실행한 뒤 결과 WAV를 열거나 새 빈 프로젝트로 가져와 처음·중간·끝을 듣습니다. 실제 파일 길이와 무음·잘림을 확인합니다."
   ],
   "criteria": [
    "올바른 출력과 로케이터 범위를 골랐다.",
    "WAV 파일을 내보냈다.",
    "결과 파일의 시작·끝과 실제 소리를 확인했다."
   ],
   "confusion": [
    "파일 선택 창에서 보이는 파일명만으로 출력 성공을 판단하지 않습니다.",
    "작업 영역 선택과 내보내기 로케이터 범위는 다를 수 있습니다."
   ],
   "recovery": "무음이면 Export의 채널 선택과 트랙 Mute/Solo를 확인합니다. 잘리면 오른쪽 로케이터를 잔향 이후로 옮겨 다시 내보냅니다.",
   "reproduce": "다른 구간을 다른 이름으로 내보내 시작·끝을 확인합니다.",
   "result": "37_Export.cpr + 37_Practice.wav",
   "refs": [
    "export",
    "transport"
   ],
   "video": "export"
  },
  {
   "id": 38,
   "title": "Render와 Freeze",
   "goal": "짧은 악기 파트로 각각의 용도와 원복 과정을 확인",
   "apply": "CPU 부하와 편집 가능 범위 비교",
   "why": "악기 처리 부하를 줄이거나 편집 가능한 오디오로 바꿉니다.",
   "concept": "Freeze는 악기를 임시 오디오 계산으로 가볍게 하고, Render는 선택한 연주를 오디오로 만듭니다.",
   "prep": "짧은 악기 파트와 원본을 보존한 프로젝트.",
   "steps": [
    "악기 트랙의 Freeze Channel을 실행해 옵션을 읽고 적용합니다. 어떤 편집이 제한되는지 확인합니다.",
    "Freeze를 해제하고 MIDI 편집이 다시 가능한지 확인합니다.",
    "MIDI 파트를 선택한 뒤 Edit > Render in Place > Render Settings에서 원본을 보존하는 설정으로 렌더링합니다.",
    "생성 오디오와 원본 악기를 번갈아 들어 비교합니다. 원본을 동시에 재생해 두 배로 들리지 않게 하고 저장합니다."
   ],
   "criteria": [
    "Freeze와 해제를 실제로 실행했다.",
    "원본을 보존한 Render 오디오를 만들었다.",
    "두 결과의 용도와 편집 가능 범위를 구분했다."
   ],
   "confusion": [
    "Freeze와 Render는 동일한 결과물 관리 방식이 아닙니다.",
    "오디오 변환 후 원본과 동시에 재생하면 비교가 정확하지 않습니다."
   ],
   "recovery": "소리가 중복되면 원본과 렌더 트랙의 Mute를 확인합니다. 편집이 안 되면 Freeze 상태를 확인하고 해제합니다.",
   "reproduce": "다른 짧은 악기 파트로 같은 과정을 비교합니다.",
   "result": "38_Render_Freeze.cpr + 렌더 오디오",
   "refs": [
    "freeze",
    "render"
   ]
  },
  {
   "id": 39,
   "title": "템플릿과 플러그인 관리",
   "goal": "악기·효과 설정을 저장하고 기본 트랙·라우팅을 템플릿으로 보관",
   "apply": "플러그인 Collection 구성, 제품 자체 프리셋·VST 프리셋·트랙 프리셋 비교",
   "why": "매번 같은 설정을 반복하지 않고 검증된 작업 환경으로 시작합니다.",
   "concept": "제품 프리셋은 제품 설정, 트랙 프리셋은 트랙 설정, 템플릿은 프로젝트 시작 구조, Collection은 플러그인 목록 정리입니다.",
   "prep": "사용 가능한 악기·효과가 포함된 프로젝트.",
   "steps": [
    "사용 중인 악기 또는 효과에서 제품 자체 프리셋 저장을 확인합니다. Cubase 플러그인 창의 VST 프리셋 저장과 범위를 비교합니다.",
    "트랙을 선택하고 트랙 목록의 우클릭 메뉴 Save Track Preset으로 트랙 설정을 저장합니다.",
    "Studio > VST Plug-in Manager에서 Collection을 만들어 현재 사용하는 제품만 정리합니다.",
    "별도 새 프로젝트에 필요한 트랙·Group·FX·출력 구조만 구성하고 File > Save as Template로 저장합니다. Hub에서 템플릿으로 새 프로젝트를 만든 뒤 미디어 누락·출력·플러그인을 확인합니다."
   ],
   "criteria": [
    "제품·VST·트랙 프리셋과 템플릿의 범위를 구분했다.",
    "Collection에서 사용할 제품을 정리했다.",
    "템플릿으로 만든 새 프로젝트의 소리와 재열기를 확인했다."
   ],
   "confusion": [
    "Collection은 설치 폴더 이동이나 삭제 기능이 아닙니다.",
    "템플릿이 원본 오디오나 샘플 라이브러리를 자동 포함한다고 가정하지 않습니다."
   ],
   "recovery": "새 프로젝트에서 미디어가 필요하면 이전 Pool 참조가 남았는지 확인합니다. 경로 오류가 있는 제품은 검증 후 템플릿에 포함합니다.",
   "reproduce": "새 폴더에서 템플릿 프로젝트를 다시 만들어 다른 소스를 가져옵니다.",
   "result": "39_Template_Test.cpr + 실제 템플릿·프리셋 이름",
   "refs": [
    "template",
    "manager",
    "pool"
   ],
   "plugin": true
  },
  {
   "id": 40,
   "title": "작업 동작 정리",
   "goal": "자주 쓰는 명령을 정리하고 실제 배정·충돌 확인",
   "apply": "반복 명령 2~3개를 묶는 작은 매크로 실습",
   "why": "검증된 동작을 손에 익혀 작업을 멈추는 횟수를 줄입니다.",
   "concept": "매크로는 여러 명령을 정한 순서로 실행합니다. 선택 대상과 창 상태가 결과를 바꿀 수 있습니다.",
   "prep": "연습 프로젝트 복사본과 실제 단축키 노트.",
   "steps": [
    "자주 쓰는 명령 5개를 고르고 Edit > Key Commands에서 현재 배정을 확인합니다.",
    "명령을 자료 없이 실행해 성공·미확인을 따로 기록합니다. 충돌이 있으면 현재 키를 우선 확인합니다.",
    "Key Commands의 Macros에서 New Macro를 만들고 명령 2개를 Add Command로 추가합니다. 예: Save 다음 Zoom Full. 실제 목록의 명령을 선택합니다.",
    "Run Macro로 복사 프로젝트에서 결과를 확인합니다. 원치 않는 동작이 없는 것을 확인한 뒤 프리셋을 저장합니다. 새 키 지정은 선택 사항이며 기본키로 기록하지 않습니다."
   ],
   "criteria": [
    "실제 배정과 독립 실행을 따로 기록했다.",
    "작은 매크로를 실행하고 결과를 확인했다.",
    "프리셋과 매크로 이름을 보관했다."
   ],
   "confusion": [
    "추천 사용자 지정키와 Cubase 기본키는 다릅니다.",
    "매크로는 활성 창·선택 상태까지 자동으로 올바르게 바꾸지 않습니다."
   ],
   "recovery": "원치 않는 동작이 나오면 매크로를 멈추고 명령을 하나씩 실행해 실패한 순서를 확인합니다.",
   "reproduce": "다른 프로젝트 복사본에서 같은 매크로를 실행합니다.",
   "result": "40_Workflow.cpr + 단축키 프리셋·매크로 기록",
   "refs": [
    "key",
    "filekeys",
    "zoomkeys"
   ]
  },
  {
   "id": 41,
   "title": "기초 통과 과제",
   "goal": "아래 기초 평가 과제 수행",
   "apply": "같은 과제를 다른 소스로 수행",
   "why": "기초 기능을 한 번의 실제 작업으로 독립 수행할 수 있는지 확인합니다.",
   "concept": "평가는 영상·수업을 보지 않고 결과로 확인합니다. 오늘 성공과 별개로 다음 회차에서 다른 소스로 다시 재현합니다.",
   "prep": "사용 가능한 악기 2개와 짧은 WAV 1개, 새 폴더. 설치·장치 문제가 있다면 평가 전에 별도 보충합니다.",
   "steps": [
    "복습 시간에 준비물과 여섯 평가 항목만 확인합니다. 평가를 시작하면 영상과 설명을 가리고 실제 시간을 잽니다.",
    "새 프로젝트에 악기 2트랙·오디오 1트랙으로 8마디를 만듭니다. MIDI 음높이·길이와 이벤트 이동·복제·분할을 실행합니다.",
    "로케이터·Cycle, 두 트랙의 공용 리버브, Volume 오토메이션을 구성합니다.",
    "WAV 내보내기 → 결과 듣기 → CPR 닫기·재열기·재생까지 30분 안에 마칩니다. 아래 여섯 항목과 실제 평가 시간을 기록합니다. 실패한 항목은 일부 완료로 남깁니다."
   ],
   "criteria": [
    "여섯 평가 결과를 실제로 확인했다.",
    "자료 없이 30분 이내에 수행했다.",
    "사용 소스·평가 시간·결과 파일을 기록했다."
   ],
   "confusion": [
    "전체 수업 시간과 평가에만 쓴 시간은 따로 기록합니다.",
    "한 번의 통과만으로 두 번 재현한 것으로 처리하지 않습니다."
   ],
   "recovery": "30분을 넘기거나 안내를 본 항목은 보충으로 기록하고 해당 동작만 연습합니다. 다시 평가한 실제 결과로 완료를 확인합니다.",
   "reproduce": "이번 회차의 평가 소스 이름을 남기고 다음 회차에는 다른 WAV·음악 구절을 사용합니다.",
   "result": "41_Foundation_Test.cpr + 41_Test.wav",
   "refs": [
    "new",
    "instrument",
    "editor",
    "send",
    "auto",
    "export"
   ]
  },
  {
   "id": 42,
   "title": "보완과 확정",
   "goal": "실패한 동작을 보완하고 기본 템플릿 확정",
   "apply": "다음 단계용 작은 프로젝트 준비",
   "why": "다른 소스에서도 기초 작업을 재현하고 사용할 기본 템플릿을 확정합니다.",
   "concept": "두 번째 평가를 별도 회차로 남겨 우연한 한 번의 성공과 반복 가능한 작업을 구분합니다.",
   "prep": "41회차와 다른 WAV·MIDI 구절, 새 프로젝트 폴더.",
   "steps": [
    "41회차 기록에서 막힌 동작만 짧게 복습합니다. 이번에 사용할 다른 소스 이름을 기록합니다.",
    "영상·설명을 가리고 새 프로젝트부터 여섯 평가 과제를 다시 수행합니다. 평가 시간은 새로 측정합니다.",
    "WAV를 실제로 듣고 CPR 재열기까지 30분 안에 확인합니다. 41회차와 독립된 평가 기록을 남깁니다.",
    "평가가 끝나면 검증된 트랙·출력·FX·Group 구성으로 기본 템플릿을 보완합니다. 새 프로젝트에서 다시 열어 경로를 확인합니다."
   ],
   "criteria": [
    "다른 소스로 여섯 평가 과제를 재현했다.",
    "이번 회차에서도 자료 없이 30분 이내에 수행했다.",
    "기본 템플릿을 검증하고 다음 보완 항목을 기록했다."
   ],
   "confusion": [
    "날짜가 12월 말이 되었다는 이유로 평가를 통과하지 않습니다.",
    "이전 평가 기록을 복사하는 것은 새 재현 기록이 아닙니다."
   ],
   "recovery": "실패하면 해당 항목만 보충한 뒤 이번 회차 평가를 다시 진행합니다. 두 평가가 모두 확인되기 전 응용 단계로 전환하지 않습니다.",
   "reproduce": "평가 이후에도 다른 짧은 소스로 프로젝트 생성부터 내보내기까지 반복합니다.",
   "result": "42_Foundation_Retest.cpr + 42_Test.wav + 확정 템플릿",
   "refs": [
    "template",
    "export",
    "send",
    "auto",
    "key"
   ]
  }
 ],
 "weeks": [
  "프로젝트와 화면",
  "이벤트 편집",
  "악기와 MIDI",
  "오디오 녹음·편집",
  "믹싱과 오토메이션",
  "파일 관리와 기초 평가"
 ],
 "plans": {
  "30": [
   5,
   5,
   15,
   3,
   2
  ],
  "60": [
   10,
   10,
   20,
   15,
   5
  ]
 },
 "evaluation": [
  "새 프로젝트를 만들고 저장",
  "악기 2트랙·오디오 1트랙에 8마디 구성",
  "MIDI 음높이·길이와 이벤트 이동·복제·분할 편집",
  "로케이터를 설정하고 반복 재생",
  "공용 리버브와 볼륨 오토메이션 구성",
  "WAV를 내보내 들어보고 CPR을 다시 열어 재생"
 ]
};})(typeof globalThis!=="undefined"?globalThis:this);
