//use signal  the react to that is custom hook
import { useState, useEffect } from "react";
//useEffect is a hook that runs after the component is rendered
const useCounter = (forwads = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (forwads) setCounter((prevCounter) => prevCounter + 1);
      else setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [forwads]);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  return { counter, increment, decrement, reset };
};
export default useCounter;
