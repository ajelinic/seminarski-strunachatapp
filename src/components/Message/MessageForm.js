import React, { useState } from "react";

export default function MessageForm(props) {
  const [message, setMessage] = useState({
    text: "",
  });
  const [isTyping, setUserTyping] = useState([]);

  const onChangeMessage = (event) => {
    const typing = props.currentUser.map((user) => (
      <div key={user.id}>{user.username} is typing...</div>
    ));
    setUserTyping(typing);
    setMessage({ text: event.target.value });
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    if (typeof props.onNewMessage === "function") {
      props.onNewMessage(message.text, isTyping);
    }
    setMessage({ text: "" });
    setUserTyping("");
  };

  return (
    <div>
      <div>{isTyping}</div>
      <form className="app--form" onSubmit={onSubmitMessage}>
        <input
          className="message--input"
          type="text"
          value={message.text}
          placeholder="Type a message and send!"
          onChange={onChangeMessage}
        />
        <button className="send--button" type="submit" disabled={!message.text}>
          Send!
        </button>
      </form>
    </div>
  );
}
