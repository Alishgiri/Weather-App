import Axios from "axios";
import { action, observable, makeObservable } from "mobx";

import { appId } from "../util/constants";
import { checkIfSameDate } from "../util/date_time";

export default class WeatherStore {
  @observable isCelcius = false;
  @observable isRefreshing = false;
  @observable.ref weatherData = null;

  constructor() {
    makeObservable(this);
  }

  fetchWeatherData = async (isCelcius) => {
    const units = isCelcius ? "metric" : "imperial";
    try {
      this.source = Axios.CancelToken.source();
      const res = await Axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&units=${units}&APPID=${appId}`
      );
      this.setWeatherData(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  @action
  setWeatherData = (data) => {
    let requiredData = [];
    data.list.forEach((item, i) => {
      const dt = item.dt;
      if (this.prevDate && checkIfSameDate(this.prevDate, item.dt)) {
        return null;
      }
      this.prevDate = dt;
      requiredData.push(item);
    });
    this.weatherData = requiredData;
  };

  @action
  setIsCelcius = (value = true) => (this.isCelcius = value);

  @action
  setIsRefreshing = (value = true) => (this.isRefreshing = value);
}
