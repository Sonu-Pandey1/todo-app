import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/TodoSlice';
import authService from '../appwrite/auth';
import configService from "../appwrite/config"

function Todos() {
  // const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [post, setPost] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  // console.log(userDetails.name)




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
      getPosts(cu.email)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCurrentUser();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let handleAdd =async (e) => {
    e.preventDefault();
    if (data) {
      try {
      await configService.createPost(data,userDetails.email)
      dispatch(addTodo(data));
      getPosts(userDetails.email) //refresh the todo list with a new todo
      setData('');
      getPosts(userDetails.email)
      } catch (error) {
        console.error('Error in handleAdd:', error);
      }
    } else {
      alert("Todos can't be empty");
    }
  };

 

  const getPosts =async (email)=>{
    try {
      const post = await configService.getPosts(email)
      // console.log('Fetched posts:', post.documents); // Log the fetched posts
      setPost(post.documents)
      
    } catch (error) {
      console.log('Error in getPosts:', error);
    }
  }

  const handleDelete =async (id)=>{
    try {
      const x = await configService.deletePost(id)
    console.log("scussfully deleted :" ,x)
      getPosts(userDetails.email)
    } catch (error) {
      console.log(error)
    }
  }

 

  return (
    <div>
      {userDetails.name   ? <div className='user-info text-center'>
        <h2>Welcome, {userDetails.name}!</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>User ID:</strong> {userDetails.userId}</p>
        <p><strong>Account Created:</strong> {userDetails.createdAt}</p>
        {/* <p><strong>Account Updated:</strong> {userDetails.updateAt}</p> */}
      </div>:<h4 className='text-center mt-5 mb-5 pt-5'>Loading...</h4>}
      
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
       

        {post.length >0 ? <ul className='list-group mt-3'>
          
          {post.map((todo) => (
            <div key={todo.$id}>
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                <span className='todo-text'>{todo.todo}</span>
                <button
                  onClick={() => handleDelete(todo.$id)}
                  className='btn btn-outline-danger btn-sm'
                >
                  Delete
                </button>
              </li>
            </div>
          ))}
        </ul>:<div>Loading....</div>}
      </div>
    </div>
  );
}

export default Todos;
