import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { MdDeleteForever } from "react-icons/md";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="flex justify-between items-center p-2 my-4 mx-0 bg-[#4b4b4b]">
        <ExpenseDate date={props.date} />
        <div className="flex gap-4 items-end justify-start flex-1">
          <h2 className="text-white text-xl capitalize flex-1 my-0 mx-4">
            {props.title}
          </h2>
          <div className="text-base font-bold text-white bg-[#40005d] border p-2 rounded-xl">
            ${props.amount}
          </div>
          {/* <MdDeleteForever
            className="text-3xl mb-2 hover:text-red-600 cursor-pointer"
            onClick={deleteData}
          /> */}
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
