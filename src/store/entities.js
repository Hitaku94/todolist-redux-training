import { combineReducers } from "redux";
import toDoReducer from "./toDo";

export default combineReducers({
    todos: toDoReducer,
})