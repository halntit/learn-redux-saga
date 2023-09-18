import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    "First task"
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoAsync: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    }
  }
});

export const { addTodoAsync, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
