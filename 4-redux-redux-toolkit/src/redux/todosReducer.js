import { Types } from "./types"

const initialState = {
  todos: [
    "First task"
  ],
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TODO: {
      return {
        todos: [...state.todos, action.data]
      };
    }

    case Types.DELETE_TODO: {
      // const newTodos = [...state.todos];
      // newTodos.splice(action.index, 1);
      // return {
      //   todos: newTodos
      // };
      return {
        todos: state.todos.filter((_, i) => i !== action.index)
      };
    }

    default:
      return state;
  }
}
