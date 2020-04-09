screen -dmS uno-server node server/app.js
cd client
screen -dmS uno-client npm start --host 0.0.0.0  --disable-host-check
echo uno-game started