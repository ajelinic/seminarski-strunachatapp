import React from "react";

class UserList extends React.Component {
  render() {
    const { members } = this.props;

    return (
      <div>
        <ul>
          {members.map((chatMember) => (
            <li
              key={chatMember.id}
              className="user"
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
