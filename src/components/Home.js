import { useObserver } from "mobx-react";
import React, { useContext } from "react";

import { storeContext } from "..";

export default function Home() {
  const store = useContext(storeContext);
  return useObserver(() => (
    <div className="container">
      <div className="col">
        <h1>Weather App</h1>
      </div>
    </div>
  ));
}
