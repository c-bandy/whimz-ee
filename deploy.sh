#!/bin/bash

## deploy.sh
## this file gets run on every push to master

# make sure our dependencies are correct
npm update
npm install

# build project
ng build --output-path /var/www/html