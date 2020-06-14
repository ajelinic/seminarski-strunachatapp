import React from "react";

class CurrentTime extends React.Component {
  state = {
    currentTime: new Date().toLocaleString("hr-HR"),
  };

  render() {
    return (
      <div>
        <p className="time">{this.state.currentTime}</p>
      </div>
    );
  }
}

export default CurrentTime;
