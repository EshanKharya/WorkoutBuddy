import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const increaseMinute = () => {
    setMinutes((prevMinutes) => prevMinutes + 1);
  };
  const increaseSeconds = () => {
    if (seconds < 59) {
      setSeconds((prevSeconds) => prevSeconds + 1);
    } else {
      increaseMinute();
      setSeconds(0);
    }
  };

  useEffect(() => {
    const timer = setInterval(increaseSeconds, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return (
    <div className="w-2/5 flex flex-col items-center border-2 rounded-md p-6">
      <h2 className="text-xl py-5 text-center">
        Time until component has been rendered:{" "}
      </h2>
      <h1 className="text-2xl py-5 text-center">
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
}

export default Timer;
