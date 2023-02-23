import React, { useEffect, useState } from "react";
import { fullExerciseData } from "../../utils/Data";

const Exercises = ({ exercises, setExercises, searchData, setSearchData }) => {
  useEffect(() => {
    const fetchFullExerciseData = () => {
      setExercises(fullExerciseData);
    };
    fetchFullExerciseData();
  }, []);

  const newData = !!searchData
    ? exercises
        .filter((item) => item.name.toLowerCase().includes(searchData))
        .filter((item) => item.bodyPart.toLowerCase().includes(searchData))
        .filter((item) => item.muscleTarget.toLowerCase().includes(searchData))
        .filter((item) => item.equipmentUsed.toLowerCase().includes(searchData))
    : exercises;

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h1 className="font-semibold text-4xl">Exercises</h1>
      <div className="grid grid-cols-3">
        {newData.length ? (
          <>
            {newData.map((exercise, index) => {
              return (
                <div className="" key={index}>
                  <h1 className="mt-6 font-medium text-amber-700">
                    {exercise.name}
                  </h1>
                  <img src={exercise.image} alt="Exercise" />
                  <div></div>
                </div>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Exercises;
