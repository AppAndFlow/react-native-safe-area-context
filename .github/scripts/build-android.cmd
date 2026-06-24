@echo off
setlocal
rem subst the example app to a short drive to avoid Windows MAX_PATH in
rem CMake-generated object file names from autolinked codegen.
subst W: "%GITHUB_WORKSPACE%\example" || exit /b 1
cd /D W:\android || exit /b 1
call gradlew.bat assembleDebug -PnewArchEnabled=%1
