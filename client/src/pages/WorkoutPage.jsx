import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Exercise from "../components/Exercise";

function WorkoutPage() {
  const { id } = useParams();
  const [workout, setWorkout] = useState({});
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [currExercise, setCurrExercise] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/workouts/${id}`);
      setWorkout(res.data);
      console.log(workout);
    } catch (err) {
      console.log(err);
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="py-5 px-10 mt-10 mb-6">
      <h1 className="text-6xl">Workout Buddy</h1>
      <div className="px-20 py-5 flex flex-row items-center">
        <div className="w-2/3">
          {isLoading ? (
            <p>Loading your workout...</p>
          ) : err ? (
            <p>Error loading workout {":("}</p>
          ) : (
            <div>
              <h2 className="text-4xl mb-5">{workout.name}</h2>
              <div>
                <div className="mb-3 flex flex-row items-center">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#14b8a6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        cx="12"
                        cy="6"
                        r="4"
                        stroke="#14b8a6"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <path
                        d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                        stroke="#14b8a6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h3 className="text-2xl ml-3">{workout.creatorName}</h3>
                </div>
                <div className="mb-3 flex flex-row">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#14b8a6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M12 6V12"
                        stroke="#14b8a6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M16.24 16.24L12 12"
                        stroke="#14b8a6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h4 className="text-lg ml-3">{workout.duration} minutes</h4>
                </div>
                <div className="mb-3 flex flex-row">
                  <svg
                    fill="#14b8a6"
                    height="28px"
                    width="28px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 329.996 329.996"
                    xml:space="preserve"
                    stroke="#14b8a6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M264.207,129.996l52.504-65.629c3.603-4.503,4.305-10.671,1.807-15.869c-2.498-5.197-7.754-8.502-13.52-8.502l-125,0.004V15 c0-3.979-1.58-7.794-4.394-10.607C172.791,1.58,168.975,0,164.997,0l-140,0.005c-8.283,0-14.999,6.716-14.999,15v0.009v149.982v150 c0,8.284,6.716,15,15,15s15-6.716,15-15v-135h110v25c0,8.284,6.716,15,15,15h140c5.766,0,11.022-3.305,13.52-8.502 c2.498-5.197,1.796-11.366-1.807-15.869L264.207,129.996z M39.998,149.996V30.004l110-0.004v25v94.996H39.998z M179.998,189.996v-25 V69.999l93.79-0.002l-40.503,50.628c-4.383,5.479-4.383,13.263,0,18.741l40.504,50.629H179.998z"></path>{" "}
                    </g>
                  </svg>
                  <h4 className="text-lg ml-3">{workout.goal}</h4>
                </div>
                <div className="mb-3 flex flex-row">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="-4 0 30 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    fill="#14b8a6"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>bookmark</title>{" "}
                      <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                        sketch:type="MSPage"
                      >
                        {" "}
                        <g
                          id="Icon-Set-Filled"
                          sketch:type="MSLayerGroup"
                          transform="translate(-419.000000, -153.000000)"
                          fill="#14b8a6"
                        >
                          {" "}
                          <path
                            d="M437,153 L423,153 C420.791,153 419,154.791 419,157 L419,179 C419,181.209 420.791,183 423,183 L430,176 L437,183 C439.209,183 441,181.209 441,179 L441,157 C441,154.791 439.209,153 437,153"
                            id="bookmark"
                            sketch:type="MSShapeGroup"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <h4 className="text-lg ml-3">{workout.savedBy}</h4>
                </div>
              </div>
              <div>
                {workout.exercises.map((ex) => (
                  <Exercise
                    key={ex._id}
                    name={ex.name}
                    target={ex.target}
                    duration={ex.duration}
                    duraionUnit={ex.duraionUnit}
                    reps={ex.reps}
                    info={ex.info}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="fixed justify-self-end">
          <h1 className="text-6xl">Timer</h1>
          <button className="border-0 rounded-md text-lg bg-teal-500 m-5">
            Start!
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPage;
