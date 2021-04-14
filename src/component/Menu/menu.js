import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="menuList">
        <div className="col">
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </div>
        <div className="col">
          <Link style={{ textDecoration: "none" }} to="/introduce">
            Introduce
          </Link>
        </div>
        <div className="col">
          <Link style={{ textDecoration: "none" }} to="/project/weatherList">
            Project
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
