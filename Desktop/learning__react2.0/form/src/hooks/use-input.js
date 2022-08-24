import { useState, useReducer } from "react";
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return { value: "", isTouched: false };
};
const useInput = (validate) => {
  //   const [enteredValue, setEnteredName] = useState("");
  //   const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    value: "",
    isTouched: false,
  });
  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredName(event.target.value);
  };
  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
    // setEnteredValueIsTouched(true);
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const enteredValueIsValid = validate(inputState.value);
  const hasError = !enteredValueIsValid && inputState.isTouched;
  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
