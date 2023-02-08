"use client";
import { useEffect, useState } from "react";
import UserData from "../todo/UserData";
import UserInput from "../todo/UserInput";
import Button from "../UI/Button";

const Card = ({ className }) => {
  const [userInput, setUserInput] = useState("");
  const [userItem, setUserItem] = useState([]);

  const addItem = (item) => {
    setUserItem([...userItem, userInput]);
    // setUserItem((prevItem) => {
    //   return [...prevItem, item];
    // });
  };

  const deletList = (i) => {
    const delData = userItem.filter((arr, id) => i !== id);
    setUserItem(delData);
  };

  const deleteAll = () => {
    setUserItem([]);
  };

  useEffect(() => {
    setUserItem(userItem);
  }, [userItem]);

  return (
    <div className={`bg-white rounded-lg mt-10 shadow-md shadow-white w-1/2 ${className}`}>
      <div className="flex flex-col w-11/12 mx-auto mt-4 p-3">
        <UserInput
          onAddItem={addItem}
          userInput={userInput}
          onSetUserInput={setUserInput}
        />
        {userItem.length ? (
          <>
          <UserData userItem={userItem} onDelItem={deletList} />
          <Button className="w-1/2 mt-3 self-center" onClick={deleteAll}>
          Clear
        </Button>
        </>
        ) : (
          <div>
          <h1 className="text-black mt-10 text-center text-lg">No Task.</h1>

          </div>
        )}
        
      </div>
    </div>
  );
};

export default Card;
