#!/bin/bash


npm install


npm run build -- --configuration production


cp -a dist/angular-train/. public/