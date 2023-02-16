import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col w-24 h-24 border border-solid border-[#ececec] bg-[#2a2a2a] text-white rounded-xl items-center justify-center">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{year}</div>
      <div className="text-3xl font-bold">{day}</div>
    </div>
  );
};

export default ExpenseDate;
