# 신규 기능 사용자 매뉴얼 초안 작성

## 개요

이 skill은 `querypie/acp` 레포지토리에 신규 기능이 추가되었을 때, 해당 기능의 사용자 매뉴얼 초안을 자동으로 작성하는 워크플로우를 제공합니다.

**수행 결과물:**
- Playwright MCP로 캡처한 스크린샷 (`public/` 경로에 저장)
- 한국어 MDX 초안 파일 (`src/content/ko/` 경로에 생성)
- `_meta.ts` 업데이트

**제약 조건:**
- Dev 서버 URL: `https://nightly.dev.querypie.io` (고정)
- 문서 작성 언어: 한국어 (ko) — 영어/일본어 번역은 `sync-ko-to-en-ja.md` skill로 별도 진행
- 스크린샷 해상도: 1280×800 (기본값)

---

## 사전 요구 사항

1. `querypie/acp` 레포지토리의 feature 커밋 해시 또는 PR 번호
2. `nightly.dev.querypie.io` 접속 가능한 계정 (로그인 필요)
3. Playwright MCP가 활성화된 세션

---

## 워크플로우

### Step 1: 변경사항 분석

대상 레포 (`../acp/base` 또는 사용자가 지정한 경로)에서 변경된 기능을 파악합니다.

```bash
# 최근 feat 커밋 확인
cd <acp-repo-path>
git log --oneline -20 -- apps/front/apps/web/src/pages/ apps/front/apps/web/src/features/

# 특정 커밋의 변경 파일 확인
git show <commit-hash> --stat
```

분석 대상:
- `pages/` 디렉토리: 추가된 화면(라우트) 파악
- `features/` 디렉토리: 기능 컴포넌트 구성 파악
- 커밋 메시지: 기능 이름과 티켓 번호 확인

### Step 2: 문서 경로 설계

분석 결과를 바탕으로 문서 파일 경로를 결정합니다.

**경로 규칙:**
```
src/content/ko/{manual-type}/{feature-section}/{sub-page}.mdx
public/{manual-type}/{feature-section}/{sub-page}/{screenshot-name}.png
```

**매뉴얼 타입 판단:**
- 관리자(Admin) 기능 → `administrator-manual/`
- 사용자(User) 기능 → `user-manual/`

**예시 (KAC Web Client):**
```
src/content/ko/user-manual/kubernetes-access-control/web-client.mdx
public/user-manual/kubernetes-access-control/web-client/{screenshot}.png
```

### Step 3: 스크린샷 캡처

Playwright MCP를 사용해 `nightly.dev.querypie.io`에서 각 화면을 캡처합니다.

#### 3-1. 로그인

```
mcp__plugin_playwright__browser_navigate: https://nightly.dev.querypie.io
→ 로그인 화면에서 계정 입력 (사용자에게 자격증명 확인 요청)
→ 로그인 완료 확인
```

#### 3-2. 각 화면 순서대로 캡처

각 기능 화면에 대해 다음 순서로 캡처합니다:

1. 해당 URL로 이동 (`mcp__plugin_playwright__browser_navigate`)
2. 페이지 로딩 대기 (`mcp__plugin_playwright__browser_wait_for`)
3. 스크린샷 캡처 (`mcp__plugin_playwright__browser_take_screenshot`)
4. 캡처된 이미지를 `public/` 경로에 저장

**스크린샷 파일명 규칙:**
```
{기능명}-{화면명}.png
예: web-client-resource-browser.png
    web-client-resource-detail-overview.png
    web-client-kubectl-terminal.png
```

**주요 캡처 대상 (화면별):**
- 진입점 (목록 화면 또는 홈 화면)
- 주요 인터랙션 화면
- 세부 탭 또는 패널 (탭이 있는 경우 각 탭)
- 설정/옵션 다이얼로그 (있는 경우)

#### 3-3. 스크린샷 저장

캡처된 이미지를 `public/` 경로에 저장합니다.

```
public/user-manual/kubernetes-access-control/web-client/web-client-home.png
public/user-manual/kubernetes-access-control/web-client/web-client-resource-browser.png
public/user-manual/kubernetes-access-control/web-client/web-client-resource-detail.png
...
```

### Step 4: MDX 파일 작성

#### 4-1. 기본 MDX 구조

모든 MDX 파일은 아래 구조를 따릅니다:

