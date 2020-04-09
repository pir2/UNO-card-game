git pull
cd client && npm install
cd .. && cd server && npm install
screen -S uno-server -X quit
screen -S uno-client -X quit
cd .. && ./start.sh