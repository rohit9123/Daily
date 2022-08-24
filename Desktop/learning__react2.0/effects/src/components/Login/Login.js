import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/authContext";
// import { findAllByDisplayValue, render } from "@testing-library/react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      password: state.password,
      isValid: action.value.includes("@"),
      isPasswordValid: state.isPasswordValid,
    };
  }
  if (action.type === "PASSWORD_INPUT") {
    return {
      value: state.value,
      password: action.value,
      isValid: state.isValid,
      isPasswordValid: action.value.length > 6,
    };
  }
  return {
    value: "",
    password: "",
    isValid: false,
    isPasswordValid: false,
  };
};

//use reducer
// const[state,dispatchfn]=useReducer(reducerFn,initialState,initFn);
// state-> state snapshot used in the component re-render
// dispatchfn-> dispatch function used to dispatch the action
// reducerFn-> reducer function A function that is triggered automatically once a action is dispatched
//via dispatchfn it reciver the latest state snaoshot and should return the new state
//initFn-> a function to set the intial state programtically like loading the data from database

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const authctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    password: "",
    isValid: false,
    isPasswordValid: false,
  });
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchEmail({ type: "PASSWORD_INPUT", value: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailState.value, emailState.password);
  };
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && emailState.isPasswordValid);
    }, 500);

    //it is clean up function which will run every time when the useeffect is called
    //expect for the first call
    //for example here we are deleting the last identifier when the useffect is called
    //so that only one function can be running at a time

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, emailState.isPasswordValid]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailState.isPasswordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={emailState.password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
