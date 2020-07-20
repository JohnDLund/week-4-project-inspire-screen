import WeatherService from "../services/weather-service.js";
import store from "../store.js";

function drawWeather() {
  document.getElementById("weather").innerHTML = store.State.weather.WeatherTemplate
}


export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }

  weatherToggle() {
    if (document.getElementById("tempSlider").checked == true) {
      document.getElementById("tempConversion").innerText = store.State.weather.fahrenheit.toString()
      document.getElementById("tempAbreviation").innerText = " F"

    } else {
      document.getElementById("tempConversion").innerText = store.State.weather.celcius.toString()
      document.getElementById("tempAbreviation").innerText = " C"
    }
  }
}