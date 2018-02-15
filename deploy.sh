#!/bin/bash
# deploy.sh gets run on every push to master

npm install
ng build --output-path /var/www/html
# ng build --output-path /var/www/html --prod