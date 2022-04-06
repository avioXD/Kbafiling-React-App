import React from "react";

export default React.createContext({
  isAuthenticated: false,
  user: {},
  token: null,
  login: (user, token) => {},
  logout: () => {},
});
