#!/bin/bash

cd build
git init
git remote add origin git@github.com:ahmednuaman/santas-call.git
git add .
git commit -a -m 'deploy, yo'
git checkout master
git push origin master -f

echo 'Deployed, yo'
