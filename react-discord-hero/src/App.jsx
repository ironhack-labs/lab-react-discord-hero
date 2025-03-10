// src/App.jsx
import './App.css';
import React from "react";
import logo from "./assets/logo.png";
import background from "./assets/background.png";
import icon from "./assets/icon.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt = "logo" className="logo"/>
      <img src={icon} alt = "icon" className="icon"/>
      <h1 className="header">IMAGINE A PLACE...</h1>;
      <img src={background} alt = "background" className="background"/>
      <p className="paragraph">
      ...where you can belong to a school club, a gaming group, or
      a worldwide community.Where just you and a handful of friends spend time togather.A place that makes it easy to talk every day and hang
      out more often.
    </p>

    </div>

  );
}

export default App;