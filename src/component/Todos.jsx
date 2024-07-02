import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/slices/TodoSlice';
// import './Todos.css'; // Import custom CSS for additional styling

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  let handleAdd = (e) => {
    e.preventDefault();
    if (data) {
      dispatch(addTodo(data));
      setData('');
    } else {
      alert("Todos can't be empty");
    }
  };

  return (
    <div className='text-center w-25 shadow mx-auto p-5 todo'>
      <h2 className='p-2'>Todos</h2>

      <form onSubmit={handleAdd} className='d-flex justify-content-center'>
        <input
          className='input form-control'
          type='text'
          placeholder='Enter Your Todos...'
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button className='btn btn-outline-info ml-2'>Add</button>
      </form>

      <ul className='list-group mt-3'>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <span className='todo-text'>{todo.text}</span>
              <button
                onClick={() => { dispatch(deleteTodo(todo.id)) }}
                className='btn btn-outline-danger btn-sm'
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
