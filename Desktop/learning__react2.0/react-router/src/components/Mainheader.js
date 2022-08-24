import { NavLink, Link } from "react-router-dom";
//Link help us to by not sending the new request we manually change the link by ourself it change the link for us
//NavLink is a component that renders a link when the path matches the current URL
import classes from "./Mainheader.module.css";
const Mainheader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Mainheader;
