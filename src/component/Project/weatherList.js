import React, { Component } from "react";
import Project from "./project";

class WeatherList extends Component {
  render() {
    return (
      <div>
        <Project />
        <div className="container">
          <h2>주제 : 날씨를 보며 작성하는 ToDoList</h2>
        </div>
      </div>
    );
  }
}

export default WeatherList;
