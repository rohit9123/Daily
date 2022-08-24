import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      //emer
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    increaseby5(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
