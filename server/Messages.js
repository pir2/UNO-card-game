
function Welcome (playerName, roomName, admin, capacity, numberOfPlayers){
	const left = capacity - numberOfPlayers;
	const myself = admin === playerName;
	const text = `${playerName}, welcome to the room ${roomName}.
	Click on the circles above for details on the players connected to this room.
	${myself ? `You` : admin} as an administrator can add bots to the room.`;
	return {
		from: {id: 'THE DOCTOR', name: 'System'},
		text
	};
}
function NewPlayer (playerName, left){
	const text = `${playerName} came into the room.
	${left > 1 ? `Waiting for` : `Waiting for`} ${left} ${left > 1 ? `players` : `player`} to start the game.`;
	return {
		from: {id: 'THE DOCTOR', name: 'System'},
		text
	};
}
function NewBot (playerName, left){
	const text = `The administrator added ${playerName} bot to this room.
	${left > 1 ? `Waiting for` : `Waiting for`} ${left} ${left > 1 ? `players` : `player`} to start the game.`
	return {
		from: {id: 'THE DOCTOR', name: 'System'},
		text
	};
}

module.exports = {Welcome, NewPlayer, NewBot};