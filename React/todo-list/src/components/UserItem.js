import React, { useEffect } from "react";
import Card from "./Card";
import "../sass/userItem.css";

const UserItem = (props) => {
  const delItem = (index) => {
    props.onDelItem(index);
  }
  
  return (
    <Card className="cardContent">
      <ul className="userContainer">
        {props.userItem.map((items, id) => {
          return (
            <div className="todo_style" key={id}>
              <li className="userList">{items}</li>
              <i
                className="fa-solid fa-trash-can"
                onClick={() => {
                  delItem(id);
                }}
              ></i>
            </div>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserItem;
