import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/authContext";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authctx = useContext(AuthContext);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", 1);
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  // useEffect(() => {
  //   if (localStorage["isLoggedIn"] === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  return (
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    // >
    <>
      <MainHeader />
      <main>
        {!authctx.isLoggedIn && <Login />}
        {authctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
