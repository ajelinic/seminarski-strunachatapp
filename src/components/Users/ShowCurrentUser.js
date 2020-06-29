import React from "react";

class ShowCurrentUser extends React.Component {
  render() {
    const { currentUser } = this.props;
    return <div>{currentUser.map((me) => this.createCurrentUser(me))}</div>;
  }

  createCurrentUser(user) {
    return (
      <ul key={user.id}>
        <li className="user" style={{ backgroundColor: user.color }}>
          {user.username}
        </li>
      </ul>
    );
  }
}

export default ShowCurrentUser;
