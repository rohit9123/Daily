import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increase());
  };
  const increseHandler = () => {
    dispatch(counterActions.increaseby5(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={increseHandler}>INCREMENT BY 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
