import React, { useEffect, useRef } from "react";
import "../css/Work.css";
import Workcomp from "./WC";
import gsap from "gsap";

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
        x: e.clientX - 75,
        y: e.clientY - 75,
        ease: "expo.out",
      });
    };

    const imgElement = document.querySelector(".w1-img img");

    imgElement.addEventListener("mouseenter", showCursor);
    imgElement.addEventListener("mouseleave", hideCursor);

    document.addEventListener("mousemove", updateCursor);

    return () => {
      imgElement.removeEventListener("mouseenter", showCursor);
      imgElement.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div className="Work-main">
      <div className="Work">
        <p className="Work-title">Our Latest Work</p>
      </div>
      <Workcomp
        projTitle="Project Title"
        loc="Location"
        imageUrl="https://images.pexels.com/photos/2887781/pexels-photo-2887781.jpeg?auto=compress&cs=tinysrgb&w=1600"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        projectLink="#"
        emoji="👨‍💻"
        tags={["React", "Node", "MongoDB"]}
        empSize="10-50"
        flag="🇮🇳"
      />
      <div className="custom-cursor" ref={cursorRef} />
    </div>
  );
};

export default Work;
