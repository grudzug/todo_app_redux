import { todoSlice } from "./reducers/todoSlice"
import { userSlice } from './reducers/userSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todoSlice,
    user: userSlice
})
  
export default rootReducer