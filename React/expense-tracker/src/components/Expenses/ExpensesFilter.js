import React from "react";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="text-white py-0 px-4">
      <div className="flex w-full items-center justify-between my-4 mx-0">
        <label className="font-bold mb-2">Filter by year</label>
        <select
          className="font-inherit text-black bg-slate-400 py-2 px-12 font-bold rounded-md"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
