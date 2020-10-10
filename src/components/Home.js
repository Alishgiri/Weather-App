import React from "react";
import { inject, observer } from "mobx-react";

import { StoreContext } from "..";

@inject((stores) => ({
  userStore: stores.userStore,
  authStore: stores.authStore,
}))

@observer
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col">
          <h1>Weather App</h1>
        </div>
      </div>
    );
  }
}

export default Home;
