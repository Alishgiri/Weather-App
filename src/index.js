import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import RootStore from "./store/root_store";
import * as serviceWorker from "./serviceWorker";
import Initialize from "./components/Initialize";

const rootStore = new RootStore();
ReactDOM.render(
  <Provider rootStore={rootStore} weatherStore={rootStore.weatherStore}>
    <Initialize />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
