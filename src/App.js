import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentTime from "./components/CurrentTime";
import MessageForm from "./components/Message/MessageForm";
import setRandomColor from "./utils/SetRandomColor";
import setRandomName from "./utils/SetRandomName";

function App() {
  // const [user, setUser] = useState([]);
  const [messageList, setMessageList] = useState([]);
  // const [userList, setUserList] = useState([]);

  const onCreateMessage = (message) => {
    const mSent = {
      message,
      user: {
        username: setRandomName(),
        color: setRandomColor(),
      },
    };
    setMessageList([...messageList, mSent]);
  };

  // const onChangeUsername = (event) => {
  //   setUser(event.target.value);
  // };

  // const onSubmitUser = (event) => {
  //   event.preventDefault();
  //   onCreateUser(user);
  //   setUser("");
  // };
  // const onCreateUser = (user) => {
  //   const mUser = {
  //     user,
  //   };
  //   setUserList([...userList, mUser]);
  // };
  useEffect(() => {
    const drone = new window.Scaledrone("uEBjhOewnG9HhRSy", {
      messData: messageList.user,
    });
    drone.on("open", (error) => {
      if (error) {
        console.log("Error on connecting", error);
      }
      const user = { ...messageList.user };
      user.id = drone.clientId;
      console.log(user);
    });
    const myRoom = drone.subscribe("test-room");
    myRoom.on("data", (messData, user) => {
      const myMess = messageList.message;
    });
  });
  // console.log(drone);

  return (
    <div>
      <h1 className="app--title">Struna's Chat App</h1>
      <div className="app--wrapper">
        <div className="message--list">
          {messageList.map((mprop) => (
            <ul key={messageList.indexOf(mprop)}>
              <li className="username">{mprop.user.username}</li>
              <li
                className="message"
                style={{ backgroundColor: mprop.user.color }}
              >
                {mprop.message}

                <CurrentTime />
              </li>
            </ul>
          ))}
        </div>
        <MessageForm onCreateMessage={onCreateMessage} />
      </div>
      {/* <form className="user--form" onSubmit={onSubmitUser}>
        <input
          className="username--input"
          type="text"
          value={user}
          placeholder="Set your username"
          onChange={onChangeUsername}
        />
        <button className="send--button" type="submit" disabled={!user}>
          Create user!
        </button>
      </form> */}
    </div>
  );
}

export default App;
