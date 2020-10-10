import Axios from "axios";
import { action, observable, makeObservable } from "mobx";

import { appId } from "../util/constants";

class WeatherStore {
  weatherData = null;

  constructor() {
    makeObservable(this, {
      weatherData: observable,
      fetchWeatherData: action,
    });
    this.fetchWeatherData();
  }

  async fetchWeatherData() {
    try {
      const res = await Axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&APPID=${appId}`
      );
      this.weatherData = res.data;
    } catch (e) {
      console.log("Error", e);
    }
  }
}

export default WeatherStore;
