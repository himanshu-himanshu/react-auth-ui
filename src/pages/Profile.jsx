import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, []);
  const handleBack = () => {
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <h1
        onClick={() => handleBack()}
        className="text-2xl hover:cursor-pointer"
      >
        Go to home
      </h1>

      <button
        onClick={() => handleLogout()}
        className="text-xl md:text-2xl font-bold border text-pink-500 border-pink-500 px-10 py-5 hover:shadow-lg hover:bg-pink-500 hover:text-white"
      >
        Logout
      </button>
    </>
  );
}

export default Profile;
