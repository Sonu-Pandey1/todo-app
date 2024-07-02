// import { createSlice ,nenoid} from "@reduxjs/toolkit";
import { createSlice,nanoid } from "@reduxjs/toolkit";

let initialState = {
    todos: [{ id: 1,text:"hellow world"},{ id: 2,text:"khushi "},{ id: 3,text:"pandeynnnnn"}],

}

const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers :{

        addTodo : (state,action)=>{
            const todo ={
                id:nanoid(),
                text : action.payload
            }
            state = state.todos.push(todo);

        },

        deleteTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )

        }

    }
}) ;

export const {addTodo,deleteTodo}  = TodoSlice.actions
export default TodoSlice.reducer;