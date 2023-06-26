import React from "react";
import { Link } from "react-router-dom";
import "../css/WC.css";

const WorkComp = (props) => {
  const {
    imageUrl,
    projTitle,
    loc,
    description,
    projectLink,
    emoji,
    empSize,
    flag,
    tags,
  } = props;
  return (
    <div className="projects">
      <div className="work-1">
        <div className="w1-img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="w1-data">
          <div className="w1-details">
            <div>
              <p>{projTitle}</p>
            </div>
            <div>
              <p>{loc}</p>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <div>
              <span className="view-link">
                <Link to={projectLink} style={{ color: 'black' }}>View Project</Link>
              </span>
            </div>
          </div>
          <div className="pills">
            <div className="emoji">
              <p>{emoji}</p>
              <p className="emp-size">&nbsp;{empSize}</p>
            </div>
            <div className="flag">{flag}</div>
            {tags.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComp;
