#!/usr/bin/env bash
set -euo pipefail

new_arch="${1:-false}"

if [[ "${RUNNER_OS:-}" == "Windows" ]]; then
  script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  cmd //c "$(cygpath -w "$script_dir/build-android.cmd")" "$new_arch"
else
  cd example/android
  ./gradlew assembleDebug -PnewArchEnabled="${new_arch}"
fi
