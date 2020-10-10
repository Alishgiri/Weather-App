const { default: WeatherStore } = require("./weather_store");

class RootStore {
  constructor() {
    this.weatherStore = new WeatherStore(this);
  }
}

export default RootStore;
