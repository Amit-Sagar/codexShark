import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center space-x-10 bg-slate-300 p-6">
      <div>
        <h1>My Expense Tracker</h1>
      </div>
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Header;
