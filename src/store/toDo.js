import { createSlice, createSelector } from "@reduxjs/toolkit";
import moment from "moment";

let lastId = 0;

const initialState = {
  list: [],
  loading: false,
  lastFetch: null
}

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (todos, action) => {
      todos.list.push(action.payload);
    },

    todoFinished: (todos, action) => {
      const index = todos.list.findIndex((todo) => todo.id === action.payload.id)
      todos.list[index].resolved = action.payload.resolved
    },

    todoDeleted: (todos, action) => {
     return todos.list.filter((todo) => todo.id !== action.payload.id)
    }
  }
})

const { todoAdded, todoFinished, todoDeleted } = slice.actions;
export default slice.reducer;

export const todoAdd = todo => todoAdded({
  description: todo,
  resolved: false,
  id: ++lastId,
})

export const todoFinish = (id, resolved) => todoFinished({
  resolved: !resolved,
  id,
})

export const todoDelete = id => todoDeleted({
  id,
})

//export const loadTodos = state => state.entities.todos.list same as below

export const loadTodos = createSelector(
  state => state.entities.todos,
  todos => todos.list,
);

export const finishedTodos = createSelector(
  state => state.entities.todos,
  todos => todos.list.filter((todo) => todo.resolved == true)
)