import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./project.css";

class Project extends Component {
  render() {
    return (
      <div className="container project">
        <div className="col">
          <Link style={{ textDecoration: "none" }} to="weatherList">
            WeatherList
          </Link>
        </div>
        <div className="col">
          <Link style={{ textDecoration: "none" }} to="warThunder">
            WarThunder
          </Link>
        </div>
      </div>
    );
  }
}

export default Project;
