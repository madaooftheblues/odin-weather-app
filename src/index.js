import './css/pico.min.css'
import './styles.css'
import './assets/icons/weather/day/113.png'
import observer from './modules/observer.js'
import weatherAPI from './modules/weatherAPI.js'
import cityInputForm from './modules/DOM/cityInputForm.js'
import unitSwitch from './modules/DOM/unit-switch.js'
import weatherInfo from './modules/DOM/weatherInfo.js'
import hourlyForecast from './modules/DOM/hourly-forecast.js'
import dailyForecast from './modules/DOM/daily-forecast.js'

cityInputForm.init()
unitSwitch.init()
weatherInfo.init()
hourlyForecast.init()
dailyForecast.init()

observer.subscribe('cityQueried', weatherAPI)
observer.subscribe('weatherDataProcessed', weatherInfo.setWeatherInfo)
observer.subscribe('weatherDataProcessed', hourlyForecast.setTodayHourly)
observer.subscribe('weatherDataProcessed', dailyForecast.setDaily)
