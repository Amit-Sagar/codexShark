import React, { useState } from "react";
import Exercises from "../components/home/Exercise-Data/Exercises";
import SearchExercises from "../components/home/Exercise-Data/SearchExercises";
import TopBanner from "../components/home/TopBanner";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <TopBanner />
      <SearchExercises searchData={searchData} setSearchData={setSearchData} />
      <Exercises
        exercises={exercises}
        searchData={searchData}
        setSearchData={setSearchData}
        setExercises={setExercises}
      />
    </div>
  );
};

export default HomePage;
