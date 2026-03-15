# Next.js 전환 Task

포트폴리오를 SEO 최적화 및 유지보수성 향상을 위해 Next.js 프레임워크로 전환합니다.

- [ ] **1단계: Next.js 프로젝트 초기화**
  - [ ] `npx create-next-app`으로 프로젝트 생성
  - [ ] 기존 CSS 및 Assets 폴더 이전
- [ ] **2단계: 데이터 레이어 마이그레이션**
  - [ ] `js/data/projects.js`를 Next.js에서 사용할 수 있도록 정비
- [ ] **3단계: 컴포넌트 변환 (Vanilla JS -> React)**
  - [ ] `Layout` 컴포넌트 (네비게이션, 푸터) 작성
  - [ ] `Home` 페이지 변환 (`home.js` -> `page.tsx`)
  - [ ] `Projects Hub` 페이지 변환 (`projects.js` -> `page.tsx`)
  - [ ] `Project Detail` 동적 라우팅 구현 (`detail.js` -> `[slug]/page.tsx`)
  - [ ] `Resume` 페이지 변환
- [ ] **4단계: SEO 및 메타데이터 설정**
  - [ ] 각 페이지별 `generateMetadata` 설정
  - [ ] SSR/SSG 옵션 최적화
- [ ] **5단계: 배포 및 검증**
  - [ ] GitHub Actions를 이용한 GitHub Pages 정적 배포 설정
  - [ ] 서버사이드 렌더링(SSR) 결과물 확인 (크롤러 친화성 검증)
