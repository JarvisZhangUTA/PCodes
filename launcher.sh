#!/usr/bin/env bash
fuser -k 80/tcp
fuser -k 5000/tcp
service redis redis_6379 start

cd ./PCodes-server
npm install
pm2 start server.js &

cd ../PCodes-front
npm install
ng build

cd ../Executor
pip install -r requirements
python executor_server.py &


echo "==========  done  =============="



