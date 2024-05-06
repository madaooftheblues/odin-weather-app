import './css/pico.min.css'
import './styles.css'
import './assets/icons/weather/day/113.png'
import observer from './modules/observer.js'
import weatherAPI from './modules/weatherAPI.js'
import cityInputForm from './modules/DOM/cityInputForm.js'
import weatherInfo from './modules/DOM/weatherInfo.js'
import hourlyForecast from './modules/DOM/hourly-forecast.js'

cityInputForm.init()
weatherInfo.init()
observer.subscribe('cityQueried', weatherAPI)
observer.subscribe('weatherDataProcessed', weatherInfo.setWeatherInfo)
observer.subscribe('weatherDataProcessed', hourlyForecast.setTodayHourly)
