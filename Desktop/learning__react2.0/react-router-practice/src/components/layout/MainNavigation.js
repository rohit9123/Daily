import classes from "./mainNavigation.module.css";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Qoute</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quotes" activeClassName={classes.active}>
              Add a Qoute
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
