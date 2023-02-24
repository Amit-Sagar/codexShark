import React from "react";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col sm:inline sm:w-[35%] mt-10 md:mt-32 md:ml-40 ">
        <h1 className="text-red-600 font-semibold text-xl">Fitness Club</h1>
        <div>
          <h1 className="text-3xl font-bold">Sweat, Smile</h1>
          <h1 className="text-3xl font-bold">and Repeat</h1>
          <p className="font-medium">Check out the most effectice exercises</p>
        </div>
        <button
          className="border border-amber-600 px-5 py-1 mt-3 hover:bg-amber-600 hover:text-white rounded-md"
          onClick={() => navigate("/exercise")}
        >
          Explore Exercises
        </button>
        <p className="opacity-10 text-[120px] text-orange-900 md:block hidden">
          Exercises
        </p>
      </div>
      <div className="sm:w-[65%] mt-5 sm:mt-0">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg"
          alt="gym image"
          className="sm:rounded-bl-[50px] md:h-[420px] "
        />
      </div>
    </div>
  );
};

export default TopBanner;
