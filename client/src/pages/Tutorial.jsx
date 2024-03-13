import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import LikeButton from "../components/LikeButton";
import MousePosContainer from "../components/MousePosContainer";
import NumberList from "../components/NumberList";
import Timer from "../components/Timer";

function Tutorial() {
  return (
    <div>
      <div className="flex flex-row justify-between p-5">
        <h1 className="text-6xl">Tutorial Page</h1>
        <Link
          to="/"
          className="border-0 rounded-md px-6 py-2 text-lg bg-sky-500 max-h-14"
        >
          Back to Home
        </Link>
      </div>
      <div className="container flex flex-col my-10 items-center bg-zinc-800 min-h-screen p-10">
        <h1 className="text-4xl m-8">Like Counter Component</h1>
        <LikeButton />
        <h1 className="text-4xl m-8">Form Component</h1>
        <Form />
        <h1 className="text-4xl m-8">Number List Component</h1>
        <NumberList />
        <h1 className="text-4xl m-8">Mouse Position Component</h1>
        <MousePosContainer />
        <h1 className="text-4xl m-8">Timer</h1>
        <Timer />
      </div>
    </div>
  );
}

export default Tutorial;
