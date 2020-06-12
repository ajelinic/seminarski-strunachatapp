import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentTime from "./components/CurrentTime";
import MessageForm from "./components/Message/MessageForm";
import setRandomColor from "./utils/SetRandomColor";
import setRandomName from "./utils/SetRandomName";

function App() {
  const [user, setUser] = useState({
    username: setRandomName(),
    color: setRandomColor(),
  });
  const [messageList, setMessageList] = useState([]);
  // const [userList, setUserList] = useState([]);

  const onCreateMessage = (message) => {
    const mSent = {
      message,
    };
    setMessageList([...messageList, mSent]);
  };

  // console.log(messageList);
  // console.log(user.username);

  // useEffect(() => {
  //   const drone = new window.Scaledrone("uEBjhOewnG9HhRSy", {
  //     data: user,
  //   });

  //   drone.on("open", (error) => {
  //     if (error) {
  //       console.log("Error on connecting", error);
  //     }
  //     const chatUser = { ...user };
  //     user.id = drone.clientId;
  //     console.log(chatUser);
  //   });
  // const myRoom = drone.subscribe("test-room");
  // myRoom.on("data", (data, chatUser) => {
  //   const myMess = messageList.message;
  // });
  // });

  return (
    <div>
      <h1 className="app--title">Struna's Chat App</h1>
      <div className="app--wrapper">
        <div className="message--list">
          {messageList.map((mprop) => (
            <ul key={messageList.indexOf(mprop)}>
              <li className="username">{user.username}</li>
              <li className="message" style={{ backgroundColor: user.color }}>
                {mprop.message}

                <CurrentTime />
              </li>
            </ul>
          ))}
        </div>
        <MessageForm onCreateMessage={onCreateMessage} />
      </div>
    </div>
  );
}

export default App;
