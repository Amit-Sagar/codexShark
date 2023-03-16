import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext?.setUser({
      name: "Faizan",
      email: "faiz@abc.com",
    });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h4>User name is {userContext?.user?.name}</h4>
      <h4>User email is {userContext?.user?.email}</h4>
    </div>
  );
};

export default User;
