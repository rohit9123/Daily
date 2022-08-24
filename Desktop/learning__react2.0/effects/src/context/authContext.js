import React, { useEffect, useState } from "react";
//createContext take a default context/state
//Authcontext is the context we will use in our components
//Authcontext  is Wrapper which rap all the components which need to access the context
const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storeData = localStorage.getItem("isLoggedIn");
    if (storeData === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
