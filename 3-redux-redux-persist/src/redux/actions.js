import { Types } from "./types";
import axios from "axios";

export const increaseCount = (payload) => {
  return {
    type: Types.INCREASE_COUNT,
    count: payload,
  }
}

export const decreaseCount = (payload) => {
  return {
    type: Types.DECREASE_COUNT,
    count: payload,
  }
}

export const addTodo = (payload) => {
  return {
    type: Types.ADD_TODO,
    data: payload,
  }
}

export const addTodoAsync = () => async (dispatch) => { // dependency injection
  const number = Math.floor(Math.random() * 100) + 1;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${number}`);
  dispatch(addTodo(res.data.title));
}

export const delTodo = (payload) => {
  return {
    type: Types.DELETE_TODO,
    index: payload,
  }
}

