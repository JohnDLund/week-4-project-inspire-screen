import WeatherService from "../services/weather-service.js";
import store from "../store.js";


function drawWeather() {
  document.getElementById("weather").innerHTML = store.State.weather.WeatherTemplate
  // let temp = store.State.weather.kelvin - 273.15
  // document.getElementById("tempConversion").innertext =  temp
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
