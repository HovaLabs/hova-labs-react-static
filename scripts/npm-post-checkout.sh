#!/bin/bash
HUSKY_GIT_PARAMS_ARRAY=($HUSKY_GIT_PARAMS)

git diff --exit-code ${HUSKY_GIT_PARAMS_ARRAY[0]} ${HUSKY_GIT_PARAMS_ARRAY[1]} -- yarn.lock > /dev/null
if [ ! $? -eq 0 ]; then
    echo "\033[41mPlease run 'yarn install'\033[0m"
else
    echo "Your node modules are up-to-date"
fi
