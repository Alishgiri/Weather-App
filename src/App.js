import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import TeekoGame from "./pages/TeekoGame";
import { appTheme } from "./util/app_theme";
import ImageCropTool from "./pages/ImageCropTool";
import WeatherForecast from "./pages/WeatherForecast";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={appTheme}>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/teeko-game" exact component={TeekoGame} />
            <Route path="/image-crop-tool" exact component={ImageCropTool} />
            <Route path="/weather-forecast" exact component={WeatherForecast} />
            <Redirect to="/" />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
