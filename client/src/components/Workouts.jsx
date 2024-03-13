import { useState, useEffect } from "react";
import axios from "axios";
import Workout from "./Workout";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [count, setCount] = useState(0);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/workouts");
      console.log(res.data);
      setWorkouts(res.data.workouts);
      setCount(res.data.count);
    } catch (err) {
      console.log(err);
      setErr(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // axios
    //   .get("http://localhost:5000/workouts")
    //   .then((res) => {
    //     console.log(res.data);
    //     setWorkouts(res.data.workouts);
    //   })
    //   .catch(err);
  }, []);
  return (
    <div className="w-1/2 px-20 py-5">
      {isLoading ? (
        <p>Loading workouts...</p>
      ) : err ? (
        <p>Error fetching workouts: {err.message}</p>
      ) : (
        <div className="px-4">
          <h2 className="text-4xl mb-2">
            Number of workouts as of now - {count}
          </h2>
          <p>Add more and increase our community!</p>
          {workouts.map((workout) => (
            <Workout
              key={workout._id}
              id={workout._id}
              name={workout.name}
              creatorName={workout.creatorName}
              numExer={workout.exercises.length}
              savedBy={workout.savedBy}
              goal={workout.goal}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Workouts;
