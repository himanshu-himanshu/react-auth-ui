import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

const Homepage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    setTimeout(() => {
      localStorage.removeItem("user");
      setUser(null);
    }, 500);
  };
  const handleSignup = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, [user, setUser]);

  return (
    <div className="w-full h-screen bg-gray-800">
      <div className="container h-full max-w-7xl mx-auto flex flex-col items-center justify-center space-y-24 py-12 px-6">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-sky-500 font-sacramento tracking-widest">
            Shield.
          </h1>
          <h1 className="text-4xl md:text-5xl text-gray-200">
            Welcome to the family
          </h1>
          <h1 className="text-xl lg:text-2xl text-gray-300 text-center">
            We care for your protection more than anything else. Join us now for
            free.
          </h1>
        </div>
        {user && (
          <Button
            title="Logout"
            dynamicStyle="hover:bg-pink-500 hover:border-pink-500"
            onClick={handleLogOut}
          />
        )}
        {!user && (
          <div className="flex flex-row space-x-8 justify-center items-center">
            <Button
              title="Sign Up"
              link="register"
              dynamicStyle="hover:bg-sky-500 hover:border-sky-500"
              onClick={handleSignup}
            />
            <Button
              title="Log In"
              link="login"
              dynamicStyle="hover:bg-blue-500 hover:border-blue-500"
              onClick={handleLogin}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
