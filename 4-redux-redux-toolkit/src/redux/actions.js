import { Types } from "./types";
import axios from "axios";

export const addTodoAsync = () => async (dispatch) => { // dependency injection
  const number = Math.floor(Math.random() * 100) + 1;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${number}`);
  dispatch(addTodo(res.data.title));
}
