#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Ensure latest version of website is built
npm run build

# Perform deploy
cd public/
git add .
git commit -m 'Website built'
git push
cd ..

# Update source branch
git add public/
git commit -m 'Website built'
git push
