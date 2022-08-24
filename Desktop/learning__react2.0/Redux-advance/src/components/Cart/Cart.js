import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((it) => {
          return (
            <CartItem
              key={it.id}
              item={{
                title: it.title,
                quantity: it.quantity,
                total: it.quantity * it.price,
                price: it.price,
                key: it.id,
              }}
            />
          );
        })}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
