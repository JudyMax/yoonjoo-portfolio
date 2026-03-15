# Next.js 마이그레이션 구현 계획 (Implementation Plan)

포트폴리오 웹사이트를 Vanilla JS에서 **Next.js (App Router)** 기반으로 전환하여 SEO와 크롤러 가시성을 극대화합니다.

## 목표
- **SEO 최적화:** 모든 콘텐츠를 서버 사이드 렌더링(SSR) 또는 정적 생성(SSG)하여 크롤러가 전체 내용을 읽을 수 있도록 개선.
- **컴포넌트 기반 개발:** React를 사용하여 코드 재사용성과 유지보수성 향상.
- **현대적인 스택:** Next.js의 Image 최적화, 메타데이터 API 등을 활용하여 사용자 경험 개선.

## 주요 변경 사항

### 1단계: 프레임워크 구축
- **새 프로젝트 생성:** `npx create-next-app@latest` 명령어를 사용하여 TypeScript, Tailwind CSS(선택), App Router 기반의 환경 구축.
- **기존 자산 이전:** `index.css`를 전역 스타일로 등록하고, 이미지 및 PDF 파일을 `public/` 폴더로 이동.

### 2단계: 데이터 레이어 전환
- `js/data/projects.js` 파일을 Next.js 프로젝트 내의 `src/data/projects.ts` 등으로 이전하여 타입 안정성 확보.

### 3단계: 컴포넌트 마이그레이션 (동일 설계 유지)
- 현재 각 페이지별 JS 파일(`home.js`, `projects.js`, `detail.js` 등)에 있는 템플릿 리터럴을 **React Functional Component**로 1:1 변환합니다.
- **Header/Footer:** `app/layout.tsx`에 공통 컴포넌트로 배치.
- **동적 라우팅:** `app/projects/[slug]/page.tsx`를 통해 개별 프로젝트 상세 페이지 구현.

### 4단계: SEO 및 메타데이터 API
- 각 페이지 상단에 `Metadata` 객체 또는 `generateMetadata` 함수를 사용하여 검색 엔진이 제목, 설명, 썸네일을 완벽하게 인식하도록 설정.

## 배포 계획
- **GitHub Pages:** `output: 'export'` 설정을 통해 정적 사이트로 빌드하여 현재와 동일한 GitHub Pages로 배포 유지.
- **Vercel (권장):** Next.js 개발사인 Vercel에 연결하면 가장 강력한 성능과 미리보기 기능을 자동으로 누릴 수 있습니다 (선택 사항).

## 검증 계획
- **Lighthouse/SEO Audit:** 배포 후 크롤러가 텍스트 콘텐츠를 읽을 수 있는지 검사.
- **라우팅 테스트:** 모든 내부 링크 및 프로젝트 상세 페이지 접근성 확인.
