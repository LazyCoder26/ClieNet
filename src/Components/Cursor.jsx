import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const customCursor = cursorRef.current;

    const showCursor = () => {
      gsap.to(customCursor, { duration: 0.3, opacity: 1, scale: 1 });
      document.body.style.cursor = 'none';
    };

    const hideCursor = () => {
      gsap.to(customCursor, { duration: 0.3, opacity: 0, scale: 0 });
      document.body.style.cursor = 'auto';
    };

    const updateCursor = (e) => {
      gsap.set(customCursor, { x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
};

export default Cursor;
