import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import RootStore from "./store/root_store";
import * as serviceWorker from "./serviceWorker";

const rootStore = new RootStore();
ReactDOM.render(
  <Provider
    rootStore={rootStore}
    teekoStore={rootStore.teekoStore}
    weatherStore={rootStore.weatherStore}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
