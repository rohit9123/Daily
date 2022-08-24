import React, { useState } from "react";
import Modal from "./ErrorModal";
const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState({});
  //   const [message]
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setMessage({
        title: "please enter value",
        message: "name and age is required",
      });
      setError(true);
      return;
    } else if (+age < 1) {
      // setError(true);
      setMessage({
        title: "please enter valid age",
        message: "age should be greater than 0",
      });
      setError(true);
      return;
    }
    const newPerson = { name, age, id: Math.random().toString() };
    props.handle(newPerson);
    setName("");
    setAge("");
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const unset = () => {
    setError(false);
    setMessage({});
  };
  return (
    <div>
      {error && (
        <Modal title={message.title} message={message.message} unset={unset} />
      )}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleName} />
        <label>Age</label>
        <input type="number" value={age} onChange={handleAge} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
