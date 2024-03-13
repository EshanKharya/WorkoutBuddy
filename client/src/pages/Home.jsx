import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container min-h-screen py-10 flex flex-col justify-evenly items-center">
      <h1 className="text-6xl">Home</h1>
      <div className="w-1/2 flex flex-row justify-evenly">
        <Link
          to="/tutorial"
          className="border-0 rounded-md px-6 py-2 text-lg bg-sky-500"
        >
          Tutorial
        </Link>
        <Link
          to="/workout-buddy"
          className="border-0 rounded-md px-6 py-2 text-lg bg-pink-500"
        >
          Workout Buddy
        </Link>
      </div>
    </div>
  );
}

export default Home;
