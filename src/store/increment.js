import { createSlice, createSelector } from "@reduxjs/toolkit";
import moment from "moment";

const slice = createSlice({
  name: "counter",
  initialState: {
      value: 0,
  },
  reducers: {
    incremented: (count, action) => {
      count.value += 1;
    },

    decremented: (count, action) => {
        count.value -= 1;
    },
  }
})

const { incremented, decremented } = slice.actions;
export default slice.reducer;

export const increment = () => incremented();
export const decrement = () => decremented()

//export const loadTodos = state => state.entities.todos.list same as below

export const startCounter = createSelector(
    state => state.entities.counter,
    counter => counter
  );
