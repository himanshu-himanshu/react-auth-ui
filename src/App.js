import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <>
      <Router>
        <div className="font-Josefin">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
