import React, { useState } from "react";

export default function MessageForm(props) {
  const [message, setMessage] = useState({
    text: "",
  });

  const onChangeMessage = (event) => {
    setMessage({ text: event.target.value });
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    if (typeof props.onNewMessage === "function") {
      props.onNewMessage(message.text);
    }
    setMessage({ text: "" });
  };
  // console.log("Creates 2 array", message);
  return (
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
  );
}
