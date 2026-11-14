/* 컨텍스트 보강 데이터.
   Claude 프로젝트 "Cubase Guide"에 올린 Steinberg 입문 튜토리얼 9종의 핵심을 회차별로 연결했습니다.
   원문을 옮긴 것이 아니라 요점만 한국어로 다시 정리한 것입니다. 표기: `메뉴 경로`, [[단축키]], **강조** */
(function (root) {
  var CG = root.CG = root.CG || {};

  CG.sources = {
    iface: { title: 'Setup your audio interface', ko: '오디오 인터페이스 설정' },
    play: { title: 'Let the Music Play', ko: '재생 · 로케이터 · Cycle' },
    rec: { title: 'Your First Audio Recording', ko: '첫 오디오 녹음' },
    vsti: { title: 'How to Use Virtual Instruments', ko: '가상악기 사용법' },
    fx: { title: 'How to Add Effect Plug-ins to Your Project', ko: '이펙트 플러그인 추가' },
    save: { title: 'Save and Export Your First Project', ko: '저장과 내보내기' },
    mix: { title: '5 Essential Tips to Get a Better Mix', ko: '더 나은 믹스를 위한 5가지' },
    terms: { title: '25 Terms Every Cubase Beginner Should Know', ko: '초보자 필수 용어' },
    dl: { title: 'Download Choices and Content Guide', ko: '다운로드 · 콘텐츠 가이드' }
  };

  CG.context = {
    1: [
      { src: 'iface', points: [
        '인터페이스를 연결하기 전에 제조사 사이트의 최신 드라이버를 먼저 설치합니다.',
        '`Studio > Studio Setup > Audio System`의 **ASIO Driver** 목록에서 사용할 인터페이스를 고르면 Cubase의 입출력이 그 장치로 전환됩니다.',
        '`Studio > Audio Connections` [[F4]]의 Outputs 탭에는 기본 **Stereo Out**이 만들어져 있습니다. Audio Device와 Device Port가 실제 장치를 가리키는지만 확인하면 됩니다.'
      ] },
      { src: 'save', points: [
        '첫 저장은 `File > Save As` [[Ctrl+Shift+S]]로 폴더와 이름을 정하고, 이후에는 [[Ctrl+S]]로 자주 저장합니다.',
        '단계별 버전을 남기려면 Save As로 이름만 바꿉니다. 예: `ProjectName_mix_final_v2`'
      ] }
    ],
    2: [
      { src: 'fx', points: [
        'Project 창 왼쪽 영역의 **Channel 탭**에는 선택한 트랙의 페이더와 Inserts가 모여 있습니다. 보이지 않으면 툴바 오른쪽 위의 영역(Zone) 버튼으로 켭니다.',
        '오른쪽 영역 상단의 **Media 탭**에서 악기·이펙트·샘플을 찾아 트랙으로 끌어올 수 있습니다.',
        'Channel 표시 전환은 튜토리얼에 macOS 기준 Command+Option+C로 안내되어 있습니다. Windows 배정은 `Edit > Key Commands`에서 직접 확인하세요.'
      ] },
      { src: 'terms', points: [
        '**MixConsole**은 트랙별 볼륨·팬·이펙트를 다루는 믹서 화면, **Transport**는 재생·정지·녹음·반복 버튼 묶음, **Timeline(눈금자)**은 박·마디·초로 시간을 보여 주는 상단 자입니다.',
        '낯선 단어는 「용어·자료」 메뉴의 용어집에서 바로 찾을 수 있습니다.'
      ] }
    ],
    3: [
      { src: 'terms', points: [
        '**Track**은 오디오나 MIDI를 담는 한 줄, **Event**는 트랙 위에 놓인 녹음·루프·MIDI 블록입니다.',
        '**Instrument Track**은 MIDI 입력과 가상악기를 한 트랙에 묶은 형태로, 멜로디와 비트를 만들 때 기본으로 씁니다.',
        '**Sample**은 스네어 한 타 같은 짧은 오디오 파일, **Loop**는 반복해 쓰는 짧은 구절입니다.'
      ] },
      { src: 'dl', points: [
        'Steinberg Download Assistant에서 반드시 받아야 하는 것은 첫 줄의 **Cubase 애플리케이션** 하나입니다. 나머지 악기·루프·도구는 라이선스에 포함된 선택 항목입니다.',
        'Pro·Artist·Elements·AI·LE는 같은 설치 파일을 쓰고, 라이선스에 따라 실행되는 에디션이 정해집니다.',
        '콘텐츠 중 일부는 본체 악기가 있어야 열립니다. 예: Iconica Sketch·Verve는 HALion Sonic 필요, Production Grooves는 Groove Agent 필요.'
      ] }
    ],
    4: [
      { src: 'play', points: [
        '[[Space]] 또는 Transport의 Play로 재생하고, 다시 [[Space]]나 Stop으로 멈춥니다.',
        'Project 창 위쪽 눈금자의 아무 곳이나 클릭하면 재생 위치(커서)가 그 지점으로 이동합니다.',
        '새 프로젝트의 기본 템포는 120 BPM입니다.'
      ] },
      { src: 'rec', points: [
        '메트로놈은 Transport의 버튼이나 [[C]]로 켜고 끕니다.',
        '템포(BPM)는 클릭의 빠르기를, 박자표는 클릭의 패턴을 정합니다. 4/4에서는 한 마디에 네 번, 3/4에서는 세 번 울립니다.'
      ] }
    ],
    5: [
      { src: 'play', points: [
        '먼 구간으로 갈 때는 확대·축소 후 눈금자를 클릭해 커서를 옮기는 방법이 가장 빠릅니다.'
      ] }
    ],
    12: [
      { src: 'play', points: [
        '좌·우 로케이터는 눈금자에 삼각형으로 표시됩니다.',
        '눈금자 **위쪽 절반**에 마우스를 두면 연필 모양으로 바뀌고, 그 상태로 드래그하면 새 구간이 만들어집니다.',
        '더 빠른 방법: 이벤트를 선택하고 [[P]]를 누르면 선택 범위의 시작과 끝에 로케이터가 맞춰집니다.',
        '로케이터는 각각 끌어 옮길 수 있고, 두 로케이터 사이 영역을 끌면 함께 이동합니다.',
        'Cycle은 Transport에서 Stop 왼쪽 버튼입니다. 로케이터 사이 영역을 클릭해도 켜지며, 켜지면 그 영역이 보라색으로 바뀝니다.'
      ] }
    ],
    13: [
      { src: 'play', points: [
        '마커는 `Project > Add Marker` 또는 [[Insert]]로 추가합니다. 구간 사이를 빠르게 건너뛸 때 씁니다.',
        'Transport Bar를 우클릭하면 표시할 컨트롤을 골라 자신의 작업 방식에 맞게 구성할 수 있습니다.'
      ] }
    ],
    15: [
      { src: 'vsti', points: [
        '트랙 목록 위의 **+** 또는 [[T]]로 Add Track 창을 열고, Instrument 탭에서 악기를 고른 뒤 이름을 적고 Add Track을 누릅니다.',
        '악기 창이 자동으로 열립니다. 닫은 뒤에는 Inspector의 Routing 구역에서 악기 이름 옆 아이콘을 눌러 다시 엽니다.',
        'HALion Sonic에서는 내장 브라우저에 "Piano"처럼 검색해 프리셋을 고를 수 있습니다.'
      ] },
      { src: 'dl', points: [
        '외부 악기가 인식되지 않을 때는 Cubase 기본 악기로 먼저 실습을 이어갈 수 있습니다: HALion Sonic(종합 음원), Groove Agent SE(드럼), Retrologue(가상 아날로그 신스), Padshop(그래뉼러 신스).',
        '오케스트라 음색이 필요하면 HALion Sonic용 Iconica Sketch가 스트링·브라스·목관·타악기를 제공합니다.'
      ] }
    ],
    16: [
      { src: 'vsti', points: [
        'MIDI 건반이 연결·인식되었는지 확인하고, 악기 트랙의 **Record Enable**(빨간 원)을 켭니다.',
        '커서를 시작 위치에 두고 Transport의 Record 또는 숫자 키패드 [[Num *]]로 녹음을 시작합니다. [[Space]]나 Stop으로 끝냅니다.',
        '녹음된 MIDI는 트랙 위에 이벤트(파트)로 나타납니다.'
      ] },
      { src: 'rec', points: [
        '카운트인은 `Transport > Metronome Setup`의 Count-In 구역에서 켜고, 마디 수(보통 1~2마디)를 정합니다.',
        'Transport Bar의 Count-In 버튼이 켜져 있어야 녹음 전에 예비 클릭이 울립니다.'
      ] }
    ],
    17: [
      { src: 'vsti', points: [
        'MIDI 이벤트를 더블클릭하면 Key Editor가 열립니다. 틀린 음을 옮기고 길이와 벨로시티를 고칩니다.'
      ] },
      { src: 'terms', points: [
        '**Key Editor(피아노 롤)**는 MIDI 노트를 그리고 옮기고 편집하는 격자 화면입니다.'
      ] }
    ],
    18: [
      { src: 'terms', points: [
        '**Quantize**는 MIDI나 오디오를 그리드에 맞춰 타이밍을 정돈하는 기능입니다.'
      ] },
      { src: 'vsti', points: [
        '연주의 박자가 흔들릴 때 퀀타이즈로 시작 위치를 정돈하면 더 단단하게 들립니다. 적용 전후를 반드시 들어 비교합니다.'
      ] }
    ],
    19: [
      { src: 'vsti', points: [
        '벨로시티를 손보면 같은 음이라도 연주의 표정이 달라집니다. MIDI 컨트롤러를 함께 쓰면 표현과 다이내믹을 더할 수 있습니다.'
      ] }
    ],
    20: [
      { src: 'vsti', points: [
        '여러 악기를 겹치면 음색이 풍성해집니다. 예: 피아노 + 스트링.',
        '악기 파라미터를 오토메이션하면 곡이 진행되는 동안 소리가 변하게 만들 수 있습니다.',
        '프리셋을 충분히 둘러보는 것만으로도 스케치의 방향이 잡힙니다.'
      ] }
    ],
    22: [
      { src: 'iface', points: [
        '**버퍼 사이즈**는 컴퓨터가 한 번에 처리하는 데이터 양입니다. 작을수록 지연이 줄지만 CPU 부담이 커져 끊김이 생길 수 있고, 클수록 지연은 늘지만 안정적입니다.',
        '녹음에는 작은 값(예: 128 samples), 믹싱·재생에는 큰 값(예: 1024 samples)을 씁니다.',
        '`Studio > Studio Setup`에서 Audio System 아래의 장치를 고르고 **Control Panel**을 누르면 버퍼 설정이 열립니다.',
        '`Studio > Audio Connections` [[F4]]의 Inputs 탭에 기본 Stereo In이 있습니다. 입력이 더 있으면 **Add Bus**로 모노/스테레오 버스를 만들고 알아보기 쉬운 이름을 붙입니다.'
      ] },
      { src: 'rec', points: [
        '[[T]] 또는 **+** → Audio에서 입력(예: Mono In 1)과 구성을 고릅니다. 보컬·인터페이스 직결 기타는 모노, 드럼·앙상블은 스테레오가 일반적입니다.',
        '입력 레벨은 MixConsole [[F3]] 왼쪽의 입력 채널 미터로 봅니다. 너무 크거나 작으면 **인터페이스의 게인 노브**로 조절합니다.',
        '트랙의 Monitor(스피커 모양) 버튼을 켜면 주황색으로 바뀌고 입력 소리가 들립니다. 재생해서 확인할 때는 다시 끕니다.',
        '인터페이스가 지원하면 `Studio > Studio Setup`의 장치 페이지에서 **Direct Monitoring**을 켜 지연을 줄입니다.',
        '마이크 녹음 때는 헤드폰을 써서 스피커 소리가 마이크로 되돌아가는 피드백을 막습니다. 보컬은 팝 필터를 씁니다.'
      ] }
    ],
    29: [
      { src: 'mix', points: [
        '**페이더가 먼저입니다.** MixConsole [[F3]]에서 모든 페이더를 내린 뒤 킥과 베이스부터 맞추고, 나머지 트랙을 하나씩 올리며 균형을 잡습니다. 플러그인 없이도 생각보다 멀리 갑니다.',
        '**팬으로 자리 만들기:** 가운데 = 킥·베이스·리드 보컬 / 약간 좌우 = 스네어·클랩·건반 / 넓게 좌우 = 기타·하이햇·코러스.',
        '팬 노브는 각 채널 페이더 위에 있습니다.'
      ] }
    ],
    30: [
      { src: 'fx', points: [
        'Channel 탭의 Inserts에서 빈 슬롯을 클릭하면 플러그인 목록이 열립니다. 오른쪽 위 검색란에 "reverb"처럼 입력해 찾습니다.',
        '신호는 Insert 슬롯을 **위에서 아래로** 통과합니다. 슬롯을 끌어 순서를 바꿀 수 있고, 슬롯 밖으로 끌어내면 제거됩니다.',
        '슬롯 왼쪽의 Bypass를 누르면 효과를 잠시 우회합니다. 재생 중에 눌러 전후를 비교합니다.',
        'Media 탭의 VST Effects에서 플러그인을 트랙으로 끌어다 놓으면 첫 번째 빈 Insert 슬롯에 들어갑니다.',
        'Steinberg 플러그인의 프리셋은 플러그인 창 상단 빈칸을 눌러 고릅니다.'
      ] },
      { src: 'mix', points: [
        '채널 EQ의 PRE 구역에서 **High-pass 필터**를 켜고, 베이스 계열이 아닌 악기는 80~120 Hz 부근에서 저역을 정리합니다.',
        '저역 위주의 소리에는 **Low-pass 필터**로 5~10 kHz 위를 덜어내 밝은 악기와 겹치지 않게 합니다.'
      ] }
    ],
    31: [
      { src: 'mix', points: [
        '리버브는 트랙에 직접 걸기보다 `Project > Add Track > Effect`로 FX 채널을 만들고 Send로 보내는 방식을 권합니다.',
        'RoomWorks를 넣고 "Plate Vintage" 같은 프리셋을 고른 뒤 **Wet Only**를 켭니다. Send용이므로 100% 젖은 신호만 남깁니다.',
        '각 트랙의 Sends에서 그 FX 채널로 보내고, Send 레벨로 양을 은은하게 조절합니다.',
        '여러 트랙이 같은 리버브를 공유하면 한 공간에서 연주한 것처럼 묶이는 효과가 납니다.'
      ] },
      { src: 'fx', points: [
        '비교 실습: 같은 RoomWorks를 **Insert**로 넣으면 기본값은 리버브가 아주 많이 들립니다. 이때는 Mix를 5% 정도로 낮추고 Reverb Time을 조절합니다. Insert와 Send의 차이를 귀로 확인해 보세요.'
      ] }
    ],
    33: [
      { src: 'terms', points: [
        '**Automation**은 볼륨이나 이펙트 값을 시간에 따라 자동으로 바꾸는 기능입니다. 페이드인, 필터 스윕, 특정 순간의 뮤트 등에 씁니다.'
      ] }
    ],
    34: [
      { src: 'mix', points: [
        '순서를 지키면 흔들리지 않습니다: ① 볼륨 균형 → ② 팬 → ③ EQ로 정리 → ④ 리버브로 공간 → ⑤ 단순하게 유지.',
        '과한 EQ는 소리를 얇게, 과한 컴프레서는 연주를 납작하게, 겹친 리버브는 전체를 흐리게 만듭니다. 이미 좋게 들리면 손대지 않는 것도 선택입니다.'
      ] }
    ],
    35: [
      { src: 'terms', points: [
        '**Insert**는 한 트랙에 직접 거는 효과, **Send**는 FX 채널을 통해 여러 트랙이 함께 쓰는 효과입니다. Send는 CPU를 아끼고 믹스의 일관성을 높입니다.',
        '**Latency Compensation**: 플러그인이 지연을 만들어도 Cubase가 트랙들을 자동으로 맞춰 줍니다.'
      ] }
    ],
    36: [
      { src: 'save', points: [
        'Save As로 버전을 나눠 두면 작업 단계별로 되돌아갈 수 있습니다. 단, 이것은 CPR 이름만 새로 만드는 것이며 오디오까지 복사하는 백업과는 다릅니다.'
      ] }
    ],
    37: [
      { src: 'save', points: [
        '내보낼 범위는 좌·우 로케이터로 정합니다. 눈금자에서 로케이터를 끌어 맞춥니다.',
        '`File > Export > Audio Mixdown`을 열고 채널은 Stereo Out, 형식은 WAV(무압축·고음질) 또는 MP3(압축·공유용)를 고릅니다.',
        '기본 저장 위치는 프로젝트 폴더 안의 **Mixdown** 폴더입니다.',
        '샘플레이트는 보통 44.1 kHz, 비트는 CD 기준 16-bit 또는 더 높은 품질의 24-bit입니다. MP3는 192~320 kbps에서 용량과 음질을 저울질합니다.',
        '오른쪽 로케이터는 리버브 꼬리가 잘리지 않도록 여유를 두고, 내보낸 파일은 공유 전에 반드시 직접 들어 봅니다.'
      ] }
    ]
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);
