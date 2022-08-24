import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const item = useSelector((state) => state.cart.items);
  const items = [...item];
  const quantity = items.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
  }, 0);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
