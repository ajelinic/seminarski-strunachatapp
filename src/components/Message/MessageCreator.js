import React, { useEffect, useRef } from "react";

export default function MessageCreator(props) {
  const message = props.newMessage;
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [message]);

  return (
    <div className="message__list">
      {props.newMessage.map((mprop) => (
        <ul className={mprop.className} key={props.newMessage.indexOf(mprop)}>
          <li className="username">{mprop.username}</li>
          <li className="message" style={{ backgroundColor: mprop.color }}>
            {mprop.text}
            <p className="time">{mprop.time}</p>
          </li>
        </ul>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}
