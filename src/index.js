import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import AppProvider from "./slices";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById("root")
);
