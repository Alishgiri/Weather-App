import Axios from "axios";
import { action, observable, makeObservable } from "mobx";

import { appId } from "../util/constants";
import { checkIfSameDate } from "../util/date_time";

export default class WeatherStore {
  weatherData;
  @observable isCelcius = false;
  @observable visibleWeatherData;
  @observable isRefreshing = false;

  constructor() {
    this.visibleDateEnd = 3;
    this.visibleDateStart = 0;
    makeObservable(this);
  }

  fetchWeatherData = async (isCelcius) => {
    const units = isCelcius ? "metric" : "imperial";
    try {
      this.source = Axios.CancelToken.source();
      const res = await Axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&units=${units}&APPID=${appId}`
      );
      this.filterAndSetData(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  @action
  filterAndSetData = (data) => {
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
    this.visibleWeatherData = requiredData.slice(
      this.visibleDateStart,
      this.visibleDateEnd
    );
  };

  @action
  onVisibleDateForward = () => {
    if (this.visibleDateEnd === this.weatherData.length) return;
    this.visibleDateEnd++;
    this.visibleDateStart++;
    this.resetVisibleDate();
  };

  @action
  onVisibleDateBack = () => {
    if (this.visibleDateStart === 0) return;
    this.visibleDateEnd--;
    this.visibleDateStart--;
    this.resetVisibleDate();
  };

  resetVisibleDate = () => {
    this.visibleWeatherData = this.weatherData.slice(
      this.visibleDateStart,
      this.visibleDateEnd
    );
  };

  @action
  setIsCelcius = (value = true) => (this.isCelcius = value);

  @action
  setIsRefreshing = (value = true) => (this.isRefreshing = value);
}
