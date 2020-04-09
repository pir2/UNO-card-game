screen -dmS uno-server node server/app.js --host 0.0.0.0 --disable-host-check
cd client
screen -dmS uno-client npm start --host 0.0.0.0  --disable-host-check
echo uno-game started