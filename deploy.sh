#!/bin/bash

cd build
git init
git remote add origin git@github.com:ahmednuaman/santas-call.git
git add .
git commit -a -m 'deploy, yo'
git checkout -b gh-pages
git push origin gh-pages -f

echo 'Deployed, yo'
