import React from 'react';

const Chat = (props) => {
    function sendMessage(event) {
        if (event.keyCode === 13 && event.target.value !== "") {
            const message = {
                from: props.myName,
                text: event.target.value,
                socketId: props.socketId,
                room: props.roomName
            };
            props.sendMessage(message);
            event.target.value = "";
        }
    }
    return (
        <div className="chat__room">
            <div className="messages">
                {props.messages.map((a, b) => {
                    const clName = a.get("socketId") === props.socketId ? "message myself" : "message";
                    return (
                        <div
                            key={b}
                            className="message-wrapper">
                            <div className={clName}>
                                <div className="from">{a.get('from')}</div>
                                <div className="text">{a.get('text')}</div>
                            </div>
                        </div>)
                })}
            </div>
            <div className="input__">
                <input
                    type="text"
                    name="msg"
                    autoFocus="true"
                    onKeyUp={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;