import { useState, useEffect } from "react";

function MousePosition() {
  const [mousePos, setMousePos] = useState([0, 0]);

  const logMousePos = (e) => {
    setMousePos([e.clientX, e.clientY]);
    console.log("Mouse Position updated!");
  };

  useEffect(() => {
    console.log("Use Effect Hook called!");
    window.addEventListener("mousemove", logMousePos);
    return () => {
      console.log("Component removed!");
      window.removeEventListener("mousemove", logMousePos);
    };
  });
  // window.addEventListener("mousemove", logMousePos);
  return (
    <h1 className="text-2xl py-5 text-center">
      X: {mousePos[0]} Y: {mousePos[1]}
    </h1>
  );
}

export default MousePosition;
