import { useState } from "react";
import "./App.css";
import "./style.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  // get input value
  // React Hook Form
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    //define "new" variable
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    //define "new" variable
    //remove the todo
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    //add the todo to complete TODOs
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    //remove the TODO from complete TODOs
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    //add the TODO to incomplete TODOs
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
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
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickComplete(index)}>done</button>
                  <button onClick={() => onClickDelete(index)}>delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">COMPLETE TODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickBack(index)}>back</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
