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

    todosReceived: (todos, action) => {
      todos.list = action.payload;
      todos.loading = false;
      todos.lastFetch = Date.now();
    }
  }
})

const { todoAdded } = slice.actions;
export default slice.reducer;

export const todoAdd = todo => todoAdded({
  description: todo,
  resolved: false,
  id: ++lastId,
})

//export const loadTodos = state => state.entities.todos.list same as below

export const loadTodos = createSelector(
  state => state.entities.todos,
  todos => todos.list
);