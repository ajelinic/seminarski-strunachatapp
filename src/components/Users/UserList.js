import React from "react";

class UserList extends React.Component {
  render() {
    const { members } = this.props;

    return (
      <div>
        <ul className="online--users">
          {members.map((chatMember) => (
            <li
              key={chatMember.id}
              className="online--member"
              style={{ backgroundColor: chatMember.clientData.color }}
            >
              {chatMember.clientData.username}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
