import Input from "../../UI/input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submiHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (isNaN(enteredAmount) || enteredAmount <= 0) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submiHandler}>
      <Input
        ref={amountInputRef}
        label="Ammount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ADD</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};
export default MealItemForm;
