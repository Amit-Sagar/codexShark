import React, { useState } from "react";
import "../App.css";
import TodoList from "./TodoList";
import InputField from "./InputField";
import { Todo } from "../models/Model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  const DragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedTodos;
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={DragEnd}>
      <div className="App flex flex-col items-center bg-white w-[100vw] h-[100vh] ">
        <span className="heading text-rose-900">Taskify</span>
        <div className="w-[96%] mx-auto">
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
