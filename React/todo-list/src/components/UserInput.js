import React from "react";
import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import "../sass/userInput.css";

const UserInput = (props) => {
  // const [userInput, setUserInput] = useState("");

  const addData = () => {
    {
      props.userInput && props.onAddItem(props.userInput);
      props.onSetUserInput("");
    }
  };
  return (
    <Card className="container">
      <div className="chidContainer">
        <input
          className="input"
          type="text"
          placeholder="Add work here..."
          onChange={(e) => {
            props.onSetUserInput(e.target.value);
          }}
          value={props.userInput}
        />
        <Button onClick={addData}>Add</Button>
      </div>
    </Card>
  );
};

export default UserInput;
