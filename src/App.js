import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Introduce from "./component/Introduce";
import Menu from "./component/Menu";
import WarThunder from "./component/Project/warThunder";
import WeatherList from "./component/Project/weatherList";

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/introduce" component={Introduce} />
        <Route exact path="/project/weatherList" component={WeatherList} />
        <Route exact path="/project/warThunder" component={WarThunder} />
      </div>
    </Router>
  );
};

export default App;
