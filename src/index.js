import './styles.css'
import './css/pico.min.css'
import observer from './modules/observer.js'
import weatherAPI from './modules/weatherAPI.js'
import cityInputForm from './modules/DOM/cityInputForm.js'
import weatherInfo from './modules/DOM/weatherInfo.js'

cityInputForm.init()
weatherInfo.init()
observer.subscribe('cityQueried', weatherAPI)
observer.subscribe('weatherDataProcessed', weatherInfo.setWeatherInfo)
