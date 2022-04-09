import React from "react";

export default React.createContext({
  isAuthenticated: false,
  user: null,
  token: null,
  login: (user, token) => {},
  logout: () => {},
  showToast: null,
  navigateTo: (path) => {},
});
