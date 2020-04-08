screen -dmS uno-server node server/app.js
cd client
screen -dmS uno-client npm start
echo uno-game started