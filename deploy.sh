git stash
git pull
cd client && npm install && npm run-script build
cd .. && cd server && npm install
screen -S uno -X quit
cd .. && chmod +x *.sh
./start.sh