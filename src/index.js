import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import weatherStore from "./store/weather_store";
import * as serviceWorker from "./serviceWorker";
import Initialize from "./components/Initialize";

export const storeContext = React.createContext();

ReactDOM.render(
  <storeContext.Provider value={weatherStore}>
    <Initialize />
  </storeContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
