import React from "react";

const SearchExercises = () => {
  return (
    <div>
      <div className="flex flex-col mt-10 md:mt-0">
        <h1 className="text-center text-xl sm:text-3xl mb-3 font-bold">
          Awesome Exercises you should know
        </h1>
        <div className="flex justify-center">
          <input
            type="search"
            className="bg-slate-600 text-white p-2 rounded-tl-md rounded-bl-md w-[80%]  focus:outline-none"
            placeholder="search..."
          />
          <button className="border border-amber-600 px-5 py-[7px] rounded-tr-md rounded-br-md hover:bg-amber-600 hover:text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
