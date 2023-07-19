import React from "react";
import Status from "./Components/Status";
import Navbar from "./Components/Navbar";
import Story from "./Components/Story";
import "./css/App.css";
import "./css/Navbar.css";
import "./css/index.css";
import "./css/Status.css";
import "./css/Story.css";
import "./css/Work.css";
import "./css/Plans.css";
import "./css/Misc.css";
import Work from "./Components/Work";
import Plans from "./Components/Plans";
import Marquee from "react-fast-marquee";
import Misc from "./Components/Misc";


const App = (props) => {
  return (
    <div className="App">
      <Status />
      <div className="container">
        <Navbar />
        <Story />
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[246, 246, 246]}
        >
        <Plans />
        </Marquee>
        <Work />
        <Misc />
      </div>
    </div>
  );
};

export default App;
