/* 심화 트랙 3종: 미디 오케스트레이션 / 방송·실시간 송출 / 녹음 세팅.
   표기: `메뉴 경로`, [[단축키]], **강조**. 단축키는 Windows 기준으로 적고 화면에서 macOS로 전환됩니다.
   메뉴 이름은 Cubase Pro 영문 UI 기준입니다. 버전에 따라 위치가 다르면 실습 메모에 남기세요. */
(function (root) {
  var CG = root.CG = root.CG || {};

  CG.tracks = [
    /* ───────────────────────── Track 1 ───────────────────────── */
    {
      id: 'orchestra', no: 1, color: '#D9A441', icon: 'music',
      title: '미디 오케스트레이션', en: 'MIDI Orchestration',
      intro: '수십~수백 트랙의 오케스트라 템플릿을 끊김 없이 돌리고, 아티큘레이션과 CC로 표정을 만들고, 리버브로 무대의 깊이를 배치합니다.',
      prereq: [15, 17, 19, 31, 32, 38, 39],
      steps: [
        {
          id: 'o1', title: 'RAM · 퍼포먼스 최적화와 Disable Track',
          goal: '대용량 가상악기(Kontakt, Opus 등)를 올린 템플릿이 메모리와 CPU 한계 안에서 열리고 재생되게 만듭니다.',
          time: '45분', related: [22, 38],
          blocks: [
            { h: '오디오 엔진 설정', items: [
              '`Studio > Studio Setup > Audio System`을 엽니다.',
              '**Activate Multi Processing** 켬, **Activate ASIO-Guard** 켬, **ASIO-Guard Level**은 Normal에서 시작해 재생 중 끊기면 High로 올립니다.',
              'Windows는 **Activate Steinberg Audio Power Scheme**을 켜 CPU 절전으로 인한 피크를 막습니다.',
              '버퍼는 장치 페이지의 **Control Panel**에서 정합니다. 건반으로 입력할 때 256 samples, 편곡·재생 위주일 때 512~1024 samples.',
              '`Studio > Audio Performance` [[F12]]를 띄워 두고 Average / Real-Time / Peak 막대를 보며 조정합니다.'
            ] },
            { h: 'Disable Track으로 RAM 비우기', items: [
              '트랙 목록에서 Instrument 트랙을 우클릭 → **Disable Track**. 악기와 샘플이 메모리에서 내려가고, 트랙·MIDI·설정은 그대로 남습니다.',
              '다시 쓸 때는 우클릭 → **Enable Track**. 이때 샘플을 다시 읽으므로 몇 초가 걸립니다.',
              '여러 트랙을 선택한 뒤 실행하면 한 번에 처리됩니다. 템플릿은 **전부 Disable 상태로 저장**하고 쓸 악기만 켜는 방식이 가장 가볍습니다.',
              '기본 단축키가 없으므로 `Edit > Key Commands`에서 "Disable"을 검색해 직접 배정합니다(예: [[Ctrl+Alt+D]], 충돌 여부 확인).',
              'Rack 악기 + MIDI 트랙 구성에서는 MIDI 트랙을 꺼도 랙의 악기는 메모리에 남습니다. 메모리 절약이 목적이면 Instrument 트랙 구성을 쓰세요.'
            ] },
            { h: '샘플러 쪽 메모리 줄이기', items: [
              'Kontakt: 악기별 Purge 메뉴에서 **Purge All Samples** 후 연주한 음만 로드되게 하거나, Options > Memory에서 프리로드 버퍼를 낮춥니다(SSD 기준 6~18 kB 범위에서 시험).',
              'Opus 등 다른 플레이어도 사용하지 않는 마이크 포지션·아티큘레이션을 내리면 RAM이 크게 줄어듭니다.',
              '작업이 끝난 파트는 Inspector의 **Freeze**로 고정해 CPU를 돌려받습니다(기초 38회차).'
            ] }
          ],
          values: [
            ['입력용 버퍼', '256 samples'], ['편곡·재생용 버퍼', '512 ~ 1024 samples'], ['ASIO-Guard Level', 'Normal → 끊기면 High'], ['Kontakt 프리로드(SSD)', '6 ~ 18 kB에서 시험'], ['Audio Performance', 'Peak 막대가 끝에 닿지 않게']
          ],
          keys: [ { name: 'Audio Performance', key: 'F12' }, { name: 'Studio Setup', key: '기본 배정 없음', note: 'Studio 메뉴에서 열기' }, { name: 'Disable / Enable Track', key: '직접 배정' } ],
          checks: [
            'Audio System에서 Multi Processing·ASIO-Guard 상태와 현재 버퍼 값을 확인해 메모했다.',
            'Instrument 트랙 하나를 Disable → Enable 하며 작업 관리자(활성 상태 보기)에서 메모리 변화를 확인했다.',
            'Disable/Enable Track에 단축키를 배정하고 충돌이 없는지 확인했다.',
            'Audio Performance를 띄운 채 재생해 Peak가 넘치지 않는 버퍼 값을 찾았다.'
          ]
        },
        {
          id: 'o2', title: 'Folder Track 색상 코딩과 템플릿 구축',
          goal: 'Woodwinds · Brass · Percussion · Strings 네 섹션을 폴더와 색으로 구분하고, 다시 불러 쓸 수 있는 템플릿으로 저장합니다.',
          time: '60분', related: [3, 32, 39],
          blocks: [
            { h: '폴더와 색', items: [
              '`Project > Add Track > Folder`로 섹션 폴더 네 개를 만듭니다. 순서는 악보 순서(WW → BR → PERC → STR)를 권합니다.',
              '악기 트랙을 선택하고 우클릭 → **Move Selected Tracks to New Folder**로 한 번에 묶을 수도 있습니다.',
              '트랙을 선택한 뒤 툴바의 색상 도구(Select Colors)로 섹션 색을 입힙니다. 폴더와 하위 트랙을 같은 계열로 맞춥니다.',
              '색 팔레트를 고정하려면 `Project > Project Colors Setup`에서 섹션용 색 네 가지를 앞쪽에 배치합니다.',
              '폴더는 `Project > Track Folding`의 명령으로 접고 펼칩니다. 자주 쓰면 단축키를 배정합니다.'
            ] },
            { h: '이름 규칙과 라우팅', items: [
              '이름은 짧고 정렬되게: `STR Vn1`, `STR Vn2`, `STR Va`, `STR Vc`, `STR Cb` / `BR Hn`, `BR Tpt`, `BR Tbn`, `BR Tba`.',
              '섹션마다 Group 채널을 만들어 출력으로 지정합니다: `WW BUS`, `BR BUS`, `PERC BUS`, `STR BUS` → Stereo Out (기초 32회차).',
              '트랙 수가 많아지면 Inspector 영역의 **Visibility** 탭에서 지금 쓰는 섹션만 보이게 합니다.'
            ] },
            { h: '템플릿으로 저장', items: [
              '모든 악기 트랙을 Disable로 둔 채 `File > Save as Template`으로 저장합니다. 이후 Hub의 템플릿 목록에서 바로 엽니다.',
              '일부 섹션만 다른 프로젝트로 옮길 때는 `File > Export > Selected Tracks`로 내보내고 `File > Import > Tracks from Project`로 가져옵니다.',
              '템플릿은 한 번에 완성하지 않습니다. 곡을 쓸 때마다 쓴 악기를 추가하며 키웁니다.'
            ] }
          ],
          values: [
            ['Woodwinds', '초록 계열'], ['Brass', '주황·금색 계열'], ['Percussion', '보라·회색 계열'], ['Strings', '파랑 계열'], ['섹션 버스', 'WW / BR / PERC / STR BUS → Stereo Out']
          ],
          keys: [ { name: 'Add Track', key: 'T' }, { name: 'MixConsole', key: 'F3' }, { name: 'Track Folding', key: '직접 배정' } ],
          checks: [
            '네 섹션 폴더를 만들고 악기 트랙을 넣었다.',
            '섹션별 색을 정해 폴더와 하위 트랙에 적용했다.',
            '섹션별 Group 채널을 만들어 출력 경로를 연결했다.',
            'Save as Template으로 저장하고 Hub에서 다시 열어 확인했다.'
          ]
        },
        {
          id: 'o3', title: 'Expression Map과 CC1 · CC11 오토메이션',
          goal: '한 트랙 안에서 아티큘레이션을 전환하고, CC1(Modulation)과 CC11(Expression)으로 프레이즈의 강약을 그립니다.',
          time: '75분', related: [17, 19, 33],
          blocks: [
            { h: 'Expression Map 연결', items: [
              'Instrument 트랙의 Inspector에서 **Expression Map** 구역을 엽니다. 보이지 않으면 Inspector 설정에서 구역을 표시합니다.',
              '구역을 클릭 → **Expression Map Setup**을 열고, 라이브러리가 제공하는 맵을 불러오거나 새 맵을 만듭니다.',
              '**Sound Slot**마다 아티큘레이션 하나를 지정하고, Output Mapping에 그 악기의 키스위치 노트(또는 Program Change/CC)를 적습니다.',
              '아티큘레이션 유형을 구분합니다. **Direction**은 바꿀 때까지 유지(Sustain, Pizzicato, Tremolo), **Attribute**는 해당 음에만 적용(Staccato, Accent).',
              'Key Editor [[Ctrl+E]] 아래쪽 컨트롤러 레인에서 **Articulations**를 선택하면 슬롯 이름이 줄로 나타나고, 원하는 위치에 그려 넣어 전환합니다.',
              'Cubase 15에서 Expression Map 화면 구성이 이전 버전과 다를 수 있습니다. 위치가 다르면 공식 매뉴얼을 기준으로 확인하고 메모하세요.'
            ] },
            { h: 'CC1과 CC11의 역할', items: [
              '**CC1 (Modulation)**: 대부분의 오케스트라 라이브러리에서 다이내믹 레이어(pp↔ff)를 넘나듭니다. 음색 자체가 바뀝니다.',
              '**CC11 (Expression)**: 음색은 두고 음량만 조절합니다. 프레이즈 끝을 줄이거나 섹션 간 균형을 다듬을 때 씁니다.',
              '**CC7 (Volume)**은 트랙의 전체 레벨로 한 번만 정하고 곡 중에는 건드리지 않습니다.',
              '라이브러리마다 배정이 다를 수 있으니 악기 화면의 Dynamics/Expression 배정을 먼저 확인합니다.'
            ] },
            { h: '그리고 다듬기', items: [
              'Key Editor 컨트롤러 레인의 이름을 클릭해 **CC 1 (Modulation)**을 고르고, 레인 왼쪽 아래 **+** 로 레인을 하나 더 만들어 **CC 11 (Expression)**을 띄웁니다.',
              'Line 도구의 **Parabola** 모드로 크레셴도·디미누엔도를 곡선으로 그립니다. 직선보다 자연스럽습니다.',
              '롱 노트는 고정값으로 두지 않습니다. 시작 40~60 → 정점 90~110 → 끝 30~50처럼 숨 쉬듯 움직이게 합니다.',
              '모듈레이션 휠이나 페이더로 실시간 녹음한 뒤, 과하게 촘촘한 데이터는 `MIDI > Functions > Thin Out Data`로 정리합니다.',
              'CC를 파트 안에 둘지 트랙 오토메이션으로 둘지는 `MIDI > CC Automation Setup`에서 정합니다. 파트와 함께 복사·이동하려면 파트 안에 두는 편이 편합니다.',
              '어택이 느린 레가토 음색은 Inspector의 **Track Delay**에 음수 값(대략 −60 ~ −120 ms, 라이브러리별 확인)을 넣어 박자에 맞춥니다.'
            ] }
          ],
          values: [
            ['CC1 롱 노트 곡선', '시작 40~60 → 정점 90~110 → 끝 30~50'], ['CC11 프레이즈 끝', '서서히 내리되 0까지 떨어뜨리지 않기'], ['CC7', '트랙당 한 번만 설정'], ['Track Delay(레가토)', '−60 ~ −120 ms에서 귀로 맞춤'], ['곡선 도구', 'Line 도구 > Parabola']
          ],
          keys: [ { name: 'Open/Close Editor', key: 'Ctrl + E' }, { name: 'Undo', key: 'Ctrl + Z' }, { name: 'On-Screen Keyboard', key: 'Alt + K' } ],
          checks: [
            '악기 한 개에 Expression Map을 연결하고 슬롯 3개 이상(예: Sustain, Staccato, Pizzicato)이 전환되는 것을 소리로 확인했다.',
            'Direction과 Attribute를 각각 하나 이상 써 봤다.',
            '4마디 롱 노트 프레이즈에 CC1 곡선을 그리고, 고정값일 때와 비교해 들었다.',
            'CC11로 프레이즈 끝을 줄이고 CC1과의 차이를 메모했다.',
            '레가토 음색에 Track Delay를 넣어 박자가 맞는 값을 찾았다.'
          ]
        },
        {
          id: 'o4', title: '리버브 센드로 무대 깊이 만들기 (ER / Tail 분리)',
          goal: 'Early Reflection과 Tail을 서로 다른 FX 채널로 나누어 섹션별 앞뒤 거리를 조절합니다.',
          time: '60분', related: [31, 32, 35],
          blocks: [
            { h: 'FX 채널 두 개', items: [
              '`Project > Add Track > Effect`로 FX 채널을 두 개 만듭니다: `FX ER – Stage`, `FX Tail – Hall`.',
              'ER 채널에는 REVerence의 작은 스테이지·룸 계열 프리셋(또는 RoomWorks의 짧은 룸)을 넣습니다. 길이 0.4~0.8초.',
              'Tail 채널에는 REVerence의 홀 계열 프리셋을 넣습니다. 길이 2.0~2.8초, Pre-Delay 20~40 ms.',
              '두 리버브 모두 **100% Wet**(Mix 100% 또는 Wet Only)로 둡니다. Send용이기 때문입니다.',
              '리버브 뒤에 EQ를 걸어 150~250 Hz 아래와 8~10 kHz 위를 덜어내면 저역이 뭉치지 않고 치찰음이 번지지 않습니다.'
            ] },
            { h: '섹션별 보내기', items: [
              '개별 트랙이 아니라 **섹션 Group 채널**(STR/WW/BR/PERC BUS)의 Sends에서 두 FX로 보냅니다. 조절할 손잡이가 여덟 개로 줄어듭니다.',
              '거리는 **ER 양**으로 만듭니다. 뒤에 앉는 섹션일수록 ER을 더 보냅니다: Strings < Woodwinds < Brass < Percussion.',
              'Tail은 모든 섹션에 비슷하게 보내 한 홀에 있다는 느낌을 묶어 줍니다.',
              'Send는 기본인 Post-Fader로 둡니다. 섹션 볼륨을 내리면 리버브도 함께 줄어 균형이 유지됩니다.'
            ] },
            { h: '라이브러리 성격 고려', items: [
              '홀에서 녹음된 "젖은" 라이브러리는 이미 ER이 들어 있으므로 ER 센드를 줄이거나 끄고 Tail만 조금 더합니다.',
              '"마른" 라이브러리는 ER을 넉넉히 주어야 섹션이 무대 위에 놓입니다.',
              '판단은 항상 리버브 채널을 Mute했다 풀며 전후 비교로 합니다.'
            ] }
          ],
          values: [
            ['ER 길이', '0.4 ~ 0.8 s'], ['Tail 길이', '2.0 ~ 2.8 s'], ['Tail Pre-Delay', '20 ~ 40 ms'], ['리버브 리턴 Low Cut', '150 ~ 250 Hz'], ['리버브 리턴 High Cut', '8 ~ 10 kHz'], ['ER 센드 순서', 'STR < WW < BR < PERC']
          ],
          keys: [ { name: 'MixConsole', key: 'F3' }, { name: 'Add Track', key: 'T' } ],
          checks: [
            'ER용과 Tail용 FX 채널을 만들고 둘 다 100% Wet으로 설정했다.',
            '섹션 Group 채널에서 두 FX로 Send를 연결했다.',
            'ER 양만 바꿔 한 섹션이 앞뒤로 움직이는 것을 들었다.',
            '리버브 리턴에 Low/High Cut을 걸고 전후를 비교했다.',
            '완성한 FX 구성을 템플릿에 다시 저장했다.'
          ]
        }
      ],
      flow: [
        { title: '오케스트라 템플릿 신호 흐름', nodes: [
          { t: 'Instrument 트랙', s: 'Expression Map · CC1/CC11', kind: 'src' },
          { t: '섹션 Group', s: 'WW / BR / PERC / STR BUS', kind: 'bus' },
          { t: 'Stereo Out', s: 'Main Mix', kind: 'daw' },
          { t: '스피커 · 헤드폰', s: '', kind: 'out' }
        ] },
        { title: 'Send 경로 (섹션 Group에서 분기)', nodes: [
          { t: '섹션 Group', s: 'Post-Fader Send', kind: 'bus' },
          { t: 'FX ER – Stage', s: '0.4~0.8 s · 거리', kind: 'fx' },
          { t: 'FX Tail – Hall', s: '2.0~2.8 s · 공간', kind: 'fx' },
          { t: 'Stereo Out', s: '', kind: 'daw' }
        ] }
      ],
      faq: [
        { q: '템플릿을 열 때 CPU 피크(ASIO Overload)가 뜨고 소리가 끊깁니다.', a: [
          '모든 악기가 한꺼번에 샘플을 읽는 순간에 생깁니다. 템플릿을 **전부 Disable 상태로 저장**하고 필요한 트랙만 Enable 하세요.',
          '`Studio > Studio Setup > Audio System`에서 버퍼를 512~1024 samples로 올리고 ASIO-Guard Level을 High로 바꿉니다.',
          'Windows는 Steinberg Audio Power Scheme을 켜고, 노트북은 전원을 연결합니다.',
          '[[F12]] Audio Performance에서 Real-Time 막대만 치솟으면 Record Enable·Monitor가 켜진 트랙을 줄입니다. 그런 트랙은 ASIO-Guard의 도움을 받지 못합니다.',
          '샘플러 자체의 멀티코어 옵션은 Cubase의 Multi Processing과 충돌할 수 있습니다. 플러그인으로 쓸 때는 끄고 비교해 보세요.'
        ] },
        { q: 'RAM이 가득 차서 프로젝트가 느려지거나 멈춥니다.', a: [
          '쓰지 않는 Instrument 트랙을 Disable 합니다. 뮤트는 메모리를 비우지 않습니다.',
          'Kontakt는 Purge 후 연주한 음만 다시 로드하고, 프리로드 버퍼를 낮춥니다.',
          '사용하지 않는 마이크 포지션과 아티큘레이션을 내립니다.',
          '끝난 파트는 Freeze 또는 Render in Place로 오디오로 바꿉니다(기초 38회차).'
        ] },
        { q: '키스위치가 한 옥타브 어긋나거나 아티큘레이션이 바뀌지 않습니다.', a: [
          '가운데 도를 C3로 부르는 제품과 C4로 부르는 제품이 섞여 있습니다. Expression Map의 Output Mapping 노트를 한 옥타브 올리거나 내려 시험합니다.',
          '맵이 그 트랙에 실제로 지정되어 있는지 Inspector에서 확인합니다.',
          '악기 쪽 키스위치가 꺼져 있거나 다른 MIDI 채널을 듣고 있지 않은지 확인합니다.'
        ] },
        { q: 'CC를 그렸는데 재생 위치를 옮기면 음량이 튀거나 이전 값이 남습니다.', a: [
          '각 파트의 맨 앞에 CC1·CC11의 시작값을 항상 찍어 둡니다.',
          '같은 CC가 파트 안과 트랙 오토메이션 양쪽에 있으면 서로 싸웁니다. `MIDI > CC Automation Setup`에서 한쪽으로 통일합니다.',
          '`Preferences > MIDI`의 Chase Events 설정에서 컨트롤러 추적이 켜져 있는지 확인합니다.'
        ] },
        { q: '레가토 스트링이 박자보다 늦게 들립니다.', a: [
          '샘플의 어택이 느려서 생기는 현상입니다. 퀀타이즈를 다시 하지 말고 Inspector의 Track Delay에 음수 값을 넣습니다.',
          '숏 아티큘레이션은 값이 훨씬 작으므로, 롱/숏을 다른 트랙으로 나누거나 타협값을 찾습니다.'
        ] }
      ]
    },

    /* ───────────────────────── Track 2 ───────────────────────── */
    {
      id: 'stream', no: 2, color: '#29B6C8', icon: 'radio',
      title: '방송 · 실시간 송출 세팅', en: 'Streaming & Broadcast',
      intro: 'Cubase에서 다듬은 마이크와 음악을 OBS로 보내되, 내가 듣는 소리와 시청자가 듣는 소리를 분리하고 지연과 하울링 없이 운영합니다.',
      prereq: [1, 22, 30, 31, 35],
      usesLoopback: true,
      steps: [
        {
          id: 's1', title: 'Loopback vs 소프트웨어 라우팅 구조 이해',
          goal: '내 장비에서 Cubase의 출력이 어떤 길로 OBS에 도착하는지 그림으로 설명할 수 있게 됩니다.',
          time: '40분', related: [1, 22], routing: true,
          blocks: [
            { h: '왜 따로 길이 필요한가', items: [
              'Cubase는 ASIO 드라이버로 인터페이스와 직접 통신합니다. OBS는 기본적으로 Windows의 일반 오디오 장치(WDM)를 캡처합니다.',
              '그래서 Cubase의 출력을 **OBS가 캡처할 수 있는 입력 장치**로 되돌려 주는 길이 하나 필요합니다. 그 길이 하드웨어 Loopback이거나 가상 오디오 장치입니다.',
              '방송 표준에 맞춰 `Project > Project Setup`의 Sample Rate를 **48 kHz**로 두고, 인터페이스·Windows 장치·OBS(설정 > 오디오)도 모두 48 kHz로 통일합니다. 어긋나면 잡음과 음정 변화가 생깁니다.'
            ] },
            { h: '공통 준비', items: [
              '`Studio > Studio Setup > Audio System`에서 **Release Driver when Application is in Background**를 끕니다. 켜져 있으면 OBS를 클릭하는 순간 Cubase 소리가 끊깁니다.',
              'OBS의 설정 > 오디오에서 쓰지 않는 전역 장치(데스크톱 오디오, 마이크/보조)는 "사용 안 함"으로 두고, 필요한 소스만 직접 추가합니다. 이중 캡처를 막는 가장 확실한 방법입니다.',
              '마이크는 OBS에 직접 넣지 않습니다. Cubase를 거친 신호 한 줄만 OBS로 갑니다.'
            ] }
          ],
          values: [
            ['프로젝트·장치·OBS 샘플레이트', '48 kHz 통일'], ['Release Driver in Background', '끔'], ['OBS로 가는 신호', 'Cubase 방송 버스 한 줄'], ['OBS 전역 오디오 장치', '사용 안 함 → 소스로 직접 추가']
          ],
          keys: [ { name: 'Audio Connections', key: 'F4' }, { name: 'MixConsole', key: 'F3' } ],
          checks: [
            '내 인터페이스가 Loopback을 지원하는지 매뉴얼에서 확인하고 상단 필터를 맞게 골랐다.',
            'Cubase 프로젝트, 인터페이스, OBS의 샘플레이트를 48 kHz로 통일했다.',
            'Release Driver when Application is in Background를 끄고, OBS를 클릭해도 Cubase 소리가 계속 나는지 확인했다.',
            'OBS에서 Cubase 출력이 들어오는 입력 장치 이름을 찾아 오디오 입력 캡처 소스로 추가했다.'
          ]
        },
        {
          id: 's2', title: 'Control Room과 Cue 믹스로 송출용 / 모니터용 버스 분리',
          goal: '내가 듣는 Monitor 경로와 시청자가 듣는 STREAM 경로를 독립적으로 조절합니다.',
          time: '60분', related: [29, 32, 35],
          blocks: [
            { h: 'Control Room 켜기', items: [
              '`Studio > Audio Connections` [[F4]] → **Control Room** 탭 → 왼쪽 위 전원 버튼으로 활성화합니다(Cubase Pro 기능).',
              '**Add Channel > Add Monitor**: 이름 `Monitor`, Device Port는 헤드폰·스피커가 연결된 출력(보통 1/2).',
              '**Add Channel > Add Cue**: 이름 `STREAM`, Device Port는 OBS로 되돌아가는 출력(Loopback 대상 출력 또는 가상 장치 출력).',
              'Outputs 탭의 **Stereo Out**은 Main Mix로 유지하되 Device Port를 **Not Connected**로 둡니다. 같은 포트를 Outputs와 Control Room이 함께 쓸 수 없고, 이제 소리는 Control Room의 Monitor로 나갑니다.',
              '믹서는 `Studio > Control Room` 또는 MixConsole 오른쪽 영역의 Control Room 탭에서 엽니다.'
            ] },
            { h: 'Cue 믹스 만들기', items: [
              'MixConsole [[F3]]의 Racks에서 **Cue Sends**를 표시합니다. 각 채널에 STREAM으로 보내는 스위치·레벨·팬이 생깁니다.',
              '방송에 내보낼 채널(마이크, BGM, 악기)만 Cue Send를 켭니다. 내보내지 않을 채널(가이드, 큐 사인, 테스트 트랙)은 끕니다.',
              '빠른 시작: 채널들을 선택하고 Control Room의 Cue 채널을 우클릭 → **From Selected Channels > Use Current Mix Levels**로 현재 믹스 레벨을 복사한 뒤 다듬습니다.',
              'Cue Send는 **Pre-Fader**로 둘 수 있습니다. 그러면 내 모니터 페이더를 움직여도 방송 레벨은 변하지 않습니다.',
              'Control Room에서 STREAM 채널의 소스가 **Cues**(Cue 믹스)인지 확인합니다. Mix로 두면 Main Mix가 그대로 나갑니다.'
            ] },
            { h: '분리해서 얻는 것', items: [
              '**메트로놈**: Control Room에서 채널별로 클릭을 켜고 끕니다. Monitor에는 켜고 STREAM에는 끕니다.',
              '**내 목소리 모니터**: 내 헤드폰에는 작게, 방송에는 정상 레벨로 따로 정합니다.',
              '**리버브**: FX 채널에도 Cue Send가 있습니다. 방송에 리버브를 내보내려면 FX 채널의 Cue Send도 켜야 합니다.',
              'Control Room을 쓰지 않는 간단한 대안: Outputs 탭에 `STREAM OUT` 버스를 추가하고 각 채널의 Sends에서 그 버스로 보내는 방식도 가능합니다.'
            ] }
          ],
          values: [
            ['Monitor 채널', '헤드폰·스피커 출력 (보통 1/2)'], ['Cue 채널 STREAM', 'Loopback 대상 또는 가상 장치 출력'], ['Stereo Out Device Port', 'Not Connected (Main Mix 유지)'], ['메트로놈', 'Monitor 켬 / STREAM 끔'], ['Cue Send', 'Pre-Fader 권장']
          ],
          keys: [ { name: 'Audio Connections', key: 'F4' }, { name: 'MixConsole', key: 'F3' }, { name: 'Metronome On/Off', key: 'C' } ],
          checks: [
            'Control Room을 켜고 Monitor 채널과 Cue 채널 STREAM을 만들었다.',
            'Stereo Out의 Device Port를 Not Connected로 바꾸고도 헤드폰에서 소리가 나는 것을 확인했다.',
            '마이크와 BGM 채널의 Cue Send를 켜고 OBS 미터가 움직이는 것을 확인했다.',
            '메트로놈을 켰을 때 내 헤드폰에서만 들리고 OBS 녹화본에는 없는 것을 확인했다.',
            'Monitor 볼륨을 움직여도 OBS 레벨이 변하지 않는 것을 확인했다.'
          ]
        },
        {
          id: 's3', title: '실시간 인서트 체인과 레이턴시 최소화',
          goal: '마이크에 게이트 → 컴프레서 → 리미터를 걸고, 말하는 입과 들리는 소리 사이의 지연을 최소로 줄입니다.',
          time: '60분', related: [22, 30],
          blocks: [
            { h: '마이크 채널 인서트 (위에서 아래로)', items: [
              '**① Gate** (Dynamics > Gate): 말하지 않을 때의 소음 바닥을 미터로 읽고 Threshold를 그보다 6~10 dB 위에 둡니다. Attack은 가장 빠르게, Release 150~300 ms. 말끝이 잘리면 Threshold를 내리거나 Release를 늘립니다.',
              '**② Compressor**: Ratio 3:1 ~ 4:1, Attack 5~15 ms, Release 80~150 ms(또는 Auto), 평소 말소리에서 Gain Reduction 3~6 dB. Make-up으로 줄어든 만큼만 올립니다.',
              '**③ Limiter**: Output −1.0 dB. 웃음이나 큰 소리가 방송에서 찢어지지 않게 하는 안전장치입니다. 평소에는 거의 동작하지 않는 것이 정상입니다.',
              '치찰음이 거슬리면 컴프레서 뒤에 DeEsser를 추가합니다. 저역 잡음은 채널 EQ의 High-pass 80~100 Hz로 먼저 정리합니다.',
              '채널의 **Strip** 구역(Gate · Comp · Limit 모듈)을 써도 같은 구성을 만들 수 있고, 플러그인 창을 덜 엽니다.',
              'OBS 미터 기준으로 말소리가 노란 구간(대략 −20 ~ −9 dB)에 머물고 빨간 구간에는 닿지 않게 최종 레벨을 맞춥니다.'
            ] },
            { h: '레이턴시 줄이기', items: [
              '버퍼: 장치 Control Panel에서 **64 ~ 128 samples**(48 kHz 기준 약 1.3 ~ 2.7 ms). 끊기면 한 단계씩 올립니다.',
              '`Studio > Studio Setup`의 장치 페이지에 표시되는 Input/Output Latency를 더한 값이 체감 지연입니다. 합계 10 ms 이하면 대부분 편하게 말할 수 있습니다.',
              '**ASIO-Guard**: Monitor나 Record Enable이 켜진 실시간 채널에는 적용되지 않습니다. 재생 트랙(BGM)의 안정성을 위해 켜 두되, Level은 Low~Normal로 둡니다.',
              'Look-ahead가 있는 플러그인(일부 리미터·맥시마이저, 리니어 페이즈 EQ)은 지연을 늘립니다. 실시간 채널과 STREAM 경로에서는 피합니다.',
              '툴바의 **Constrain Delay Compensation**을 켜면 지연이 큰 플러그인이 일시적으로 꺼집니다. 기준값은 `Preferences > VST`의 Delay Compensation Threshold에서 정합니다.',
              '내 목소리를 지연 없이 듣고 싶다면 인터페이스의 Direct Monitor를 쓰고 Cubase 쪽 Monitor 채널에서는 마이크를 뺍니다. 두 경로를 동시에 들으면 이중으로 울립니다.'
            ] },
            { h: '영상과 맞추기', items: [
              '카메라 영상이 소리보다 늦으면 OBS의 오디오 고급 속성에서 해당 소스의 **동기화 오프셋(ms)**을 늘려 입 모양에 맞춥니다.',
              '설정을 바꾼 뒤에는 반드시 OBS로 짧게 녹화해 직접 보고 듣습니다. 방송 중 미터만으로는 이중 음성과 싱크를 알 수 없습니다.'
            ] }
          ],
          values: [
            ['버퍼 (48 kHz)', '64 ~ 128 samples'], ['Gate Threshold', '소음 바닥 + 6 ~ 10 dB'], ['Gate Release', '150 ~ 300 ms'], ['Compressor', '3:1 ~ 4:1 · Attack 5~15 ms · Release 80~150 ms · GR 3~6 dB'], ['Limiter Output', '−1.0 dB'], ['OBS 말소리 레벨', '노란 구간 (약 −20 ~ −9 dB)']
          ],
          keys: [ { name: 'MixConsole', key: 'F3' }, { name: 'Audio Performance', key: 'F12' } ],
          checks: [
            '말하지 않을 때 게이트가 닫히고, 말끝이 잘리지 않는 Threshold·Release를 찾았다.',
            '평소 말소리에서 컴프레서 Gain Reduction이 3~6 dB 범위인지 확인했다.',
            '일부러 큰 소리를 내도 OBS 미터가 빨간 구간에 닿지 않는 것을 확인했다.',
            '버퍼를 64/128로 바꿔 끊김 없이 동작하는 가장 작은 값을 기록했다.',
            'OBS로 30초 녹화해 이중 음성·잡음·입 모양 싱크를 직접 확인했다.'
          ]
        }
      ],
      routes: {
        yes: {
          label: '루프백 지원 모델', short: '루프백 지원',
          summary: '인터페이스가 컴퓨터 재생 신호를 다시 입력으로 되돌려 줍니다. 추가 프로그램 없이 가장 안정적입니다.',
          examples: '예: Yamaha AG 시리즈, Steinberg UR-C 시리즈, MOTU M 시리즈, RME(TotalMix), Focusrite Scarlett 4세대 등. 모델과 드라이버 버전에 따라 다르므로 제조사 매뉴얼로 확인하세요.',
          steps: [
            '인터페이스의 **Loopback(또는 Streaming) 기능**을 켭니다. 하드웨어 스위치이거나 제조사 믹서 앱 안에 있습니다.',
            'Cubase의 ASIO Driver는 인터페이스 드라이버 그대로 사용합니다.',
            'Control Room의 Cue 채널 `STREAM`을 Loopback으로 되돌아가는 출력에 연결합니다. 어느 출력이 되돌아가는지는 모델마다 다릅니다(1/2만 되는 모델, 3/4 등 전용 가상 출력이 있는 모델).',
            'OBS에서 **오디오 입력 캡처** 소스를 추가하고 장치로 인터페이스의 Loopback/Streaming 입력을 고릅니다.',
            '**주의:** Loopback이 켜진 상태에서 그 입력을 Cubase 트랙으로 받아 Monitor를 켜면 신호가 무한히 돌아 하울링이 납니다. Cubase의 입력 버스에는 마이크 포트만 연결합니다.',
            '출력 1/2만 되돌아가는 모델은 Monitor와 STREAM을 분리할 수 없습니다. 이 경우 Step 2의 분리는 제조사 믹서 앱에서 하거나 아래 가상 장치 방식을 함께 씁니다.'
          ],
          flow: [
            { title: '방송 경로 (시청자가 듣는 소리)', nodes: [
              { t: '마이크 · 악기', s: 'XLR / Hi-Z', kind: 'src' },
              { t: '오디오 인터페이스', s: '입력 게인', kind: 'hw' },
              { t: 'Cubase 입력 버스', s: 'ASIO · Mono In', kind: 'daw' },
              { t: '채널 인서트', s: 'Gate → Comp → Limiter', kind: 'fx' },
              { t: 'Control Room Cue', s: 'STREAM', kind: 'bus' },
              { t: '인터페이스 Loopback', s: '출력 → 가상 입력', kind: 'hw' },
              { t: 'OBS', s: '오디오 입력 캡처', kind: 'out' }
            ] },
            { title: '모니터 경로 (내가 듣는 소리)', nodes: [
              { t: 'Cubase Main Mix', s: 'Stereo Out', kind: 'daw' },
              { t: 'Control Room Monitor', s: '클릭 포함 가능', kind: 'bus' },
              { t: '인터페이스 출력 1/2', s: '', kind: 'hw' },
              { t: '헤드폰', s: '', kind: 'out' }
            ] }
          ]
        },
        no: {
          label: '루프백 미지원 모델', short: '루프백 미지원',
          summary: '가상 오디오 장치가 Cubase와 OBS 사이의 다리 역할을 합니다. 한 번 구성해 두면 장비를 바꾸지 않고 같은 결과를 얻습니다.',
          examples: 'Windows: Voicemeeter(Banana/Potato). macOS: BlackHole 같은 가상 장치와 Audio MIDI 설정의 통합 기기. 프로그램 버전에 따라 장치 이름이 다르니 각 매뉴얼을 함께 보세요.',
          steps: [
            'Voicemeeter를 설치하고 **A1 하드웨어 출력**을 내 인터페이스의 ASIO 드라이버로 지정합니다. 이제 Voicemeeter가 인터페이스를 잡습니다.',
            'Cubase의 `Studio > Studio Setup > Audio System`에서 ASIO Driver를 **Voicemeeter Virtual ASIO**로 바꿉니다.',
            'Voicemeeter에서 Cubase가 들어오는 가상 입력 스트립의 **A1**(내 헤드폰)과 **B1**(방송용 가상 출력)을 켭니다.',
            'OBS에서 **오디오 입력 캡처** 소스를 추가하고 장치로 **Voicemeeter Output(B1)**을 고릅니다.',
            '마이크는 Voicemeeter의 하드웨어 입력 스트립으로 받아 Cubase로 넘깁니다. 이때 그 스트립의 A1·B1을 직접 켜면 처리 전 소리가 함께 나가 이중으로 들리므로, **처리된 소리는 Cubase 출력 스트립으로만** 내보냅니다.',
            '가상 장치를 거치면 지연이 조금 늘어납니다. Voicemeeter의 버퍼 설정도 Cubase와 같은 수준으로 낮춥니다.',
            '소프트웨어를 쓰기 어렵다면 하드웨어 대안도 있습니다: 인터페이스의 남는 라인 출력을 방송용 PC·두 번째 장치의 라인 입력에 케이블로 연결합니다.'
          ],
          flow: [
            { title: '방송 경로 (시청자가 듣는 소리)', nodes: [
              { t: '마이크 · 악기', s: 'XLR / Hi-Z', kind: 'src' },
              { t: '오디오 인터페이스', s: '입력 게인', kind: 'hw' },
              { t: 'Voicemeeter', s: '하드웨어 입력 → 가상 ASIO', kind: 'bus' },
              { t: 'Cubase 입력 버스', s: 'Voicemeeter Virtual ASIO', kind: 'daw' },
              { t: '채널 인서트', s: 'Gate → Comp → Limiter', kind: 'fx' },
              { t: 'Cubase 출력', s: 'Cue STREAM / Stereo Out', kind: 'daw' },
              { t: 'Voicemeeter B1', s: '가상 출력', kind: 'bus' },
              { t: 'OBS', s: 'Voicemeeter Output 캡처', kind: 'out' }
            ] },
            { title: '모니터 경로 (내가 듣는 소리)', nodes: [
              { t: 'Cubase 출력', s: 'Monitor', kind: 'daw' },
              { t: 'Voicemeeter A1', s: '하드웨어 출력', kind: 'bus' },
              { t: '오디오 인터페이스', s: '출력 1/2', kind: 'hw' },
              { t: '헤드폰', s: '', kind: 'out' }
            ] }
          ]
        }
      },
      faq: [
        { q: '방송에서 내 목소리가 이중으로 울립니다(에코).', a: [
          '같은 목소리가 두 길로 OBS에 들어가고 있습니다. OBS 오디오 믹서에 마이크 장치가 직접 잡혀 있는지 먼저 확인하고, 있다면 제거하거나 음소거합니다. Cubase를 거친 한 줄만 남깁니다.',
          'OBS 설정 > 오디오의 전역 장치(데스크톱 오디오, 마이크/보조)가 같은 소리를 한 번 더 잡고 있지 않은지 확인합니다.',
          '내 헤드폰에서만 이중으로 들린다면 인터페이스의 Direct Monitor와 Cubase의 Monitor 버튼이 동시에 켜진 것입니다. 한쪽만 씁니다.',
          '가상 장치를 쓰는 경우 마이크 스트립이 방송 출력(B1)으로 직접 나가고 있지 않은지 확인합니다.'
        ] },
        { q: '삐— 하는 하울링이 생기거나 소리가 점점 커집니다.', a: [
          '출력이 다시 입력으로 돌아와 무한히 도는 상태입니다. 즉시 인터페이스 볼륨을 내리세요.',
          'Loopback이 켜진 입력을 Cubase 트랙이 받고 있고 그 트랙의 Monitor가 켜져 있으면 생깁니다. 입력 버스의 Device Port를 마이크 포트로만 지정합니다.',
          '스피커로 모니터하면서 마이크를 열어도 생깁니다. 방송 중에는 헤드폰을 씁니다.',
          'Windows 사운드 설정에서 녹음 장치의 "이 장치로 듣기"가 켜져 있으면 끕니다.'
        ] },
        { q: 'OBS를 클릭하면 Cubase 소리가 끊깁니다.', a: [
          '`Studio > Studio Setup > Audio System`의 Release Driver when Application is in Background를 끕니다.'
        ] },
        { q: '방송 소리에 지직거림이 있거나 음정·속도가 이상합니다.', a: [
          '샘플레이트 불일치가 가장 흔한 원인입니다. Cubase 프로젝트, 인터페이스, Windows 장치 속성, OBS를 모두 48 kHz로 맞춥니다.',
          '버퍼가 너무 작으면 지직거립니다. 64 → 128 → 256 순으로 올려 봅니다.',
          '[[F12]] Audio Performance에서 Peak가 넘치면 무거운 플러그인을 줄입니다.',
          'USB 허브를 거치지 말고 인터페이스를 본체 포트에 직접 연결합니다.'
        ] },
        { q: '시청자에게 메트로놈 소리가 들립니다.', a: [
          'Control Room에서 STREAM 채널의 클릭을 끕니다. Monitor 채널에만 켜 둡니다.',
          'Control Room 없이 Stereo Out을 그대로 내보내고 있다면 클릭도 함께 나갑니다. Step 2의 분리를 적용하세요.'
        ] },
        { q: 'OBS 미터가 전혀 움직이지 않습니다.', a: [
          'OBS 소스의 장치가 Loopback 입력(또는 가상 출력)으로 정확히 지정되어 있는지 확인합니다.',
          'Cubase에서 보낼 채널의 Cue Send가 켜져 있는지, STREAM 채널의 소스가 Cues인지 확인합니다.',
          'Cue 채널의 Device Port가 실제로 되돌아가는 출력에 연결되어 있는지 [[F4]]에서 확인합니다.',
          '인터페이스의 Loopback 스위치가 켜져 있는지 확인합니다.'
        ] }
      ]
    },

    /* ───────────────────────── Track 3 ───────────────────────── */
    {
      id: 'record', no: 3, color: '#5BC98C', icon: 'mic',
      title: '보컬 · 악기 녹음 세팅', en: 'Recording Setup',
      intro: '입력 버스를 정확히 잡고, 여유 있는 레벨로 받고, 지연 없이 모니터하며, 여러 테이크에서 가장 좋은 부분만 골라 완성합니다.',
      prereq: [1, 12, 22, 24, 26],
      steps: [
        {
          id: 'r1', title: 'Audio Connections 입력 버스와 게인 스테이징',
          goal: '마이크·악기가 꽂힌 포트를 이름 붙인 입력 버스로 만들고, 평균 −18 dBFS · 피크 −12 dBFS 부근으로 받습니다.',
          time: '40분', related: [1, 22, 25],
          blocks: [
            { h: '입력 버스 만들기', items: [
              '`Studio > Audio Connections` [[F4]] → **Inputs** 탭을 엽니다. 기본으로 Stereo In이 하나 있습니다.',
              '**Add Bus** → Configuration **Mono**, 이름 `Vocal Mic` → Device Port에서 마이크가 꽂힌 입력(예: Input 1)을 지정합니다.',
              '기타·베이스를 인터페이스에 직접 꽂았다면 모노 버스 `Gtr DI`를 하나 더 만듭니다. 스테레오 건반·스테레오 마이킹은 Stereo 버스를 씁니다.',
              '[[T]] → Audio로 트랙을 만들 때 Audio Inputs에서 방금 만든 버스를 고릅니다. 나중에 바꿀 때는 Inspector의 Routing에서 변경합니다.',
              '녹음 형식은 `Project > Project Setup`에서 정합니다. **48 kHz(음악만이면 44.1 kHz도 무방) · 24 bit**를 권합니다.'
            ] },
            { h: '게인은 인터페이스에서', items: [
              '컨덴서 마이크는 **48V 팬텀 전원**, 기타·베이스 직결은 **Hi-Z/INST** 스위치를 먼저 확인합니다.',
              '가장 크게 부를 구간을 실제로 연주하면서 **인터페이스의 게인 노브**를 돌립니다. Cubase 안의 페이더와 Pre Gain은 이미 변환된 뒤의 신호라 클리핑을 되돌릴 수 없습니다.',
              'MixConsole [[F3]] 왼쪽의 **입력 채널** 미터를 봅니다. 평소 구간이 −18 dBFS 부근, 가장 큰 순간이 −12 ~ −6 dBFS, 빨간 클립 표시는 한 번도 켜지지 않아야 합니다.',
              '미터 위 숫자는 Peak Hold 값입니다. 클릭하면 초기화되므로, 초기화 후 한 번 더 크게 불러 최대치를 확인합니다.',
              '24 bit에서는 작게 받아도 잡음 걱정이 없습니다. 망설여지면 작게 받는 쪽이 안전합니다.'
            ] },
            { h: '녹음 환경', items: [
              '마이크 녹음 중에는 스피커를 끄고 **헤드폰**으로 모니터합니다. 스피커 소리가 마이크로 들어가면 반주가 함께 녹음되고 피드백 위험이 생깁니다.',
              '보컬은 팝 필터를 쓰고 마이크와 주먹 하나~한 뼘 거리를 유지합니다.',
              '조용한 환경을 먼저 만듭니다. 나중에 지우는 것보다 처음부터 안 들어가게 하는 편이 쉽습니다.'
            ] }
          ],
          values: [
            ['평균 레벨', '약 −18 dBFS'], ['피크', '−12 ~ −6 dBFS'], ['클립 표시', '0회'], ['녹음 형식', '48 kHz · 24 bit'], ['보컬·DI 기타', 'Mono 버스'], ['스테레오 소스', 'Stereo 버스']
          ],
          keys: [ { name: 'Audio Connections', key: 'F4' }, { name: 'MixConsole', key: 'F3' }, { name: 'Add Track', key: 'T' } ],
          checks: [
            '마이크(또는 악기) 포트에 연결된 모노 입력 버스를 만들고 이름을 붙였다.',
            '새 오디오 트랙의 입력이 그 버스인지 Inspector에서 확인했다.',
            '가장 큰 구간을 연주하며 인터페이스 게인을 조절해 피크가 −12 ~ −6 dBFS에 오게 했다.',
            'Peak Hold를 초기화하고 다시 확인해 클립 표시가 켜지지 않았다.',
            'Project Setup의 샘플레이트와 비트 수를 확인했다.'
          ]
        },
        {
          id: 'r2', title: '버퍼 사이즈와 Direct Monitoring으로 레이턴시 해결',
          goal: '내 소리가 헤드폰에서 늦게 들리는 문제를 두 가지 방법 중 내 장비에 맞는 쪽으로 해결합니다.',
          time: '40분', related: [22],
          blocks: [
            { h: '방법 A — 버퍼를 줄여 Cubase로 모니터', items: [
              '`Studio > Studio Setup` → Audio System 아래의 장치 이름 → **Control Panel**에서 버퍼를 **64 ~ 128 samples**로 내립니다.',
              '같은 페이지에 표시되는 Input Latency + Output Latency의 합이 왕복 지연입니다. 10 ms 이하면 대부분 불편 없이 연주할 수 있습니다.',
              '트랙의 **Monitor** 버튼(스피커 모양, 켜지면 주황색)을 켜면 Cubase를 거친 소리가 들립니다. 인서트의 리버브·컴프레서까지 함께 들을 수 있다는 것이 장점입니다.',
              '끊김이 생기면 툴바의 **Constrain Delay Compensation**을 켜 지연이 큰 플러그인을 잠시 끄거나, 버퍼를 한 단계 올립니다.',
              '믹싱으로 돌아갈 때는 버퍼를 512 ~ 1024 samples로 다시 올립니다.'
            ] },
            { h: '방법 B — Direct Monitoring', items: [
              '입력 신호를 컴퓨터를 거치지 않고 인터페이스 안에서 바로 헤드폰으로 보내는 방식입니다. 지연이 사실상 없습니다.',
              '드라이버가 지원하면 `Studio > Studio Setup`의 장치 페이지에서 **Direct Monitoring**을 켭니다. 이후 트랙의 Monitor 버튼이 인터페이스의 다이렉트 모니터를 제어합니다.',
              '체크박스가 비활성이라면 인터페이스 본체의 **Direct Monitor 스위치나 Input/DAW Mix 노브**를 사용합니다.',
              '하드웨어로 직접 모니터할 때는 Cubase 트랙의 **Monitor 버튼을 끕니다.** 둘 다 켜면 같은 소리가 살짝 어긋나 두 번 들립니다.',
              'Direct Monitoring에서는 Cubase 인서트 이펙트가 들리지 않습니다. 리버브가 꼭 필요하면 방법 A를 쓰거나 인터페이스 내장 DSP 리버브를 씁니다.'
            ] },
            { h: '모니터 동작 정하기', items: [
              '`Edit > Preferences > VST`의 **Auto Monitoring**에서 Monitor 버튼의 자동 동작을 고릅니다.',
              'Manual: 직접 켜고 끔 / While Record-Enabled: 녹음 대기 중 항상 / While Record Running: 녹음 중에만 / Tapemachine Style: 정지·녹음 중에는 입력, 재생 중에는 녹음된 소리.',
              '펀치 인 녹음에는 Tapemachine Style이 편합니다. 재생 중에는 기존 테이크를 듣다가 녹음이 시작되면 내 입력으로 바뀝니다.',
              '장치 페이지의 **Adjust for Record Latency**는 켠 채로 둡니다. 녹음된 오디오가 지연만큼 보정되어 제자리에 놓입니다.'
            ] }
          ],
          values: [
            ['녹음용 버퍼', '64 ~ 128 samples'], ['믹싱용 버퍼', '512 ~ 1024 samples'], ['왕복 지연 목표', '10 ms 이하'], ['하드웨어 다이렉트 모니터 사용 시', 'Cubase Monitor 버튼 끔'], ['Adjust for Record Latency', '켬']
          ],
          keys: [ { name: 'Audio Performance', key: 'F12' }, { name: 'Metronome On/Off', key: 'C' } ],
          checks: [
            '버퍼를 128 → 64로 바꾸며 장치 페이지의 Input/Output Latency 값을 기록했다.',
            'Cubase Monitor로 들을 때와 Direct Monitoring으로 들을 때의 지연 차이를 직접 비교했다.',
            '하드웨어 다이렉트 모니터를 쓸 때 Cubase Monitor를 꺼서 이중으로 들리지 않게 했다.',
            'Auto Monitoring 네 가지 중 내 작업에 맞는 모드를 골라 메모했다.',
            '녹음한 클릭 맞춤 연주가 그리드에서 밀리지 않는 것을 확인했다.'
          ]
        },
        {
          id: 'r3', title: 'Lane 컴핑과 Punch In/Out 자동 녹음',
          goal: '같은 구간을 여러 번 녹음해 Lane에서 좋은 부분만 고르고, 틀린 한 마디는 자동 펀치로 다시 녹음합니다.',
          time: '60분', related: [12, 24, 26],
          blocks: [
            { h: '테이크 쌓기', items: [
              '녹음할 구간을 선택하고 [[P]]로 로케이터를 맞춘 뒤 Cycle [[Num /]]을 켭니다.',
              '`Transport > Audio Record Mode`에서 **Keep History**를 고릅니다. 이전 테이크가 지워지지 않고 겹쳐 쌓입니다.',
              '`Transport > Metronome Setup`에서 카운트인을 1~2마디로 설정하고 Transport의 Count-In 버튼을 켭니다.',
              '[[Num *]]로 녹음을 시작하면 Cycle이 돌 때마다 테이크가 하나씩 쌓입니다. 3~5회면 충분합니다. [[Space]]로 멈춥니다.'
            ] },
            { h: 'Lane에서 고르기 (Comping)', items: [
              '트랙의 **Show Lanes** 버튼을 켜면 테이크가 아래로 한 줄씩 펼쳐집니다.',
              '툴바에서 **Comp 도구**를 고릅니다. Lane 위를 드래그하면 그 구간에서 해당 테이크가 선택되고 다른 테이크는 자동으로 잘리며 뮤트됩니다.',
              '구간 경계는 숨 쉬는 곳이나 단어 사이에 둡니다. 경계를 좌우로 끌어 옮길 수 있습니다.',
              '고르기가 끝나면 모든 조각을 선택하고 [[X]]로 크로스페이드를 넣어 이음매의 클릭을 없앱니다(기초 24회차).',
              '정리: 트랙 우클릭 → **Clean Up Lanes**로 겹침을 정돈하거나, `Audio > Advanced > Delete Overlaps`로 가려진 부분을 지웁니다. 원본 테이크는 Pool에 남습니다.'
            ] },
            { h: 'Punch In/Out', items: [
              '고칠 구간만 좌·우 로케이터로 감쌉니다. 이벤트를 선택하고 [[P]]를 누르면 빠릅니다.',
              'Transport에서 **Punch In** [[I]]과 **Punch Out** [[O]]을 켭니다. 펀치 지점은 기본적으로 로케이터에 묶여 있습니다.',
              '`Transport > Pre-roll & Post-roll`에서 Pre-roll을 켜고 2마디로 설정합니다. 고칠 구간 앞에서부터 재생이 시작됩니다.',
              '커서를 로케이터 앞에 두고 **재생**합니다. 왼쪽 로케이터에서 자동으로 녹음이 시작되고 오른쪽 로케이터에서 자동으로 끝납니다. 버튼을 누를 필요가 없어 연주에만 집중할 수 있습니다.',
              '끝나면 Punch In/Out을 반드시 끕니다. 켜 둔 채 잊으면 다음 재생에서 의도치 않게 녹음됩니다.',
              '새로 녹음한 조각의 앞뒤에 [[X]]로 크로스페이드를 넣고 이음매를 솔로로 들어 확인합니다.'
            ] }
          ],
          values: [
            ['Audio Record Mode', 'Keep History'], ['Cycle 테이크 수', '3 ~ 5회'], ['카운트인', '1 ~ 2마디'], ['Pre-roll', '2마디'], ['이음매', '크로스페이드 필수'], ['작업 후', 'Punch In/Out 끄기']
          ],
          keys: [
            { name: 'Locators to Selection', key: 'P' }, { name: 'Cycle', key: 'Num /' }, { name: 'Record', key: 'Num *' },
            { name: 'Auto Punch In', key: 'I' }, { name: 'Auto Punch Out', key: 'O' }, { name: 'Crossfade', key: 'X' }, { name: 'Start/Stop', key: 'Space' }
          ],
          checks: [
            'Keep History 모드에서 같은 4마디를 Cycle로 3회 이상 녹음했다.',
            'Show Lanes를 켜고 Comp 도구로 구간마다 다른 테이크를 골랐다.',
            '이음매에 크로스페이드를 넣고 솔로로 들어 클릭이 없는 것을 확인했다.',
            '한 마디만 로케이터로 감싸 Punch In/Out과 Pre-roll로 자동 녹음했다.',
            '작업 후 Punch In/Out을 끄고 프로젝트를 저장했다.'
          ]
        }
      ],
      flow: [
        { title: '녹음 경로', nodes: [
          { t: '마이크 · 악기', s: '48V / Hi-Z', kind: 'src' },
          { t: '오디오 인터페이스', s: '게인 노브 → AD 변환', kind: 'hw' },
          { t: 'Cubase 입력 버스', s: 'F4 · Vocal Mic (Mono)', kind: 'daw' },
          { t: '오디오 트랙', s: 'Record Enable · −18 dBFS', kind: 'daw' },
          { t: '프로젝트 Audio 폴더', s: 'WAV 24 bit', kind: 'out' }
        ] },
        { title: '모니터 경로 A — Cubase 경유 (버퍼 64~128)', nodes: [
          { t: '오디오 트랙', s: 'Monitor 켬 · 인서트 포함', kind: 'daw' },
          { t: 'Stereo Out / Control Room', s: '', kind: 'bus' },
          { t: '인터페이스 출력', s: '', kind: 'hw' },
          { t: '헤드폰', s: '', kind: 'out' }
        ] },
        { title: '모니터 경로 B — Direct Monitoring (지연 없음)', nodes: [
          { t: '오디오 인터페이스 입력', s: '', kind: 'hw' },
          { t: '인터페이스 내부 믹서', s: 'Direct Monitor · Input/DAW Mix', kind: 'bus' },
          { t: '헤드폰', s: 'Cubase Monitor는 끔', kind: 'out' }
        ] }
      ],
      faq: [
        { q: '반주 소리가 마이크 트랙에 같이 녹음됩니다.', a: [
          '가장 흔한 원인은 스피커입니다. 녹음 중에는 스피커를 끄고 밀폐형 헤드폰으로 모니터합니다.',
          '헤드폰 볼륨이 너무 크면 헤드폰에서 새는 소리와 클릭이 마이크로 들어갑니다. 볼륨을 낮추고 한쪽을 벗지 않습니다.',
          '인터페이스의 **Loopback 기능이 켜져 있으면** 컴퓨터 재생 소리가 입력에 섞여 녹음됩니다. 방송용 기능이므로 녹음할 때는 끕니다.',
          '트랙 입력이 마이크 버스가 아니라 Loopback/Mix 입력이나 엉뚱한 스테레오 버스로 잡혀 있지 않은지 Inspector와 [[F4]]에서 확인합니다.'
        ] },
        { q: '헤드폰에서 내 목소리가 늦게 들려 부르기 어렵습니다.', a: [
          '버퍼를 64~128 samples로 내리거나 Direct Monitoring으로 전환합니다(Step 2).',
          '프로젝트에 지연이 큰 플러그인이 있으면 Constrain Delay Compensation을 켭니다.',
          '블루투스 헤드폰은 자체 지연이 커서 녹음 모니터에 쓸 수 없습니다. 유선 헤드폰을 인터페이스에 연결합니다.'
        ] },
        { q: '내 목소리가 두 번 겹쳐 들립니다.', a: [
          '인터페이스의 Direct Monitor와 Cubase의 Monitor 버튼이 동시에 켜져 있습니다. 한쪽을 끕니다.'
        ] },
        { q: '녹음된 오디오가 박자보다 조금 늦거나 빠르게 놓입니다.', a: [
          '`Studio > Studio Setup`의 장치 페이지에서 Adjust for Record Latency가 켜져 있는지 확인합니다.',
          '그래도 일정하게 어긋나면 같은 페이지의 Record Shift에 보정값(samples)을 넣습니다. 클릭을 헤드폰에서 마이크로 녹음해 어긋난 양을 재면 정확합니다.'
        ] },
        { q: '미터가 전혀 움직이지 않습니다.', a: [
          '[[F4]] Inputs 탭에서 버스의 Device Port가 실제로 꽂은 입력인지 확인합니다.',
          '트랙의 Record Enable 또는 Monitor가 켜져 있어야 트랙 미터가 입력을 보여 줍니다.',
          '컨덴서 마이크는 48V, 악기 직결은 Hi-Z 스위치를 확인하고 인터페이스 게인을 올립니다.',
          '`Studio > Studio Setup`에서 ASIO Driver가 내 인터페이스인지 확인합니다.'
        ] },
        { q: '다시 녹음했더니 이전 테이크가 사라졌습니다.', a: [
          '`Transport > Audio Record Mode`가 Replace로 되어 있으면 겹친 부분이 대체됩니다. Keep History로 바꿉니다.',
          '보이지 않을 뿐 남아 있을 수 있습니다. Show Lanes를 켜거나 Pool에서 녹음 파일을 확인합니다.'
        ] },
        { q: '파형이 위아래로 잘려 있고 찌그러진 소리가 납니다.', a: [
          '입력 단계에서 클리핑된 것입니다. Cubase 안에서는 되돌릴 수 없으므로 인터페이스 게인을 낮추고 다시 녹음합니다.',
          '피크가 −12 ~ −6 dBFS에 오도록 Step 1의 게인 스테이징을 다시 진행합니다.'
        ] }
      ]
    }
  ];

  /* 심화 트랙에서 새로 쓰는 단축키. 단축키 노트의 "심화" 묶음에 표시됩니다. */
  CG.extraShortcuts = [
    { name: 'Add Track', key: 'T', scope: 'Project 창 활성. Add Track 창을 엽니다. 텍스트 입력 중에는 동작하지 않습니다.', tag: '공통' },
    { name: 'Insert Marker', key: 'Insert', scope: '커서 위치에 마커 추가. Insert 키가 없는 키보드는 Project > Add Marker 또는 직접 배정.', tag: '공통' },
    { name: 'Audio Performance', key: 'F12', scope: 'CPU·디스크 부하 창. 버퍼와 ASIO-Guard를 조정할 때 띄워 둡니다.', tag: '심화' },
    { name: 'Auto Punch In', key: 'I', scope: 'Project 창 활성. 왼쪽 로케이터(펀치 인 지점)에서 자동 녹음 시작.', tag: 'Track 3' },
    { name: 'Auto Punch Out', key: 'O', scope: 'Project 창 활성. 오른쪽 로케이터(펀치 아웃 지점)에서 자동 녹음 종료.', tag: 'Track 3' },
    { name: 'Disable / Enable Track', key: '직접 배정', scope: '기본 배정 없음. Edit > Key Commands에서 "Disable" 검색 후 지정.', tag: 'Track 1' }
  ];
})(typeof globalThis !== 'undefined' ? globalThis : this);
