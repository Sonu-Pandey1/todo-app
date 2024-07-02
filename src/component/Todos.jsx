import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from "../redux/slices/TodoSlice"

function Todos() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  // console.log(todos)
  const [data, setData] = useState("")
  // const [data2, setData2] = useState("")
  // console.log(data2)

  let handleAdd = (e) => {
    e.preventDefault()
    if (data) {
      dispatch(addTodo(data))
      setData("")
    }
    else (
      alert("todos can`t empty")
    )

  }




  return (
    <div className=' text-center w-25 shadow mx-auto p-5 todo  '>
      <h2 className='p-2'>Todos</h2>

      <form onSubmit={handleAdd} className=' d-flex justify-content-center' >
        <input className='input form-control' type="text" placeholder=' Enter Your Todos....' value={data} onChange={(e) => setData(e.target.value)} />
        <button className='btn btn-outline-info ml-2'>Add</button>
      </form>

      <ul className="list-group mt-3 " >
        {
          todos.map((todos) => (
            <div key={todos.id}>
              <li className=' list-group-item'>{todos.text}
                <button onClick={() => { dispatch(deleteTodo(todos.id)) }} className='btn btn-outline-danger btn-sm float-right' >Delete</button>
              </li>
            </div>
          ))
        }

      </ul>
    </div>
  )
}

export default Todos;
