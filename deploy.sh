#!/bin/bash

## deploy.sh
# this file gets run on every push to master

# make sure our dependencies are up to date
npm install

# build project
npm run build:universal
