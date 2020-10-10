import WeatherStore from "./weather_store";

export default class RootStore {
  constructor() {
    this.weatherStore = new WeatherStore(this);
  }
}