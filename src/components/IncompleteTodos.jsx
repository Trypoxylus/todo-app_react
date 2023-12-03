export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">INCOMPLETE TODO</p>
      <ul>
        {todos.map((todo, index) => {
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
  );
};
