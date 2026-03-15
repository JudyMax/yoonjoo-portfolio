# GitHub 배포 구현 계획 (Implementation Plan)

포트폴리오 웹사이트를 GitHub Pages를 통해 배포하기 위한 세부 계획입니다.

## 사용자 확인/조치 필요 사항
- **Git 설치:** 현재 시스템에 Git이 설치되어 있지 않습니다. [Git for Windows](https://git-scm.com/download/win)에서 설치가 필요합니다.
- **Git 초기 설정:** 설치 후 `git config --global user.name "이름"` 및 `git config --global user.email "이메일"` 설정이 필요합니다.
- **GitHub 리포지토리 생성:** GitHub 사이트에서 새로운 public 리포지토리(`portfolio` 등)를 생성해 주세요.

## 예정된 변경 사항

### [로컬 프로젝트 설정]
#### [NEW] .gitignore
- `.DS_Store`, `node_modules/`, `.tmp/` 등 불필요한 파일 제외 설정

### [Git 워크플로우]
1. `git init` - 저장소 초기화
2. `git add .` - 전체 파일 스테이징
3. `git commit -m "feat: initial portfolio site"` - 첫 커밋 생성
4. `git remote add origin [저장소URL]` - 원격 저장소 연결
5. `git push -u origin main` - 코드 푸시

## 검증 계획
### 자동 테스트
- `git status` 명령으로 모든 파일이 정상적으로 커밋되었는지 확인
### 수동 확인
- GitHub Pages 설정 메뉴에서 배포 URL이 활성화되었는지 확인 후 접속 테스트
