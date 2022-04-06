import React, { Fragment } from "react";

import "./App.css";
import { RouteComponent } from "./Resource/Router";
import Provider from "./Resource/Context/Provider";
import AuthContext from "./Resource/Context/AuthContext";
function App() {
  return (
    <Provider>
      <RouteComponent></RouteComponent>;
    </Provider>
  );
}

export default App;
