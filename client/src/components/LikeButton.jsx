import { useState } from "react";

function LikeButton() {
  const initCount = 0;
  const [count, setCount] = useState(initCount);

  const increament = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const increamentBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decreament = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : initCount));
  };

  const reset = () => {
    setCount(initCount);
  };

  return (
    <div className="w-2/5 divide-y border-2 rounded-md p-6">
      <div className="flex flex-row justify-evenly py-5">
        <button
          className="border-0 rounded-md px-6 py-2 text-lg bg-sky-500"
          onClick={increament}
        >
          Like
        </button>
        <button
          className="border-0 rounded-md px-6 py-2 text-lg bg-pink-500"
          onClick={decreament}
        >
          Unlike
        </button>
        <button
          className="border-0 rounded-md px-6 py-2 text-lg bg-sky-900"
          onClick={increamentBy5}
        >
          Love
        </button>
        <button
          className="border-0 rounded-md px-6 py-2 text-lg bg-pink-900"
          onClick={reset}
        >
          Hate
        </button>
      </div>
      <h1 className="text-2xl py-5 text-center">Like Count: {count}</h1>
    </div>
  );
}

export default LikeButton;
