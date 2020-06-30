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

  return (
    <div>
      <form className="message__form" onSubmit={onSubmitMessage}>
        <input
          className="message__input"
          type="text"
          value={message.text}
          placeholder="Type a message and send!"
          onChange={onChangeMessage}
        />
        <button
          className="message__button--send"
          type="submit"
          disabled={!message.text}
        >
          Send!
        </button>
      </form>
    </div>
  );
}
