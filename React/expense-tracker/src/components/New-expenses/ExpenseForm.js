import React, { useState } from "react";

const ExpenseForm = (props) => {
  // const date = new Date();
  // console.log(date);
  // const month = date.getMonth();
  // console.log(month);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div>
          <label className="block font-bold mb-2">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            className="p-2 rounded-md border border-solid border-[#ccc] w-[20rem] max-w-full"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            className="p-2 rounded-md border border-solid border-[#ccc] w-[20rem] max-w-full"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Date</label>
          <input
            type="date"
            min="2019-01-01"
            // max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            className="p-2 rounded-md border border-solid border-[#ccc] w-[20rem] max-w-full"
          />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
