# 김윤주 PM 포트폴리오 (Next.js)

신사업 0→1 출시부터 B2B SaaS의 1→N 확장까지, 제품의 End to End를 경험한 올라운더 PM 김윤주의 포트폴리오 사이트입니다.

## 🚀 기술 스택
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS
- **Deployment**: GitHub Pages (via GitHub Actions)

## 📂 주요 구조
- `app/`: 페이지 컴포넌트 (Home, Projects, Resume, Contact)
- `components/`: 공통 UI 컴포넌트 (Header, Layout 등)
- `lib/`: 프로젝트 데이터 (`projects.ts`) 및 유틸리티
- `public/`: 이미지, PDF 에셋

## 🛠 로컬 개발 방법
```bash
npm install
npm run dev
```
브라우저에서 `http://localhost:3000` 접속

## 🚢 배포
`main` 브랜치에 코드를 Push하면 GitHub Actions가 자동으로 빌드하여 GitHub Pages에 배포합니다.
