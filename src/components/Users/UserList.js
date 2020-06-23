import React from "react";

class UserList extends React.Component {
  render() {
    const { members } = this.props;
    return (
      <div>
        {members.map((chatMember) => (
          <ul className="online--users" key={chatMember.id}>
            <li
              className="member"
              style={{ backgroundColor: chatMember.clientData.color }}
            >
              {chatMember.clientData.username}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default UserList;
