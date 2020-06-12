import React, { useState } from "react";

export default function MessageForm(props) {
  const [message, setMessage] = useState([]);

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    if (typeof props.onCreateMessage === "function") {
      props.onCreateMessage(message);
    }
    setMessage("");
  };
  // console.log("Creates 2 array", message);
  return (
    <form className="app--form" onSubmit={onSubmitMessage}>
      <input
        className="message--input"
        type="text"
        value={message}
        placeholder="Type a message and send!"
        onChange={onChangeMessage}
      />
      <button className="send--button" type="submit" disabled={!message.length}>
        Send!
      </button>
    </form>
  );
}
