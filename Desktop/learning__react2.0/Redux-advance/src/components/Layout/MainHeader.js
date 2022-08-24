import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";

import { modalAction } from "../../store/store";
const MainHeader = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalAction.flip());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li onClick={handleClick}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
