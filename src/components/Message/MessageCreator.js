import React from "react";

export default function MessageCreator(props) {
  return (
    <div className="message--list">
      {props.newMessage.map((mprop) => (
        <ul className={mprop.className} key={props.newMessage.indexOf(mprop)}>
          <li className="username">{mprop.username}</li>
          <li className="message" style={{ backgroundColor: mprop.color }}>
            {mprop.text}
            {mprop.time}
          </li>
        </ul>
      ))}
    </div>
  );
}
