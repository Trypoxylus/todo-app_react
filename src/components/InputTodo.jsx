const style = {
  backgroundColor: "#c6e5d9",
  width: "800px",
  height: "43px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="input TODO"
        value={todoText}
        onChange={onChange}
      ></input>
      <button disabled={disabled} onClick={onClick}>
        Add
      </button>
    </div>
  );
};
