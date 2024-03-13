import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import WorkoutBuddy from "./pages/WorkoutBuddy";
import WorkoutPage from "./pages/WorkoutPage";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/workout-buddy" element={<WorkoutBuddy />} />
            <Route
              path="/workout-buddy/workout/:id"
              element={<WorkoutPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
