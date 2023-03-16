import React, { useReducer } from "react";
type CounterState = {
  count: number;
};

type UpdateCounter = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetCounter = {
  type: "reset";
};

type CounterAction = UpdateCounter | ResetCounter;

let initialState = { count: 0 };
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const ResetCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Counter: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increase 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrease 10
      </button>
    </div>
  );
};

export default ResetCounter;
