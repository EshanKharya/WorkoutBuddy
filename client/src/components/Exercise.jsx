import React from "react";

function Exercise(props) {
  return (
    <div className="w-4/5 p-6 bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700 mx-5 my-10">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.name}
      </h5>
      <div className="m-5">
        <p className="mb-3 font-normal text-lg text-gray-900 dark:text-gray-300">
          Target: {props.target}
        </p>
        {props.duration && (
          <p className="mb-3 font-normal text-lg text-gray-900 dark:text-gray-300">
            {`${props.duration} ${props.durationUnit}`}
          </p>
        )}
        {props.reps && (
          <p className="mb-3 font-normal text-lg text-gray-900 dark:text-gray-300">
            Reps: {props.reps}
          </p>
        )}
        <h3 className="mb-3 font-normal text-lg text-gray-900 dark:text-gray-300">
          Instructions
        </h3>
        <p className="mb-3 font-normal text-gray-900 dark:text-gray-300">
          {props.info}
        </p>
      </div>
    </div>
  );
}

export default Exercise;
