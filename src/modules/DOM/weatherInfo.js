import observer from '../observer.js'
import { dateToAlpha } from '../utils.js'
import unitSwitch from './unit-switch.js'

const weatherInfoElm = document.getElementById('weather-info')
const currentDayDateElm = weatherInfoElm.querySelector('#current-day-date')
const cityElm = weatherInfoElm.querySelector('#city')
const temperatureElm = weatherInfoElm.querySelector('#temperature')
const windElm = weatherInfoElm.querySelector('#wind')
const humidityElm = weatherInfoElm.querySelector('#humidity')
const conditionElm = weatherInfoElm.querySelector('#condition')
const conditionIcon = weatherInfoElm.querySelector('#condition-icon')
const feelsLikeElm = weatherInfoElm.querySelector('#feelslike')

const weatherInfo = {}
const iconCache = {}

function importAll(r) {
    r.keys().forEach((key) => (iconCache[key] = r(key)))
}

importAll(require.context('../../assets/icons/weather/', true, /\.png$/))

function render() {
    const {
        city,
        localtime,
        tempC,
        tempF,
        condition,
        feelsLikeC,
        feelsLikeF,
        humidity,
        wind,
        icon,
        isDay,
    } = weatherInfo
    const unit = unitSwitch.getUnit()

    cityElm.textContent = city
    currentDayDateElm.textContent = dateToAlpha(localtime)
    temperatureElm.textContent = (unit ? tempF : tempC) + '°'
    feelsLikeElm.textContent = (unit ? feelsLikeF : feelsLikeC) + '°'
    conditionIcon.src = `./${isDay ? '' : 'n'}${icon}`
    conditionElm.textContent = condition
    humidityElm.textContent = `${humidity}%`
    windElm.textContent = `${wind}km/h`
}

function setWeatherInfo(data) {
    Object.assign(weatherInfo, data)
    render()
}

function init() {
    observer.subscribe('unitSwitched', render)
}

export default { init, setWeatherInfo }
