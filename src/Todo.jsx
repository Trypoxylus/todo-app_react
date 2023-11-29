import './App.css';
import './style.css';

export const Todo = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder='input TODO'></input>
        <button>Add</button>
      </div>
      <div className="incomplete-area">
        <p className='title'>INCOMPLETE TODO</p>
        <ul>
          <li>
            <div className='list-row'>
              <p className='todo-item'>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className='list-row'>
              <p className='todo-item'>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className='complete-area'>
      <p className='title'>COMPLETE TODO</p>
        <ul>
          <li>
            <div className='list-row'>
              <p className='todo-item'>TODOです</p>
              <button>back</button>
            </div>
          </li>
          <li>
            <div className='list-row'>
              <p className='todo-item'>TODOです</p>
              <button>back</button>
            </div>
          </li>
        </ul>
      </div>
    </>
    
  );
}