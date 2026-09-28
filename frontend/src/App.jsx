import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateDashboard from "./pages/CandidateDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import Jobs from "./pages/Jobs";
import PostJob from "./pages/PostJob";
import JobDetails from "./pages/JobDetails";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/candidate-dashboard"
          element={<CandidateDashboard />}
        />

        <Route
          path="/recruiter-dashboard"
          element={<RecruiterDashboard />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/jobs/:id"
          element={<JobDetails />}
        />

        <Route
          path="/post-job"
          element={<PostJob />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;