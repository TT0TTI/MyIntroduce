import React, { Component } from "react";
import Project from "./project";

class WarThunder extends Component {
  render() {
    return (
      <div>
        <Project />
        <div className="container">
          <h2>주제 : WarThunder(게임)</h2>
        </div>
      </div>
    );
  }
}

export default WarThunder;
