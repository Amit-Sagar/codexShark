import React, { useEffect, useState } from "react";
import { fullExerciseData } from "../../utils/Data";
import Paginator from "./Paginator";

const Exercises = ({
  exercises,
  setExercises,
  searchData,
  bodyPart,
  setSearchData,
}) => {
  const [end, setEnd] = useState(6);
  const [start, setStart] = useState(0);
  const [page, setPage] = useState({ startPoint: start, endPoint: end });
  const [selectedPage, setSelectedPage] = useState(1);

  // const handleInfiniteScroll = () => {
  //   if (
  //     window.scrollY + window.innerHeight + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setEnd(end + 6);
  //     setStart(start + 6);
  //     setPage({
  //       startPoint: start,
  //       endPoint: end,
  //     });
  //   }
  // };

  useEffect(() => {
    const fetchFullExerciseData = () => {
      setExercises(fullExerciseData);
    };
    fetchFullExerciseData();
    // window.addEventListener("scroll", handleInfiniteScroll);
    // return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page]);

  const newData = !!searchData
    ? exercises
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchData) ||
            item.bodyPart.toLowerCase().includes(searchData) ||
            item.muscleTarget.toLowerCase().includes(searchData) ||
            item.equipmentUsed.toLowerCase().includes(searchData)
        )
        .slice(page.startPoint, page.endPoint)
    : exercises.slice(page.startPoint, page.endPoint);

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h1 className="font-semibold text-4xl">Exercises</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {newData.length ? (
          <>
            {newData.map((exercise, index) => {
              return (
                <div
                  className="border-r-slate-300 border-r-2 mt-4 border-t-slate-300 border-t-2"
                  key={index}
                >
                  <h1 className="text-xs sm:text-lg mt-6 font-medium text-amber-700 capitalize">
                    {exercise.name}
                  </h1>
                  <img src={exercise.image} alt="Exercise" />
                  <div className="flex flex-col gap-4 pb-2 mr-3 ">
                    <h1 className="text-xs sm:text-base sm:bg-slate-300 sm:font-semibold sm:py-1 sm:rounded-md sm:px-2">
                      Body Part:{" "}
                      <span className="font-normal text-blue-600">
                        {exercise.bodyPart}
                      </span>
                    </h1>
                    <h1 className="text-xs sm:text-base sm:bg-slate-300 sm:font-semibold sm:py-1 sm:rounded-md sm:px-2">
                      Muscle Target:{" "}
                      <span className="font-normal text-blue-600">
                        {exercise.muscleTarget}
                      </span>
                    </h1>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div>No result Found</div>
        )}
      </div>
      <Paginator
        currentPage={selectedPage}
        setCurrentPage={setSelectedPage}
        end={end}
        start={start}
        setStart={setStart}
        setEnd={setEnd}
        setPage={setPage}
      />
    </div>
  );
};

export default Exercises;
