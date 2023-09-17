import { Types } from "./types"

const initialState = {
  count: 0,
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.INCREASE_COUNT: {
      return {
        count: state.count + 1
      };
    }

    case Types.DECREASE_COUNT: {
      return {
        count: state.count - 1
      };
    }

    default:
      return state
  }
}
