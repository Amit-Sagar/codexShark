import React from "react";
import { useEffect ,useState } from "react";
import Button from "./components/Button";
import UserInput from "./components/UserInput";
import UserItem from "./components/UserItem";
import "./sass/main.css";

const App = () => {
  const [userItem, setUserItem] = useState([]);
  const [data, setData] = useState(null);

  const addItem = (item) => {
    setUserItem((prevItem) => {
      return [...prevItem, item];
    });
  };

  const deletList = (i) => {
    const delData = userItem.filter((arr, id) => i !== id);
    setUserItem(delData);
  };

  const deleteAll = () => {
    setUserItem([]);
  };

  useEffect(()=>{
    addItem()
    // setData(userItem);
   },[])

console.log(data)
  return (
    <div className="rootContainer">
      <UserInput onAddItem={addItem} />
      {userItem.length && (
        <UserItem userItem={userItem} onDelItem={deletList} />
      )}
      <Button className="rootButton" onClick={deleteAll}>
        Clear
      </Button>
    </div>
  );
};

export default App;
