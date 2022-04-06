import React, { useState } from "react";
import AuthContext from "./AuthContext";
import {
  getLocallyAuthenticated,
  getLocalUser,
  getLocalUserToken,
  removeLocalUserToken,
  setLocalUserToken,
} from "./AuthStore";

const Provider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    getLocallyAuthenticated()
  );
  const [user, setUser] = useState(getLocalUser());
  const [token, setToken] = useState(getLocalUserToken());

  const login = (user, token) => {
    setUser(user);
    setToken(token);
    setLocalUserToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser({});
    setToken(null);
    removeLocalUserToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default Provider;
