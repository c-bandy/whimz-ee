#!/bin/bash
# deploy.sh gets run on every push to master

npm install
ng build --prod --output-path /var/www/html