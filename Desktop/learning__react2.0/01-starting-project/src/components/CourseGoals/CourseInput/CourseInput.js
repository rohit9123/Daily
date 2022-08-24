import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   &label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "black")};
//     background: ${(props) => (props.invalid ? "#ffd7f7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

//inline style have highest priority
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      // console.log(enteredValue.)
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && "invalid"}>
       //we can also use this
      */}
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          // style={{
          //   borderBlock: !isValid ? "red" : "black",
          //   background: !isValid ? "salmon" : "transparent",
          // }}
          // <div className={`form-control ${!isValid?"invalid":""}`} it is use is simple css>
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
