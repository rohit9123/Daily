import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const [validForm, setValidForm] = useState(false);
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    isValid: LastNameIsValid,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validForm) {
      return;
    }
    resetEmail();
    resetName();
    resetLastName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && <p>please enter first name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p>please enter last name</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p>please enter email</p>}
      </div>
      <div className="form-actions">
        <button
          disabled={!emailIsValid || !LastNameIsValid || !enteredNameIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
