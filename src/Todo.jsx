import { useState } from "react";
import "./App.css";
import "./style.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO1", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO1", "TODO2"]);
  // get input value
  // React Hook Form
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="input TODO"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">INCOMPLETE TODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>done</button>
                  <button>delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">COMPLETE TODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>back</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
