# Cubase Guide · Practice Room

Cubase Pro 15 학습용 인터랙티브 가이드입니다. 서버·로그인·빌드 과정 없이 브라우저에서 바로 열리는 정적 사이트입니다.

- **공통 기초 42회차** — 회차별 실습 단계, 완료 기준, 메모, 60분/30분 계획, 순차 잠금, 41·42회차 독립 재현 평가
- **Steinberg 튜토리얼 보강** — 프로젝트 컨텍스트 문서 9종의 요점을 해당 회차에 연결
- **심화 트랙 3종** — 미디 오케스트레이션 / 방송·실시간 송출 / 보컬·악기 녹음 세팅. 단계별 메뉴 경로와 수치, 실습 체크포인트, 신호 흐름 다이어그램, 문제 해결(FAQ)
- **Windows / macOS 단축키 전환**, 오디오 인터페이스(루프백 지원/미지원) 맞춤 라우팅
- **단축키 노트**, **용어집 · 믹스 5가지 · 설치 콘텐츠 가이드**, **학습 기록**(JSON 내보내기·가져오기)

## 실행

`index.html`을 브라우저로 열면 됩니다. 설치할 것이 없습니다.

## GitHub Pages로 배포

1. 저장소 **Settings → Pages**
2. **Source: Deploy from a branch**, Branch: `main` / `/ (root)` 선택 후 Save
3. 잠시 뒤 `https://7hyun29.github.io/Cubase-Guide/` 에서 열립니다.

## 기록 저장 방식

진행 기록은 **이 브라우저의 localStorage**에만 저장됩니다. 계정이나 서버가 없으므로:

- 브라우저 데이터를 지우면 기록도 사라집니다 → 「학습 기록」에서 주기적으로 JSON으로 내보내세요.
- 다른 PC·브라우저에서는 내보낸 JSON을 가져오면 이어서 진행할 수 있습니다.
- 이전 Practice Room(ChatGPT Sites 버전)에서 내보낸 JSON도 가져올 수 있습니다.

## 폴더 구조

| 경로 | 내용 |
| --- | --- |
| `index.html` | 진입점 |
| `assets/app.js` | 화면 로직 |
| `assets/store.js` | 진행 규칙(순서 잠금·완료 확인·평가)과 브라우저 저장 |
| `assets/styles.css`, `assets/icons.js` | 다크 테마, 인라인 아이콘 |
| `assets/audio/01_Keys_Practice.wav` | 01회차 연습 음원(8초, 120 BPM, 4마디). 새로 합성한 파일입니다 |
| `data/lessons.js` | 기초 42회차 본문·단축키·공식 자료 링크 |
| `data/context.js` | 회차별 튜토리얼 보강 |
| `data/tracks.js` | 심화 트랙 3종 |
| `data/reference.js` | 용어집, 믹스 5가지, 설치·콘텐츠 가이드 |
| `context/README.md` | 컨텍스트 문서 색인 |
| `curriculum/reference.md` | 기초 커리큘럼 기준 문서 |
| `tests/run.cjs` | 데이터·진행 규칙 검사 |

## 내용 수정

본문은 모두 `data/` 아래 파일에 있습니다. 문장 안에서 `` `메뉴 경로` ``, `[[Ctrl+S]]`, `**강조**` 표기를 쓸 수 있고, 단축키는 Windows 기준으로 적으면 화면에서 macOS 표기로 전환됩니다.

수정 후 검사:

```bash
node tests/run.cjs
```

GitHub Actions(`.github/workflows/ci.yml`)가 푸시할 때마다 같은 검사를 실행합니다.

## 이전 버전

Next.js + Cloudflare Workers/D1 기반의 이전 버전은 이 저장소의 첫 커밋(`c8de011`)에 남아 있습니다.

## 알아둘 점

- 앱은 Cubase 프로젝트 파일을 검사하지 않습니다. 완료 기록은 사용자가 직접 확인한 보고입니다.
- 메뉴 이름은 Cubase Pro 영문 UI 기준입니다. 버전에 따라 위치가 다를 수 있으니 공식 매뉴얼 링크를 함께 확인하세요.
- 비공식 학습 노트입니다. Cubase는 Steinberg Media Technologies GmbH의 상표입니다.