```mdx
---
title: '{기능 이름}'
confluenceUrl: ''
---

import { Callout } from 'nextra/components'

# {기능 이름}

### Overview

{기능 한 줄 설명. 사용자가 이 기능으로 무엇을 할 수 있는지 능동태로 작성.}

### {주요 섹션 1}

<figure data-layout="center" data-align="center">
<img src="/user-manual/{섹션}/{파일명}.png" alt="{경로 > 화면명}" width="760" />
<figcaption>
QueryPie Web > {메뉴 경로}
</figcaption>
</figure>

1. 단계별 설명
2. 단계별 설명
```

#### 4-2. 한국어 작성 원칙

`docs/ko-writing-style-guide.md`를 따릅니다. 핵심 규칙:

- **능동태 사용**: `~이 가능합니다` → `~할 수 있습니다`
- **띄어쓰기**: `민감정보` → `민감 정보`
- **간결한 어미**: `클릭하여` → `클릭해`
- **UI 레이블**: 실제 화면의 영문 레이블을 그대로 사용 (번역하지 않음)

#### 4-3. Callout 사용 기준

```mdx
<Callout type="info">
기능 사용에 필요한 사전 조건이나 참고 사항
</Callout>

<Callout type="warning">
주의해야 할 제한 사항이나 부작용
</Callout>
```

#### 4-4. Beta 기능 표기

신규 기능이 Beta인 경우 Overview 아래에 추가:

```mdx
<Callout type="info">
이 기능은 현재 Beta로 제공됩니다.
</Callout>
```

### Step 5: `_meta.ts` 업데이트

새로운 MDX 파일을 네비게이션에 등록합니다.

```typescript
// src/content/ko/user-manual/kubernetes-access-control/_meta.ts
export default {
  'checking-access-permission-list': '',
  'web-client': '',  // ← 신규 추가
}
```

### Step 6: 초안 검토 요청

작성 완료 후 사용자에게 다음 사항 확인을 요청합니다:

1. **스크린샷 확인**: 각 화면이 올바른 상태로 캡처되었는지
2. **기능 설명 정확성**: 동작 방식이 정확히 설명되었는지
3. **누락된 화면**: 문서에 포함해야 할 추가 화면이 있는지
4. **Confluence URL**: 연결할 Confluence 페이지 URL 입력 필요 여부

---

## KAC Web Client 전용 가이드

현재 작업 대상인 KAC Web Client 문서 초안 작성 시 참조하세요.

### 대상 커밋

- `ee454dc` — KAC Web Client 통합 (API, kubepie, infra, frontend)
- `8c6efbd` — audit source metadata 반영

### 화면 목록 및 URL 경로

| 화면 | URL 패턴 | 문서 섹션 |
|------|----------|-----------|
| Connections (역할 선택) | `/kac/connections` | 기존 문서 업데이트 필요 |
| Web Client Home | `/kac/web-client` | 신규 작성 |
| Web Client IDE (리소스 브라우저) | `/kac/web-client/{clusterId}` | 신규 작성 |
| Web Client IDE (명령어 팔레트) | 위와 동일 화면 (하단 패널) | 신규 작성 |
| Web Client IDE (kubectl 터미널) | 위와 동일 화면 (하단 패널) | 신규 작성 |
| Web Client IDE (로그 뷰어) | 위와 동일 화면 (하단 패널) | 신규 작성 |

### 목표 파일 구조

```
src/content/ko/user-manual/kubernetes-access-control/
├── _meta.ts                              ← 'web-client' 항목 추가
├── checking-access-permission-list.mdx  (기존)
└── web-client.mdx                        ← 신규 작성
```

```
public/user-manual/kubernetes-access-control/
├── checking-access-permission-list/     (기존)
└── web-client/                           ← 신규 생성
    ├── web-client-home.png
    ├── web-client-resource-browser.png
    ├── web-client-resource-detail-overview.png
    ├── web-client-resource-detail-relations.png
    ├── web-client-resource-detail-events.png
    ├── web-client-resource-detail-yaml.png
    ├── web-client-command-palette.png
    ├── web-client-kubectl-terminal.png
    └── web-client-log-viewer.png
```

---

## 관련 문서

- **한국어 작성 스타일**: [docs/ko-writing-style-guide.md](/docs/ko-writing-style-guide.md)
- **번역 가이드**: [translation.md](translation.md)
- **커밋 가이드**: [commit.md](commit.md)
- **API 명칭 가이드**: [docs/api-naming-guide.md](/docs/api-naming-guide.md)
