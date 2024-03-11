import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appointments from "./pages/Appointments";
import ApplyForDoctor from "./pages/ApplyForDoctor";
import { Toaster } from "react-hot-toast";
// import { Protected, Public, Admin } from "./middleware/route";
import React, { lazy, Suspense } from "react";
// import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));
// const Appointments = lazy(() => import("./pages/Appointments"));
// const Doctors = lazy(() => import("./pages/Doctors"));
// const Profile = lazy(() => import("./pages/Profile"));
// const Notifications = lazy(() => import("./pages/Notifications"));
// const ApplyDoctor = lazy(() => import("./pages/ApplyDoctor"));
// const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={
                <Register />
            }
          />
          <Route
            path="/"
            element={<Home />}
          />
          {/* <Route
            path="/doctors"
            element={<Doctors />}
          /> */}
          <Route
            path="/appointments"
            element={
                <Appointments />
            }
          />
          {/* <Route
            path="/notifications"
            element={
              <Protected>
                <Notifications />
              </Protected>
            }
          /> */}
          <Route
            path="/applyfordoctor"
            element={
                <ApplyForDoctor />
            }
          />
          {/* <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <Admin>
                <Dashboard type={"users"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/doctors"
            element={
              <Admin>
                <Dashboard type={"doctors"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/appointments"
            element={
              <Protected>
                <Dashboard type={"appointments"} />
              </Protected>
            }
          />
          <Route
            path="/dashboard/applications"
            element={
              <Protected>
                <Dashboard type={"applications"} />
              </Protected>
            }
          />
          <Route
            path="*"
            element={<Error />}
          /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
