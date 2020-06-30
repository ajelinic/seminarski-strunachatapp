import React from "react";
// import ReactDOM from "react-dom";

class UserList extends React.Component {
  render() {
    const { members } = this.props;
    return (
      <div>{members.map((chatMember) => this.createUserList(chatMember))}</div>
    );
  }

  createUserList(user) {
    return (
      <ul className="online--users" key={user.id}>
        <li
          className="member"
          style={{ backgroundColor: user.clientData.color }}
        >
          {user.clientData.username}
        </li>
      </ul>
    );
  }
}

export default UserList;
