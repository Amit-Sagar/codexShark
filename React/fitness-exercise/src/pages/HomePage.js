import React, { useState } from "react";
import Exercises from "../components/home/Exercise-Data/Exercises";
import SearchExercises from "../components/home/Exercise-Data/SearchExercises";
import TopBanner from "../components/home/TopBanner";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("All");

  return (
    <div className="w-11/12 mx-auto">
      <TopBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <Exercises
        exercises={exercises}
        searchData={searchData}
        setSearchData={setSearchData}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default HomePage;
