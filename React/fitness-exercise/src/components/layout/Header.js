import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex gap-4 items-center bg-slate-200 backdrop-blur-md sm:p-10 h-14 ">
      <div className="flex gap-4">
        <img
          src="https://images.template.net/wp-content/uploads/2014/09/Fitness-One-Logo.jpg"
          className="ml-2 sm:ml-0 h-7 sm:h-10 object-cover"
        />
        <h1 className=" text-[#fdd141] cursor-pointer sm:text-2xl font-bold">
          <span className="text-red-600">
            Fit
            <span className="text-amber-600">
              ne
              <span className="text-yellow-500">
                ss <span className="text-orange-400">One</span>
              </span>
            </span>
          </span>
        </h1>
      </div>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/exercise"}>
        <h1>Exercise</h1>
      </Link>
    </header>
  );
};

export default Header;
