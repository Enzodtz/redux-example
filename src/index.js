import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { Counter } from "./Counter";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
