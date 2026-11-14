/* 용어·자료 데이터. 컨텍스트 문서(용어 25, 믹스 5가지, 다운로드 가이드)를 한국어로 정리했습니다. */
(function (root) {
  var CG = root.CG = root.CG || {};

  CG.glossary = [
    { group: '프로젝트와 트랙', items: [
      { term: 'Project', ko: '프로젝트', def: '곡 하나의 전체 파일. 트랙·오디오·MIDI·악기·이펙트 설정이 모두 들어 있습니다.', lesson: 1 },
      { term: 'Track', ko: '트랙', def: '오디오나 MIDI 데이터를 담는 한 줄. 보컬, 드럼 루프, 신스가 각각 한 트랙을 차지합니다.', lesson: 3 },
      { term: 'Timeline', ko: '타임라인(눈금자)', def: '화면 위쪽의 가로 자. 박·마디·초 단위로 시간을 보여 주며 곡을 배열하는 기준입니다.', lesson: 4 },
      { term: 'Event', ko: '이벤트', def: '트랙 위에 놓인 내용 블록. 녹음, 루프, MIDI 파트 모두 이벤트이며 이동·복사·자르기·편집이 가능합니다.', lesson: 8 },
      { term: 'Loop', ko: '루프', def: '반복해서 쓰는 짧은 음악 조각(비트, 코드 진행, 멜로디). 드래그 앤 드롭으로 바로 배치할 수 있습니다.', lesson: 9 },
      { term: 'Sample', ko: '샘플', def: '스네어 한 타, 보컬 한 구절 같은 짧은 오디오 파일. 직접 모은 것이나 라이브러리·팩을 사용합니다.', lesson: 3 }
    ] },
    { group: '녹음과 재생', items: [
      { term: 'Record Arm', ko: '녹음 대기(Record Enable)', def: '녹음할 트랙을 지정하는 버튼. 켜 두어야 Cubase가 그 트랙에 녹음합니다.', lesson: 16 },
      { term: 'Monitoring', ko: '모니터링', def: '녹음하면서 목소리나 기타의 입력을 실시간으로 듣는 기능.', lesson: 22 },
      { term: 'Metronome (Click)', ko: '메트로놈(클릭)', def: '녹음할 때 박자를 지켜 주는 일정한 클릭. Transport Bar에서 켜고 끕니다.', lesson: 4 },
      { term: 'Latency', ko: '레이턴시(지연)', def: '연주한 순간과 소리가 들리는 순간 사이의 짧은 지연. 오디오 인터페이스를 쓰고 버퍼 사이즈를 조절해 줄입니다.', lesson: 22 },
      { term: 'Transport Controls', ko: '트랜스포트', def: '재생·정지·녹음·되감기·반복 등 화면 아래쪽의 주요 재생 버튼.', lesson: 4 }
    ] },
    { group: 'MIDI와 가상악기', items: [
      { term: 'MIDI', ko: 'MIDI', def: '어떤 음을 얼마나 길게, 얼마나 세게 연주할지 알려 주는 연주 데이터. 스스로 소리를 내지 않고 가상악기를 움직입니다.', lesson: 15 },
      { term: 'Instrument Track', ko: '악기 트랙', def: 'MIDI 입력과 가상악기를 한데 묶은 트랙. 멜로디와 비트를 만들 때 기본으로 사용합니다.', lesson: 15 },
      { term: 'VST Instrument (VSTi)', ko: 'VST 악기', def: 'Cubase 안에서 동작하는 소프트웨어 악기. Retrologue, Groove Agent, 서드파티 신스 등이 있습니다.', lesson: 15 },
      { term: 'Piano Roll / Key Editor', ko: '키 에디터(피아노 롤)', def: 'MIDI 노트를 그리고 옮기고 편집하는 격자 화면. 가장 오래 머무는 편집기입니다.', lesson: 17 },
      { term: 'Chord Pads', ko: '코드 패드', def: '클릭 한 번으로 화음을 연주하는 기능. 화성학을 몰라도 진행을 빠르게 만들 수 있습니다.' },
      { term: 'Scale Assistant', ko: '스케일 어시스턴트', def: 'MIDI 노트를 정한 조(key) 안에 머물게 도와 음이 벗어나지 않게 합니다.' }
    ] },
    { group: '믹싱과 이펙트', items: [
      { term: 'MixConsole', ko: '믹스콘솔', def: '트랙별 볼륨·팬·이펙트를 조절하는 화면. 실제 믹싱 콘솔과 같은 역할입니다.', lesson: 29 },
      { term: 'Volume Fader', ko: '볼륨 페이더', def: '트랙의 크기를 정하는 컨트롤. Inspector와 MixConsole 양쪽에 있습니다.', lesson: 29 },
      { term: 'Pan', ko: '팬', def: '소리를 스테레오의 왼쪽·오른쪽으로 옮기는 컨트롤. 예: 기타는 약간 왼쪽, 피아노는 약간 오른쪽.', lesson: 29 },
      { term: 'Insert Effects', ko: '인서트 이펙트', def: '한 트랙에 직접 거는 이펙트(EQ, 컴프레서, 딜레이 등).', lesson: 30 },
      { term: 'Send Effects', ko: '센드 이펙트', def: 'FX 채널을 통해 여러 트랙이 함께 쓰는 이펙트. CPU를 아끼고 믹스가 일관되게 들립니다.', lesson: 31 },
      { term: 'Automation', ko: '오토메이션', def: '볼륨이나 이펙트 값을 시간에 따라 자동으로 바꾸는 기능. 페이드인, 필터 스윕, 순간 뮤트 등에 씁니다.', lesson: 33 }
    ] },
    { group: '알아 두면 좋은 것', items: [
      { term: 'Render / Export', ko: '렌더 · 내보내기', def: '완성한 곡을 MP3나 WAV 같은 오디오 파일로 만들어 공유하는 과정.', lesson: 37 },
      { term: 'Latency Compensation', ko: '지연 보정', def: '플러그인이 만든 미세한 지연을 Cubase가 자동으로 맞춰 모든 트랙의 싱크를 유지하는 기능.', lesson: 35 },
      { term: 'Quantize', ko: '퀀타이즈', def: 'MIDI나 오디오를 그리드에 맞춰 타이밍을 정돈하는 기능.', lesson: 18 }
    ] }
  ];

  CG.mixTips = [
    { title: '페이더가 먼저', en: 'Faders First', body: '플러그인을 걸기 전에 볼륨부터 맞춥니다. 균형만 잘 잡아도 믹스는 단단하고 음악적으로 들립니다.', steps: [
      'MixConsole을 엽니다 [[F3]].', '모든 페이더를 끝까지 내립니다.', '킥과 베이스부터 올려 둘이 잘 어울리게 맞춥니다.', '나머지 트랙을 하나씩 천천히 올리며 레벨을 조절합니다.'
    ], lesson: 29 },
    { title: '팬으로 자리 만들기', en: 'Make Space with Panning', body: '모든 소리가 가운데에 있으면 서로 부딪힙니다. 좌우로 벌려 각 악기에 자기 자리를 주면 믹스가 넓어집니다.', steps: [
      '가운데: 킥, 베이스, 리드 보컬', '약간 좌우: 스네어, 클랩, 건반', '넓게 좌우: 기타, 하이햇, 백그라운드 보컬', '팬 노브는 각 채널 페이더 위에 있습니다.'
    ], lesson: 29 },
    { title: 'EQ로 공간 파내기', en: 'Carve Out Space with EQ', body: '같은 주파수대에서 여러 악기가 동시에 말하면 탁해집니다. 필요 없는 대역을 덜어 내 악기마다 숨 쉴 자리를 줍니다.', steps: [
      '내장 Channel EQ를 사용합니다.', 'PRE 구역의 High-pass 필터를 켜고, 베이스 계열이 아닌 악기는 80~120 Hz 부근으로 설정합니다.', '저역 위주의 소리에는 Low-pass 필터로 5~10 kHz 위를 정리합니다(소리에 따라 조절).', '킥과 베이스가 더 단단해지고 보컬이 앞으로 나오는지 확인합니다.'
    ], lesson: 30 },
    { title: '리버브로 깊이 더하기', en: 'Add Depth with Reverb', body: '마른 소리는 평평하고 부자연스럽습니다. 리버브는 트랙에 직접 걸지 말고 FX 채널을 만들어 Send로 보냅니다.', steps: [
      '`Project > Add Track > Effect`로 FX 채널을 만들고 RoomWorks를 넣습니다.', '"Plate Vintage" 같은 프리셋을 고르고 Wet Only를 켭니다.', '보컬 트랙의 Sends에서 그 리버브로 보냅니다.', 'Send 레벨로 은은하게 섞습니다.'
    ], lesson: 31 },
    { title: '과하지 않게', en: "Don't Overdo It", body: '플러그인이 많다고 소리가 좋아지지 않습니다. 목표는 완벽이 아니라 균형입니다. 이미 좋게 들리면 고치지 않아도 됩니다.', steps: [
      '과한 EQ → 소리가 얇아짐', '과한 컴프레서 → 연주의 생기가 눌림', '리버브 위에 리버브 → 전체가 멀고 흐려짐', '멈출 때를 아는 것이 가장 좋은 기술입니다.'
    ], lesson: 34 }
  ];

  CG.contentGuide = {
    intro: 'Steinberg Download Assistant(SDA)에서 왼쪽의 Cubase 에디션을 고르면 오른쪽에 받을 수 있는 항목이 나옵니다. 반드시 필요한 것은 첫 줄의 Cubase 애플리케이션뿐이고, 나머지는 라이선스에 포함된 선택 콘텐츠입니다. 라이선스에 포함된 것은 「My Product Downloads」에 있는 항목이며, 그 밖의 제품은 구매하거나 체험판으로 먼저 활성화해야 합니다.',
    categories: [
      { name: 'Cubase 15 애플리케이션', note: '필수. Pro·Artist·Elements·AI·LE가 같은 설치 파일을 쓰며 라이선스가 실행 에디션을 정합니다. 바로 아래 Read Me에 지원·릴리스 노트·제품 등록 안내가 있습니다.' },
      { name: 'Virtual Instruments & Libraries', note: '악기 플러그인과 프리셋 라이브러리. 에디션에 따라 구성이 다릅니다.' },
      { name: 'Loops & Samples', note: '30 GB가 넘는 루프와 샘플. 일렉트로닉·힙합·시네마틱·드럼앤베이스 등 장르별로 제공됩니다.' },
      { name: 'Tools', note: 'Cubase 안에서 쓰는 부가 도구. SpectraLayers Go, Yamaha Omnivocal 등.' },
      { name: 'Demo Projects', note: '프로듀서들이 만든 데모 프로젝트. 완성된 세션의 구성을 살펴볼 수 있습니다.' }
    ],
    instruments: [
      { name: 'HALion Sonic', what: '어쿠스틱부터 최신 전자음까지 폭넓은 음색을 담은 종합 음원', needs: '' },
      { name: 'HALion Sonic Selection', what: 'HALion Sonic의 핵심 음색을 추린 프리셋 모음', needs: 'HALion Sonic' },
      { name: 'Groove Agent SE', what: '어쿠스틱 드럼·전자 비트·퍼커션을 다루는 가상 드럼 악기', needs: '' },
      { name: 'Groove Agent SE Content', what: '드럼 키트·샘플·그루브 모음', needs: 'Groove Agent' },
      { name: 'Production Grooves', what: '400개 이상의 드럼 루프와 프리셋', needs: 'Groove Agent' },
      { name: 'Drum Machine Vol 01 / 02', what: 'Drum Machine용 전자 드럼 키트. Vol 02는 40개 키트 추가', needs: '' },
      { name: 'Retrologue', what: '오실레이터 3개와 다양한 필터·모듈레이션을 갖춘 가상 아날로그 신스', needs: '' },
      { name: 'Retrologue Content', what: '리드·베이스·패드 프리셋 모음', needs: 'Retrologue' },
      { name: 'Padshop', what: '분위기 있고 변화하는 소리를 만드는 그래뉼러 신스', needs: '' },
      { name: 'Padshop Content', what: '텍스처·앰비언트·패드 프리셋과 샘플', needs: 'Padshop' },
      { name: 'Writing Room Synths', what: '빈티지 신스의 리드·베이스·패드 모음', needs: 'HALion Sonic' },
      { name: 'Iconica Sketch', what: '스트링·브라스·목관·타악기를 담은 간결한 오케스트라 라이브러리. 심화 Track 1 실습에 바로 쓸 수 있습니다', needs: 'HALion Sonic' },
      { name: 'Verve', what: '따뜻하고 친밀한 펠트 피아노', needs: 'HALion Sonic' },
      { name: 'Caleidoscope', what: 'Sampler Track 프리셋용 실험적 사운드·글리치 텍스처', needs: '' },
      { name: 'EDM Toolbox', what: '컨스트럭션 키트 30종(키트당 MIDI 루프 25~30개, 믹스 설정 포함)', needs: 'HALion Sonic, Groove Agent, Retrologue, Padshop' },
      { name: 'Rock Pop Toolbox', what: '컨스트럭션 키트 30종(오디오·MIDI 루프)', needs: 'HALion Sonic, Groove Agent, Retrologue, Padshop' },
      { name: 'Vintage Verb Collection', what: 'REVerence용 추가 프리셋과 전용 임펄스 응답', needs: '' },
      { name: 'SpectraLayers Go', what: '오디오를 시각적으로 보고 정리하는 도구. 보컬 분리 가능', needs: '' },
      { name: 'Yamaha Omnivocal', what: '자연스러운 가창을 만드는 보컬 합성 도구', needs: '' }
    ],
    samplesIntro: '샘플 팩은 팩마다 300~1,000개의 루프와 원샷을 담고 있습니다. 모든 루프에 BPM 정보가 태그되어 MediaBay에서 재생하면 프로젝트 템포에 자동으로 맞춰지고, 멜로디 샘플은 조성 정보도 갖고 있습니다. 프로젝트, Sampler Track, Drum Machine, Groove Agent에서 쓸 수 있습니다.',
    samples: [
      { genre: '하우스 · 테크노', packs: 'Analog Techno, Dancefloor Tech House, Laidback House, Mainroom Melodic House, Midnight Dance' },
      { genre: '힙합 · 트랩 · R&B', packs: 'Delicatessen, Grit & Grime, Hard Knocks, Hip Hop Vault, Future Trap, Soul Assembly, Soulful RnB Vocals, LoFi Dreams' },
      { genre: '시네마틱 · 앰비언트', packs: 'Blockbuster, Cinematic Electronic, Cinematic Odyssey, Mystic Spaces, Noir, Raw Ambience' },
      { genre: '신스 · 보컬 · 기타', packs: 'Analogue Wonder, Night Call Synthwave, Bloom, Drum Loop Expansion, LoopMash Content, Sequel MIDI Loops(MIDI 루프 2,000개 이상)' }
    ]
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);
