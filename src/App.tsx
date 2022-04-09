import React, { Fragment } from "react";

import "./App.css";
import { RouteComponent } from "./Resource/Router";
import AuthProvider from "./Resource/Context/AuthProvider";
import AuthContext from "./Resource/Context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <RouteComponent></RouteComponent>
    </AuthProvider>
  );
}

export default App;
