import axios from "axios";

export const fetchTodo = async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.data);
  return res;
};
