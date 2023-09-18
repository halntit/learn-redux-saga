import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk(
  'todos/fetchTodo',
  async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res
  }
)
