# Next.js 마이그레이션 완료 및 깃 푸시 계획

로컬 테스트가 완료된 Next.js 코드를 기존 포트폴리오 저장소(`project_portfolio`)에 반영하고 GitHub에 푸시합니다.

## 제안된 변경 사항

### [Portfolio Repository]
기존 Vanilla JS 코드를 삭제하고 Next.js 프로젝트 파일로 교체합니다.

#### [MODIFY] [project_portfolio](file:///c:/Users/pca02/Antigravity/project_portfolio)
- 기존 `index.html`, `js/`, `css/` 등 삭제
- `project_nextjs` 내의 모든 파일을 여기로 이동
- `.git` 폴더는 유지하여 기존 원격 저장소 연결 보존

## 실행 순서

1. 기존 `project_portfolio` 폴더 내 파일 정리 (환경 설정 및 `.git` 제외)
2. `project_nextjs`의 모든 파일을 `project_portfolio`로 복사
3. Git Add & Commit: `feat: migrate portfolio to Next.js (App Router)`
4. GitHub push (`main` 브라우저)
5. GitHub Pages 배포 설정 (Static Export 설정 확인)

## 검증 계획

### 자동화 테스트
- `npm run build`를 통한 정적 사이트 생성(SSG) 확인

### 수동 검증
- GitHub Repository Action 탭에서 배포 상태 확인
- 최종 배포된 URL 접속 확인
