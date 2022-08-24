import classes from "./Checkout.module.css";
import useValidate from "../../hooks/validate";
import { useRef } from "react";

const Checkout = (props) => {
  const handleCancel = () => {
    props.cancel();
  };
  const name = useRef();
  const street = useRef();
  const postal = useRef();
  const city = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const Name = name.current.value;
    const Street = street.current.value;
    const Postal = postal.current.value;
    const City = city.current.value;

    if (
      Name.trim() == "" ||
      Street.trim() == "" ||
      Postal.trim() == "" ||
      City.trim() == ""
    ) {
      return;
    }
    props.submit({ Name, Street, Postal, City });
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={name} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">street</label>
        <input type="text" id="street" ref={street} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">postal Code</label>
        <input type="text" id="postal" ref={postal} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">city</label>
        <input type="text" id="city" ref={city} />
      </div>
      <button>Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default Checkout;
