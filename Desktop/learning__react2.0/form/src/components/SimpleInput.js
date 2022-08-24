import { useEffect, useRef, useState } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    nameBlurHandler();
    if (enteredNameIsValid) {
      return;
    }
    resetName();
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Your name is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!enteredNameIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
