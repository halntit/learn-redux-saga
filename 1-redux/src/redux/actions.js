import { Types } from "./types"

export const increaseCount = () => {
  return {
    type: Types.INCREASE_COUNT,
  }
}

export const decreaseCount = () => {
  return {
    type: Types.DECREASE_COUNT,
  }
}
