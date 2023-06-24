import React from "react";
import Status from "./Components/Status";
import Navbar from "./Components/Navbar";
import Story from "./Components/Story";
import "./css/App.css";
import "./css/Navbar.css";
import "./css/index.css";
import "./css/Status.css";
import Work from "./Components/Work";

const App = (props) => {
  return (
    <div className="App">
      <Status />
      <div className="container">
        <Navbar />
        <Story />
        <Work />
      </div>
    </div>
  );
};

export default App;
