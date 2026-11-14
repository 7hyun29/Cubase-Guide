# Cubase Practice Room

Cubase Pro 15 · Windows 한국어 실습실의 전체 소스 프로젝트입니다. 42회차 기초 커리큘럼, 회차별 메모·체크리스트, 완료 확인, 연습 기록, 단축키 기록과 JSON 백업 기능을 포함합니다.

이 저장소는 기존 ChatGPT Site의 라이브 프로젝트 ID와 분리된 내보내기 사본입니다. GitHub에 그대로 올려도 기존 배포 사이트는 변경되지 않습니다.

## 기술 구성

- Node.js 22.13 이상
- pnpm 11.25.0
- React 19 / Next.js 16
- Vinext + Vite
- Cloudflare Workers 런타임
- Cloudflare D1(SQLite) + Drizzle ORM
- TypeScript / Tailwind CSS

정확한 의존성 버전은 `package.json`과 `pnpm-lock.yaml`에 고정되어 있습니다. 화면에서 사용하는 아이콘은 `lucide-react`가 코드로 렌더링하며, 별도 이미지 자산은 `public/favicon.svg`입니다.

## 가장 빠른 로컬 실행

### 1. Node.js와 pnpm 준비

Node.js 22.13 이상을 설치한 뒤 터미널에서 실행합니다.

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
```

### 2. 설치 및 실행

```bash
pnpm install --frozen-lockfile
pnpm dev
```

브라우저에서 <http://127.0.0.1:5173>을 엽니다.

`pnpm dev`는 먼저 로컬 D1 마이그레이션을 적용하고 개발 서버를 시작합니다. 첫 화면에서는 로그아웃 상태로 보일 수 있습니다. 화면의 로그인 버튼을 누르면 로컬 전용 테스트 계정(`seedy@sites.test`)으로 전환되며, 기록 저장 기능을 사용할 수 있습니다. 실제 ChatGPT 계정이나 외부 로그인은 사용하지 않습니다.

로컬 기록은 `.wrangler/state` 아래에 저장됩니다. 도구의 로컬 설정과 로그는 `.sites-runtime`에 저장되며, 두 폴더 모두 Git에서 제외됩니다.

## Windows PowerShell 실행 예시

```powershell
git clone https://github.com/7hyun29/Cubase-Guide.git
cd Cubase-Guide
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

## 검사와 프로덕션 빌드

```bash
pnpm test
pnpm typecheck
pnpm build
```

검사 항목은 다음을 포함합니다.

- 42회차 커리큘럼과 진행 순서
- 명시적 완료 확인과 평가 증빙
- SQLite/D1 영속성
- 사용자별 기록 분리
- 동시 수정 충돌 방지
- TypeScript 타입 검사
- Worker 프로덕션 빌드

빌드 결과는 `dist/`에 생성됩니다. 빌드 후 로컬 Worker를 실행하려면 다음 명령을 사용합니다.

```bash
pnpm start
```

단, `pnpm start`는 ChatGPT Sites의 실제 인증 헤더를 제공하지 않습니다. 저장 동작까지 포함한 독립 로컬 사용에는 `pnpm dev`를 사용하세요.

## 데이터베이스

스키마는 `db/schema.ts`, 초기 마이그레이션은 `drizzle/0000_zippy_vulcan.sql`에 있습니다.

마이그레이션만 다시 적용하려면 다음 명령을 사용합니다.

```bash
pnpm db:local
```

로컬 데이터를 완전히 초기화하려면 개발 서버를 종료한 뒤 `.wrangler/state` 폴더를 삭제하고 `pnpm dev`를 다시 실행합니다. 삭제 전 필요한 기록은 앱의 JSON 내보내기로 백업하세요.

## GitHub 저장소

소스 저장소: <https://github.com/7hyun29/Cubase-Guide>

이 프로젝트는 위 저장소의 루트에 들어 있습니다. 수정 후 변경 사항을 저장하려면 프로젝트 폴더에서 다음을 실행합니다.

```bash
git add .
git commit -m "Update Cubase Practice Room"
git push
```

`.github/workflows/ci.yml`이 포함되어 있어 GitHub Actions에서 테스트, 타입 검사, 빌드를 자동 확인합니다.

## 외부 배포 시 알아둘 점

현재 소스의 운영 인증은 ChatGPT Sites가 주입하는 사용자 헤더를 기준으로 설계되어 있습니다. 따라서 GitHub Pages처럼 서버 코드와 D1을 실행하지 못하는 정적 호스팅에는 그대로 배포할 수 없습니다.

외부에서 독립 운영하려면 다음 두 구성이 필요합니다.

1. Cloudflare Workers와 D1 또는 호환 서버·데이터베이스
2. `app/chatgpt-auth.ts`를 대체할 실제 인증 시스템

연습 WAV 다운로드와 기준 커리큘럼 원문 링크는 원본 사이트의 ChatGPT 개인 라이브러리를 가리킵니다. WAV 원본 파일은 내보낸 ZIP에 포함되어 있지 않으므로, 다른 사람에게 배포하려면 제공 가능한 음원 파일을 별도로 추가하고 링크를 교체해야 합니다. 커리큘럼의 텍스트 사본은 `curriculum/reference.md`에 포함되어 있습니다.

원본 Site와 다시 연결하려면 `.openai/hosting.json`에 해당 Sites 프로젝트의 `project_id`를 추가해야 합니다. 이 내보내기 사본에서는 기존 라이브 사이트를 실수로 덮어쓰지 않도록 그 값을 제거했습니다.

## 주요 폴더

| 경로 | 내용 |
| --- | --- |
| `app/` | 화면, API, 인증 처리 |
| `components/` | 재사용 UI 컴포넌트 |
| `lib/` | 42회차 데이터와 진행 로직 |
| `db/` | Drizzle 데이터베이스 연결·스키마 |
| `drizzle/` | D1/SQLite 마이그레이션 |
| `curriculum/` | 커리큘럼 근거 문서 |
| `public/` | 정적 이미지 자산 |
| `tests/` | 진행·저장·격리 테스트 |
| `worker/` | Cloudflare Worker 진입점 |
| `.openai/` | Sites 호스팅 구성(프로젝트 ID 제외) |

## 원본 기능 범위

- 42개의 순차 기초 레슨과 60분/30분 계획
- 실제 완료 확인 전에는 다음 회차가 열리지 않는 진행 제어
- 메모, 실제 연습 시간, 파일명, 막힌 점, 플러그인 기록
- 41·42회차 독립 재현 평가
- D1 기반 사용자별 저장과 수정 충돌 방지
- 개인 기록 JSON 내보내기

앱은 Cubase 프로젝트 파일을 직접 검사하지 않으며, ChatGPT 대화의 완료 기록을 자동으로 가져오지 않습니다.

Local browser preview has no platform user identity; production supplies verified identity headers behind the private site gate. Do not seed real-user progress for QA.
