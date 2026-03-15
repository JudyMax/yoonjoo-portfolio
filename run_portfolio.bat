@echo off
chcp 65001 > nul
echo ==============================================
echo 포트폴리오 웹사이트 실행 준비 중...
echo ==============================================

echo 1. 이력서 PDF 파일을 assets 폴더로 복사합니다.
if not exist "assets" mkdir assets
copy /y "김윤주_경력기술서(2026).pdf" "assets\"

echo.
echo 2. 로컬 서버를 실행합니다...
echo 브라우저 창이 자동으로 열립니다. 종료하려면 이 창을 닫아주세요.
echo.

call npx http-server -c-1 -o
pause
