import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "./actions";

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
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload.data.title);
    });
  }
});

export const { deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
