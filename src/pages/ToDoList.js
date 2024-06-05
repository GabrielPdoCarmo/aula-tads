import { useState } from "react";

import "./ToDoList.css";



const ListItem = ({ toDoItem }) => {
  return (
    <div
      className="listItem"
      style={toDoItem.done ? { backgroundColor: "#b6ebb5" } : null}
    >
      {toDoItem.name}
    </div>
  );
};

const ToDoList = ({ pageTitle }) => {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClickAddTask = () => {
    if (!inputValue) return;
    setToDoList([...toDoList, { name: inputValue, done: false }]);
    setInputValue("");
  };

  const onClickRemoveTask = () => {
    setToDoList(toDoList.filter((item, index) => index !== 0));
  };

  const toggleCompletion = (task) => {
    setToDoList(
      toDoList.map((item) =>
        item === task ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div>
      <div className="header">
        <h1>{pageTitle}</h1>
      </div>
      <div className="inputContainer">
        <label htmlFor="taskText" className="inputLabel">
          Digite a sua tarefa
        </label>
        <input
          id="taskText"
          name="taskText"
          className="input"
          value={inputValue}
          onChange={onInputChange}
        />
        <button className="addButton" onClick={onClickAddTask}>
          +
        </button>
        <button className="addButton" onClick={onClickRemoveTask}>
          -
        </button>
      </div>
      <div className="list">
        {toDoList.map((toDoItem, index) => (
          <ListItem
            key={index}
            toDoItem={toDoItem}
            toggleCompletion={toggleCompletion}
          />
        ))}

      </div>
    </div>
  );
};

export default ToDoList;