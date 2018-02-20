#!/bin/bash

## deploy.sh
# this file gets run on every push to master

# make sure our dependencies are up to date
npm update

# build project
ng build --prod

# prepare our directory
rm -rf /var/www/html/www.whimz.ee/
cp -R dist /var/www/html/www.whimz.ee