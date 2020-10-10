import Axios from "axios";
import { action, observable, makeObservable } from "mobx";

import { appId } from "../util/constants";

export default class WeatherStore {
  @observable.ref weatherData = null;

  constructor() {
    makeObservable(this);
  }

  fetchWeatherData = async () => {
    try {
      const res = await Axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&APPID=${appId}`
      );
      this.setWeatherData(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  @action
  setWeatherData = (data) => (this.weatherData = data);
}
