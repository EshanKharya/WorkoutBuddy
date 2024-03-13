import React from "react";
import { Link } from "react-router-dom";

function Workout(props) {
  return (
    <div className="w-4/5 p-6 bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700 mx-5 my-10">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h5>
      <div className="m-5">
        <p className="mb-3 font-normal text-lg text-gray-900 dark:text-gray-300">
          {props.creatorName}
        </p>
        <p className="mb-3 font-normal text-gray-900 dark:text-gray-300">
          Goal: {props.goal}
        </p>
        <div className="mb-3 font-normal text-gray-900 dark:text-gray-400 flex flex-row justify-between">
          <span>Exercises: {props.numExer}</span>
          <span>Saved by: {props.savedBy}</span>
        </div>
      </div>
      <button className="border-0 rounded-md text-lg bg-teal-500 m-5">
        <Link
          to={`/workout-buddy/workout/${props.id}`}
          className="px-3 py-3 flex flex-row"
        >
          View More
          <svg
            className="rtl:rotate-180 w-4 h-3.5 m-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
}

export default Workout;
