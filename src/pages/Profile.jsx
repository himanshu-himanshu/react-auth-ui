import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Profile({ user, setUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      user &&
      Object.keys(user).length === 0 &&
      Object.getPrototypeOf(user) === Object.prototype
    ) {
      navigate("/login");
    }
  }, []);

  return <div>Profile</div>;
}

export default Profile;
