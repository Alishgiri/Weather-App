import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import SocketIo from "./pages/Socketio";
import NavBar from "./components/NavBar";
import TeekoGame from "./pages/TeekoGame";
import { appTheme } from "./util/app_theme";
import ReactHooks from "./pages/react_hooks";
import ImageCropTool from "./pages/ImageCropTool";
import UsaaProject from "./pages/usaa/UsaaProject";
import WeatherForecast from "./pages/WeatherForecast";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={appTheme}>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/socket-io" exact component={SocketIo} />
            <Route path="/teeko-game" exact component={TeekoGame} />
            <Route path="/image-crop-tool" exact component={ImageCropTool} />
            <Route path="/weather-forecast" exact component={WeatherForecast} />
            <Route path="/usaa-project" exact component={UsaaProject} />
            <Route path="/react-hooks" exact component={ReactHooks} />
            <Redirect to="/" />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
