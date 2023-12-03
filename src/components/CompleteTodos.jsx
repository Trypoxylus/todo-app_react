export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">COMPLETE TODO</p>
      <ul>
        {todos.map((todo, index) => {
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
  );
};
