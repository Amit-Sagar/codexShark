import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import { fetchData, exerciseOptions } from "../utils/Data";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [endNumber, setEndNumber] = useState(1);
  const [startNumber, setStartNumber] = useState(0);
  const [totalPage, setTotalPage] = useState({
    start: startNumber,
    end: endNumber,
  });

  const getPrevCard = () => {
    if (startNumber === 0) {
      setEndNumber(10);
      setStartNumber(9);
    } else {
      setEndNumber(endNumber - 1);
      setStartNumber(startNumber - 1);
      setTotalPage({ start: startNumber, end: endNumber });
    }
  };

  const getNextCard = () => {
    if (endNumber === 10) {
      setEndNumber(1);
      setStartNumber(0);
    } else {
      setEndNumber(endNumber + 1);
      setStartNumber(startNumber + 1);
      setTotalPage({ start: startNumber, end: endNumber });
    }
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      const fullExerciseDetail = await fetchData(
        "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
        exerciseOptions
      );
      setExerciseDetail(fullExerciseDetail);
    };

    fetchExerciseData();
  }, [totalPage]);

  console.log(exerciseDetail);

  return (
    <div className="mt-10 p-10">
      {exerciseDetail.slice(totalPage.start, totalPage.end).map((exercise) => {
        return (
          <div
            key={exercise.name}
            className="flex mx-3 bg-slate-400 my-4 p-10 rounded-md"
          >
            <div className="w-[35%] border-r-2">
              <h1 className="text-4xl font-medium text-cyan-900 ">
                {exercise.name}
              </h1>
              <h1 className="text-xl font-medium my-4 text-emerald-teal-900">
                Type:{" "}
                <span className="text-indigo-900 capitalize">
                  {exercise.type}
                </span>
              </h1>
              <h1 className="text-xl font-medium my-4 text-emerald-teal-900">
                Equipment:{" "}
                <span className="text-indigo-900">{exercise.equipment}</span>
              </h1>
              <h1 className="text-xl font-medium my-4 text-emerald-teal-900">
                Muscle:{" "}
                <span className="text-indigo-900">{exercise.muscle}</span>
              </h1>
              <h1 className="text-xl font-medium my-4 text-emerald-teal-900">
                Difficulty:{" "}
                <span className="text-indigo-900">{exercise.difficulty}</span>
              </h1>
            </div>
            <p className="w-[75%] p-4 text-yellow-900 text-lg">
              {exercise.instructions}
            </p>
          </div>
        );
      })}
      <div className="mx-20 flex justify-between">
        <Button
          className="bg-rose-800 hover:bg-rose-900 text-white px-5"
          onClick={getPrevCard}
        >
          Prev
        </Button>
        <Button
          className="bg-rose-800 px-5 hover:bg-rose-900 text-white"
          onClick={getNextCard}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
