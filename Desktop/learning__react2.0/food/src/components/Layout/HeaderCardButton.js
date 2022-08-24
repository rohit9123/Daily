import CartIcon from "../cart/CartIcon";
import classes from "../Layout/headerCardButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);
  const numberOfCartItem = cartCtx.items.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  return (
    <button className={classes.button} onClick={props.handleShowModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
