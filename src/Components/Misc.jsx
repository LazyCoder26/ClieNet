import React from "react";
import trphy from "../assets/trphy.svg";
import yo from "../assets/yo.svg";
import ladder from "../assets/ladder.svg";
import "../css/Misc.css";

const Misc = () => {
  return (
    <div className="misc-main">
      <div className="misc">
        <div className="main-info">
          <div className="us-1">
            <img src={ladder} alt="" />
            <div className="one-info">
              <p className="us-1-title">Seize Success</p>
              <p className="us-1-info">
                Planting success, growing credibility, and reaping a bountiful
                future
              </p>
            </div>
          </div>
          <div className="us-2">
            <img src={trphy} alt="" />
            <div className="two-info">
              <p className="us-2-title">Soar High</p>
              <p className="us-2-info">
                Fueling ambition with a visual identity that propels progress
                and unlocks new horizons
              </p>
            </div>
          </div>
          <div className="us-3">
            <img src={yo} alt="" />
            <div className="three-info">
              <p className="us-3-title">Industry leaders</p>
              <p className="us-3-info">
                Elevate your brand with design mastery, forging a path to
                unrivaled prominence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;
