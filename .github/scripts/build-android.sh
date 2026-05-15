#!/usr/bin/env bash
set -euo pipefail

new_arch="${1:-false}"

if [[ "${RUNNER_OS:-}" == "Windows" ]]; then
  # GitHub's Windows workspace path (`D:\a\<repo>\<repo>\…`) is ~70 chars
  # before nesting. Combined with autolinked codegen object file names (which
  # encode the full source path), it blows past Windows' 260-char MAX_PATH
  # limit. subst aliases the workspace to a short drive to keep paths short.
  cmd //c "subst W: \"%GITHUB_WORKSPACE%\" && cd /D W:\\example\\android && call gradlew.bat assembleDebug -PnewArchEnabled=${new_arch}"
else
  cd example/android
  ./gradlew assembleDebug -PnewArchEnabled="${new_arch}"
fi
