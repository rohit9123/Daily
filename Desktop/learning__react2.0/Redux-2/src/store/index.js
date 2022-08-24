import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// const reducer = (state = intialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - action.payload,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "TOGGLE_COUNTER") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return {
//     counter: state.counter,
//     showCounter: state.showCounter,
//   };
// };
// const store = createStore(reducer);

// counterSlice.actions.t
// console.log(configureStore.action().decrement());

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
