#!/bin/bash

## deploy.sh
# this file gets run on every push to master

# install our dependencies
npm install

# build project
npm run build:universal