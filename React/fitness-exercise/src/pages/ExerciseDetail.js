import React, { useEffect, useState } from "react";
import ExerciseDetails from "../components/Exercise-Details/ExerciseDetails";
import { exerciseOptions, fetchData } from "../components/utils/Data";
const ExerciseDetail = () => {
  return (
    <div className="bg-Image">
      <div className="w-11/12 mx-auto">
        <h1 className="text-amber-500 text-4xl font-medium border-b-2 pt-10">
          Workout
        </h1>
        <ExerciseDetails />
      </div>
    </div>
  );
};

export default ExerciseDetail;
