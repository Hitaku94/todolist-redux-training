import { combineReducers } from "redux";
import toDoReducer from "./toDo";
import counterReducer from "./increment";

export default combineReducers({
    todos: toDoReducer,
    counter: counterReducer
})