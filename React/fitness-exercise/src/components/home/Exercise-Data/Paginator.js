import React from "react";
import Button from "../../UI/Button";

const Paginator = ({
  currentPage,
  setCurrentPage,
  end,
  start,
  setEnd,
  setStart,
  setPage,
}) => {
  const getNextExercise = () => {
    if (end === 42) {
      setEnd(6);
      setStart(0);
      setPage({
        startPoint: start,
        endPoint: end,
      });
      setCurrentPage(1);
    } else {
      setEnd(end + 6);
      setStart(start + 6);
      setPage({
        startPoint: start,
        endPoint: end,
      });
      setCurrentPage(currentPage + 1);
    }
  };

  const getPrevExercise = () => {
    if (start === 0) {
      setEnd(42);
      setStart(36);
      setPage({
        startPoint: start,
        endPoint: end,
      });
      setCurrentPage(7);
    } else {
      setEnd(end - 6);
      setStart(start - 6);
      setPage({
        startPoint: start,
        endPoint: end,
      });
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2 md:gap-5 pt-5 py-8 text-xs md:text-sm cursor-pointer mt-2">
      <Button
        className="text-black hover:bg-fuchsia-900 hover:text-white border-fuchsia-900"
        onClick={getPrevExercise}
      >
        Previous
      </Button>
      <div className="flex flex-row items-start gap-0.5 font-medium text-black">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <div
              key={item + index}
              className={`${
                currentPage === item && "bg-black text-white"
              } flex flex-row items-start justify-center p-2 sm:w-8 sm:h-8 md:h-10 md:w-10 rounded-lg`}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <Button
        className="text-black hover:bg-fuchsia-900 hover:text-white border-fuchsia-900"
        onClick={getNextExercise}
      >
        Next
      </Button>
    </div>
  );
};

export default Paginator;
