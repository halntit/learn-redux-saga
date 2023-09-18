import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.count += action.payload
    },
    decreaseCount: (state, action) => {
      state.count -= action.payload
    },
  }
});

export const { increaseCount, decreaseCount } = counterSlice.actions;
export default counterSlice.reducer;

