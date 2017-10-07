#!/usr/bin/env bash
echo '===========Clear Ports=============='
sudo fuser -k 80/tcp
sudo fuser -k 5000/tcp

echo '===========Set UP Redis=============='
sudo service redis_6379 start

echo '===========Service Server=============='
cd ./PCodes-server
sudo npm install
sudo node server.js &

echo '===========Build Front=============='
cd ../PCodes-front
sudo npm install
#sudo ng build

echo '===========Service Executor=============='
cd ../Executor
pip install -r requirements
python executor_server.py &


echo "==========  done  =============="



