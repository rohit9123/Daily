import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Header = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLoggedIn);
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  const handleLogin = () => {
    dispatch(authActions.login());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>{login && <a href="/">My Products</a>}</li>
          <li>{login && <a href="/">My Sales</a>}</li>
          <li>
            {!login && <button onClick={handleLogin}>Login</button>}
            {login && <button onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
