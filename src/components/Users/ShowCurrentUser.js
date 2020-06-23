import React from "react";

class ShowCurrentUser extends React.Component {
  render() {
    const { currentUser } = this.props;
    return <div>{currentUser.map((me) => this.createUserList(me))}</div>;
  }

  createUserList(user) {
    return (
      <ul className="online--users" key={user.id}>
        <li className="member" style={{ backgroundColor: user.color }}>
          {user.username}
        </li>
      </ul>
    );
  }
}

export default ShowCurrentUser;
