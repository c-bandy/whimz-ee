#!/bin/bash
# this file gets run on every push to master

# make sure our dependencies are correct
npm prune
npm install

# build project
ng build --output-path /var/www/html