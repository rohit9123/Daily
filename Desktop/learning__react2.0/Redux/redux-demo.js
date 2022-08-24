const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }

  return {
    counter: state.counter + 1,
  };
};
const store = redux.createStore(counterReducer);
console.log(store.getState());
const counterSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT" });
