export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.fahrenheit = Math.round((data.main.temp - 273.15) * 1.8 + 32)
    this.celcius = Math.round((data.main.temp - 273.15))
    this.weather = data.weather[0].description
    this.windSpeed = data.wind.speed
    this.windDirection = data.wind.deg
  }



  get WeatherTemplate() {
    return /*html*/`
  <div class="card border-dark mb-4 quote mx-1">
  <div class="card-header bg-transparent border-dark text-primary"><b><i class="city-text">${this.city}</b></i>
  <span class="pl-5 ml-5 text-white">C
    <label class="switch">
      <input id="tempSlider" type="checkbox" onchange="app.weatherController.weatherToggle()">
      <span class="slider round"></span>
    </label>
  </span>
  <span class="text-white">F</span>
  </div>
  <div class="card-body text-white"> 
    <h5 class="card-title text-success">Current Temp: 
      <span id="tempConversion" class="text-danger weather-text"> ${this.celcius}</span>
      <span class="text-white weather-text">°</span>
      <span id="tempAbreviation" class="text-primary weather-text">C</span>
  </h5>
    <p class="card-text text-warning text-capitalize">${this.weather}</p>
  </div>
  <div class="card-footer bg-transparent border-danger text-info">Wind: &ensp; ${this.windDirection}° &ensp; ${this.windSpeed}mph</div>
  </div>
`
  }
}

