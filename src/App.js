import React, { useState, useEffect } from "react";
import "./App.css";
import MessageForm from "./components/Message/MessageForm";
import MessageCreator from "./components/Message/MessageCreator";
import setRandomColor from "./utils/SetRandomColor";
import setRandomName from "./utils/SetRandomName";
import UserList from "./components/Users/UserList";
import ShowCurrentUser from "./components/Users/ShowCurrentUser";

function App() {
  const [user, setUser] = useState({
    username: setRandomName(),
    color: setRandomColor(),
  });
  const [newMessage, setNewMessage] = useState([]);
  const [connect, setNewConnect] = useState(null);
  const [membersList, setMembersList] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const connect = new window.Scaledrone("uEBjhOewnG9HhRSy", {
      data: user,
    });
    setNewConnect(connect);
    // eslint-disable-next-line
  }, []);
  if (connect) {
    connect.on("open", (error) => {
      if (error) {
        console.log("Error on connecting", error);
      }
      const myUser = currentUser;
      myUser.push(user);
      setCurrentUser(myUser);

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
        const time = new Date().toLocaleString("hr-HR");
        const currentChatUser = chatUser;
        const diversMessages = currentChatUser.id === user.id;
        const className = diversMessages ? "user--message" : "other--message";
        myMess.push({ text, username, color, chatID, time, className });
        setNewMessage([...newMessage, myMess]);
      });

      myRoom.on("members", (members) => {
        onMembersList(members);
      });
      myRoom.on("member_join", (member) => {
        onUserJoined(member);
      });
      myRoom.on("member_leave", (id) => {
        onUserLeaving(id);
      });
    });
  }

  const onMembersList = (members) => {
    setMembersList(...membersList, members);
  };
  const onUserJoined = (member) => {
    setMembersList((membersList) => [...membersList, member]);
  };

  const onUserLeaving = (id) => {
    const userIsLeaving = membersList;
    const index = userIsLeaving.map((member) => member.id === id);
    setMembersList((membersList) => {
      const userGone = membersList.slice(index, 1);
      return userGone;
    });
  };

  const onNewMessage = (message) => {
    connect.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div>
      <h1 className="app__title">Struna's Chat App</h1>
      <div className="app__user--sidebar">
        <h2 className="app__online--title">Online Users</h2>
        <h3 className="app__current--user">You:</h3>
        <ShowCurrentUser currentUser={currentUser} />
        <h3 className="app__all--users">All users:</h3>
        <UserList members={membersList} />
      </div>
      <div className="app__wrapper">
        <MessageCreator newMessage={newMessage} />
        <MessageForm onNewMessage={onNewMessage} currentUser={currentUser} />
      </div>
    </div>
  );
}
export default App;
