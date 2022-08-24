import { useState } from "react";

const useValidate = (validInput) => {
  const [input, setInput] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const notvalid = !validInput(input) && isTouch;
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleTouch = () => {
    setIsTouch(true);
  };
  const reset = () => {
    setInput("");
    setIsTouch(false);
  };
  return {
    input,
    isTouch,
    notvalid,
    handleInput,
    handleTouch,
    reset,
  };
};
export default useValidate;
