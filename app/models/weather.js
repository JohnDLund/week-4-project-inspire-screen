export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.temp = Math.round((data.main.temp - 273.15) * 1.8 +32)
    this.weather = data.weather[0].description
    this.windSpeed = data.wind.speed
    this.windDirection = data.wind.deg
  
  }



  get WeatherTemplate() {
    return /*html*/`
  <div class="card border-dark mb-3 quote" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-dark text-primary"><b><i>${this.city}</b></i></div>
  <div class="card-body text-white"> 
    <h5 class="card-title text-success">Current Temp: 
      <span id="tempConversion" class="text-danger weather-text"> &ensp; ${this.temp}</span>
      <span class="text-white weather-text">°</span>
      <span class="text-primary weather-text">F</span>
  </h5>
    <p class="card-text text-warning text-capitalize">${this.weather}</p>
  </div>
  <div class="card-footer bg-transparent border-danger text-info">Wind: &ensp; ${this.windDirection}° &ensp; ${this.windSpeed}mph</div>
  </div>
`

  }
}

