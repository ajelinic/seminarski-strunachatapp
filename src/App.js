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
        // console.log(newMessage);
      });

      myRoom.on("members", (members) => {
        const roomUsers = membersList.concat(members);
        setMembersList(roomUsers);
      });
      myRoom.on("member_join", (member) => {
        const joinedMembers = [];
        joinedMembers.push(member);
        setMembersList(...membersList, joinedMembers);
      });
      myRoom.on("member_leave", (id) => {
        const goneMembers = membersList;
        const index = goneMembers.findIndex((member) => member.id === id);
        const userGone = goneMembers.splice(index, 1);
        // console.log(leaveMembers, "ako odem prijatelji");
        setMembersList(...membersList, userGone);
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
      <div className="user--sidebar">
        <h2 className="online--title">Online Users</h2>
        <h3 className="online--title">You:</h3>
        <ShowCurrentUser currentUser={currentUser} />
        <h3 className="online--title">Others:</h3>
        <UserList members={membersList} currentUser={currentUser} />
      </div>
      <div className="app--wrapper">
        <MessageCreator newMessage={newMessage} />
        <MessageForm onNewMessage={onNewMessage} currentUser={currentUser} />
      </div>
    </div>
  );
}
export default App;
