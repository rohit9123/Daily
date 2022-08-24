import React, { useState } from "react";
import Form from "./Form";
const intialData = [
  { name: "John", age: 30, id: "1" },
  { name: "Sara", age: 25, id: "2" },
  { name: "Bill", age: 35, id: "3" },
];
function App() {
  const [data, setData] = useState(intialData);
  const [modal, setModal] = useState(false);
  const handleSubmit = (data) => {
    setData((prevdata) => {
      return [data, ...prevdata];
    });
  };
  return (
    <>
      <Form handle={handleSubmit} />
      <ul>
        {data.map((person) => {
          return (
            <li key={person.id}>
              {person.name} is {person.age} years old
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
