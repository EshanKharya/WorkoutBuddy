import React, { useState } from "react";
import MousePosition from "./MousePosition";

function MousePosContainer() {
  const [display, setDisplay] = useState(1);

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="w-2/5 flex flex-col items-center border-2 rounded-md p-6">
      {display && <MousePosition />}
      <button
        className={`border-0 rounded-md px-6 py-2 text-lg ${
          display ? "bg-pink-900" : "bg-sky-900"
        }`}
        onClick={toggleDisplay}
      >
        Toggle Mouse Logger
      </button>
    </div>
  );
}

export default MousePosContainer;
