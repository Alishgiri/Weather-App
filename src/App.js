import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import TeekoGame from "./pages/TeekoGame";
import WeatherForecast from "./pages/WeatherForecast";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={WeatherForecast} />
          <Route path="/teeko-game" exact component={TeekoGame} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
