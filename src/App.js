import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentTime from "./utils/CurrentTime";
import MessageForm from "./components/Message/MessageForm";
import setRandomColor from "./utils/SetRandomColor";
import setRandomName from "./utils/SetRandomName";

function App() {
  const [user, setUser] = useState({
    username: setRandomName(),
    color: setRandomColor(),
  });
  const [newMessage, setNewMessage] = useState([]);
  const [connect, setNewConnect] = useState(null);

  useEffect(() => {
    const connect = new window.Scaledrone("uEBjhOewnG9HhRSy", {
      //uEBjhOewnG9HhRSy
      data: user,
    });
    setNewConnect(connect);
    // eslint-disable-next-line
  }, []);
  if (connect) {
    //Conditional Rendering - state konekcije
    connect.on("open", (error) => {
      if (error) {
        console.log("Error on connecting", error);
      }
      console.log(
        "Connection to Scaledrone established. Welcome " + user.username + "!"
      );

      const chatUser = { ...user };
      user.id = connect.clientId;
      setUser({ chatUser });

      const myRoom = connect.subscribe("observable-room");
      myRoom.on("data", (text, chatUser) => {
        const myMess = newMessage;
        const username = chatUser.clientData.username;
        const color = chatUser.clientData.color;
        const chatID = chatUser.id;
        const time = <CurrentTime />;
        const currentChatUser = chatUser;
        const diversMessages = currentChatUser.id === user.id;
        const className = diversMessages ? "user--message" : "other--message";
        myMess.push({ text, username, color, chatID, time, className });
        setNewMessage([...newMessage, myMess]);
        console.log(newMessage);
      });
    });
  }

  const onNewMessage = (message) => {
    connect.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div>
      <h1 className="app--title">Struna's Chat App</h1>
      <div className="app--wrapper">
        <div className="message--list">
          {newMessage.map((mprop) => (
            <ul className={mprop.className} key={newMessage.indexOf(mprop)}>
              <li className="username">{mprop.username}</li>
              <li className="message" style={{ backgroundColor: mprop.color }}>
                {mprop.text}
                {mprop.time}
              </li>
            </ul>
          ))}
        </div>
        <MessageForm onNewMessage={onNewMessage} />
      </div>
    </div>
  );
}

export default App;
