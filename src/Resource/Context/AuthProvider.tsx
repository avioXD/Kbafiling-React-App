import React, { useState } from "react";
import AuthContext from "./AuthContext";
import {
  getLocallyAuthenticated,
  getLocalUser,
  getLocalUserToken,
  removeLocalUserToken,
  setLocalUserToken,
} from "./authHelper";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthProvider = (props) => {
  const showToast = toast;
  const [isAuthenticated, setIsAuthenticated] = useState(
    getLocallyAuthenticated()
  );

  const [user, setUser] = useState(getLocalUser());
  const [token, setToken] = useState(getLocalUserToken());
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  const login = (user, token) => {
    setToken(token);
    setLocalUserToken(token);
    setIsAuthenticated(true);
    setUser(getLocalUser());
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
        showToast,
        navigateTo,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
