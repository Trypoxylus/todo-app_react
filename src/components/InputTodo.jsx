export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="input TODO"
        value={todoText}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>Add</button>
    </div>
  );
};
