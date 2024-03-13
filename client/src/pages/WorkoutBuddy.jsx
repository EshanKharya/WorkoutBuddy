import React from "react";
import Workouts from "../components/Workouts";

function WorkoutBuddy() {
  return (
    <div>
      <div className="py-5 px-10 mt-10 mb-6">
        <h1 className="text-6xl">Workout Buddy</h1>
      </div>
      <Workouts />
    </div>
  );
}

export default WorkoutBuddy;
