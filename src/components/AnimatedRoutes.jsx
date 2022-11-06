import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Homepage from "../pages/homepage/Homepage";
import Profile from "../pages/Profile";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";

const AnimatedRoutes = ({ user, setUser }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Homepage />} />
        <Route
          path="/profile"
          exact
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          exact
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          exact
          element={<Register user={user} setUser={setUser} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
