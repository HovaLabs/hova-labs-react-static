#!/bin/bash
# Stops accidental commits to master and develop. https://gist.github.com/stefansundin/9059706

BRANCH=`git rev-parse --abbrev-ref HEAD`

if [[ "$BRANCH" == "master" || "$BRANCH" == "develop" ]]; then
  echo "You are on branch $BRANCH. Are you sure you want to commit to this branch?"
  exit 1
fi

exit 0
