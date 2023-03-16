import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

const UseStateHook = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setUser({
      name: "Faizan",
      email: "faiz@mail.com",
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {isLoggedIn ? (
        <>
          <h1>User name is {user?.name}</h1>
          <h1>User email is {user?.email}</h1>
        </>
      ) : (
        <h4>Welcome Guest</h4>
      )}
    </div>
  );
};

export default UseStateHook;
