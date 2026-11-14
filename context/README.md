# 컨텍스트 문서 정리

Claude 프로젝트 "Cubase Guide"에 올린 Steinberg 입문 튜토리얼과, 그 내용이 사이트 어디에 반영되었는지 정리한 색인입니다.
원문은 Steinberg의 저작물이므로 저장소에는 싣지 않고, 요점만 한국어로 다시 정리해 `data/context.js`와 `data/reference.js`에 담았습니다.

| # | 문서 | 다루는 내용 | 사이트 반영 위치 |
|---|------|-------------|------------------|
| 1 | Setup your audio interface | 드라이버 설치, ASIO Driver 선택, 버퍼와 레이턴시, 입출력 버스 | 기초 01·22회차 / 심화 Track 3 Step 1–2 |
| 2 | Let the Music Play | 재생·정지, 로케이터, Cycle, 마커 | 기초 04·05·12·13회차 |
| 3 | Your First Audio Recording | 오디오 트랙 추가, 입력 선택, 모니터링, 메트로놈, 카운트인 | 기초 04·16·22회차 / 심화 Track 3 |
| 4 | How to Use Virtual Instruments | 악기 트랙, VST 악기 로드, MIDI 녹음, Key Editor | 기초 15–20회차 |
| 5 | How to Add Effect Plug-ins to Your Project | Insert 슬롯, 신호 순서, Bypass, Media 탭, 프리셋 | 기초 02·30·31회차 |
| 6 | Save and Export Your First Project | Save / Save As, 버전 관리, Audio Mixdown 설정 | 기초 01·36·37회차 |
| 7 | 5 Essential Tips to Get a Better Mix | 페이더 → 팬 → EQ → 리버브 → 단순하게 | 기초 29·30·31·34회차 / 용어·자료 「믹스 5가지」 |
| 8 | 25 Terms Every Cubase Beginner Should Know | 입문 용어 (원문 기준 26개 항목) | 용어·자료 「용어집」 / 기초 02·03·17·18·33·35회차 |
| 9 | Download Choices and Content Guide | Download Assistant 항목, 기본 악기·샘플 팩 | 용어·자료 「설치·콘텐츠」 / 기초 03·15회차 |

## 정리 메모

- 프로젝트에 `Save and Export Your First Project`가 **두 번** 올라가 있습니다. 하나를 지워도 됩니다.
- 세 심화 트랙(오케스트레이션 · 방송 송출 · 녹음 세팅)의 본문은 프로젝트 지침의 커리큘럼 구조를 따라 새로 작성했습니다. 위 문서들은 그중 기초에 해당하는 부분의 근거로 연결했습니다.
- 기초 42회차의 기준 커리큘럼 원문은 `curriculum/reference.md`에 있습니다.

## 새 컨텍스트를 추가할 때

1. `data/context.js`의 `CG.sources`에 문서를 등록합니다.
2. `CG.context`의 해당 회차 번호 아래에 `{ src, points }`를 추가합니다.
3. `node tests/run.cjs`로 연결이 올바른지 확인합니다.
