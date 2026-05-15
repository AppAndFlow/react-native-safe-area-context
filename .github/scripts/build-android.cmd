@echo off
setlocal
rem subst the workspace to a short drive to avoid Windows MAX_PATH in
rem CMake-generated object file names from autolinked codegen.
subst W: "%GITHUB_WORKSPACE%" || exit /b 1
cd /D W:\example\android || exit /b 1
call gradlew.bat assembleDebug -PnewArchEnabled=%1
