import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/store";
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    const item = { title, price, description, id };
    dispatch(cartAction.addItem(item));
  };
  return (
    <li className={classes.item}>
      <Card key={id}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
