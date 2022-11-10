import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useState } from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="font-Josefin">
      <Router>
        <AnimatedRoutes user={user} setUser={setUser} />
      </Router>
      <ToastContainer
        theme="colored"
        autoClose={1500}
        hideProgressBar={true}
        icon={false}
      />
    </div>
  );
}

export default App;
