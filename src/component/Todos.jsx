import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/slices/TodoSlice';
import authService from '../appwrite/auth';
import configService from "../appwrite/config"
// import './Todos.css'; // Import the custom CSS

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails)

  useEffect(() => {
    getCurrentUser();
  }, [])

  let handleAdd = (e) => {
    e.preventDefault();
    if (data) {
      dispatch(addTodo(data));
      
      setData('');
    } else {
      alert("Todos can't be empty");
    }
  };

  const getCurrentUser = async () => {
    try {
      const cu = await authService.getCurrentUser();
      setUserDetails({
        name: cu.name,
        email: cu.email,
        userId: cu.$id,
        createdAt: new Date(cu.$createdAt).toLocaleDateString('en-GB'),
        updateAt : new Date(cu.$updatedAt).toLocaleDateString('en-GB') 
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className='user-info text-center'>
        <h2>Welcome, {userDetails.name}!</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>User ID:</strong> {userDetails.userId}</p>
        <p><strong>Account Created:</strong> {userDetails.createdAt}</p>
        {/* <p><strong>Account Updated:</strong> {userDetails.updateAt}</p> */}
      </div>
      
      <div className='text-center todo shadow mx-auto p-5'>
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
    </div>
  );
}

export default Todos;
