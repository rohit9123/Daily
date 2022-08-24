import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const CartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const Cart = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={CartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const Cancel = () => {
    setIsCheckout(false);
  };
  const Submit = async (userData) => {
    const { Name, Street, Postal, City } = userData;
    const data = await fetch(
      "https://react-http-e25d1-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    cartCtx.clearCart();
  };
  console.log(CartItem);
  return (
    <Modal>
      <div>
        {Cart}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckout && (
          <Checkout cancel={props.handleShowModal} submit={Submit} />
        )}
        {!isCheckout && (
          <div className={classes.action}>
            <button
              className={classes["button--alt"]}
              onClick={props.handleShowModal}
            >
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
