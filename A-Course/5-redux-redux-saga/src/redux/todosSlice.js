import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    "First task"
  ],
  isLoading: false,
  isError: false,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    }
  },
});

export const { deleteTodo, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
