import mealsImage from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>RohitMeals</h1>
        <HeaderCartButton handleShowModal={props.handleShowModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food" />
      </div>
    </>
  );
};
export default Header;
