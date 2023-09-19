import { Types } from "./types"

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

export const delTodo = (payload) => {
  return {
    type: Types.DELETE_TODO,
    index: payload,
  }
}

