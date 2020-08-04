import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import store from "./store";

console.log("store", store);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
