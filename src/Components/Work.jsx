import React, { useEffect, useRef } from "react";
import "../css/Work.css";
import Workcomp from "./WC";
import gsap from "gsap";

const projects = [
  {
    projTitle: "Project Title",
    loc: "Location",
    imageUrl:
      "https://images.pexels.com/photos/2887781/pexels-photo-2887781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectLink: "#",
    emoji: "👨‍💻",
    tags: ["React", "Node", "MongoDB"],
    empSize: "10-50",
    flag: "🇮🇳",
  },
  {
    projTitle: "Project Title",
    loc: "Location",
    imageUrl:
      "https://images.pexels.com/photos/2887781/pexels-photo-2887781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectLink: "#",
    emoji: "👨‍💻",
    tags: ["React", "Node", "MongoDB"],
    empSize: "10-50",
    flag: "🇮🇳",
  },
  {
    projTitle: "Project Title",
    loc: "Location",
    imageUrl:
      "https://images.pexels.com/photos/2887781/pexels-photo-2887781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectLink: "#",
    emoji: "👨‍💻",
    tags: ["React", "Node", "MongoDB"],
    empSize: "10-50",
    flag: "🇮🇳",
  },
  {
    projTitle: "Project Title",
    loc: "Location",
    imageUrl:
      "https://images.pexels.com/photos/2887781/pexels-photo-2887781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectLink: "#",
    emoji: "👨‍💻",
    tags: ["React", "Node", "MongoDB"],
    empSize: "10-50",
    flag: "🇮🇳",
  },
];

const Work = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const customCursor = cursorRef.current;

    const showCursor = () => {
      gsap.to(customCursor, { duration: 0.2, opacity: 1, scale: 1 });
      document.body.style.cursor = "none";
    };

    const hideCursor = () => {
      gsap.to(customCursor, { duration: 0.2, opacity: 0, scale: 0 });
      gsap.to(customCursor, {
        duration: 0.1,
        scale: 0,
        ease: "expo.in",
        onComplete: () => {
          document.body.style.cursor = "auto";
        },
      });
    };

    const updateCursor = (e) => {
      gsap.to(customCursor, {
        duration: 0.5,
        x: e.clientX - 100,
        y: e.clientY - 100,
        ease: "expo.out",
      });
    };

    const projElements = document.querySelectorAll(".proj > div");

    projElements.forEach((element) => {
      element.addEventListener("mouseenter", showCursor);
      element.addEventListener("mouseleave", hideCursor);
    });

    document.addEventListener("mousemove", updateCursor);

    return () => {
      projElements.forEach((element) => {
        element.removeEventListener("mouseenter", showCursor);
        element.removeEventListener("mouseleave", hideCursor);
      });
      document.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div className="Work-main">
      <div className="Work">
        <p className="Work-title">Our Latest Work</p>
      </div>
      <div className="proj">
        {projects.map((project, index) => (
          <Workcomp key={index} {...project} />
        ))}
      </div>
      <div className="custom-cursor" ref={cursorRef} />
    </div>
  );
};

export default Work;