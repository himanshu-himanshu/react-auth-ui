import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <>
      <Router>
        <div className="font-Josefin">
          <Routes>
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
        </div>
      </Router>
    </>
  );
}

export default App;
