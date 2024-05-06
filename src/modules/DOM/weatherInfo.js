import { dateToAlpha } from '../utils.js'

const weatherInfoElm = document.getElementById('weather-info')
const unitSwitch = weatherInfoElm.querySelector('#unit')
const currentDayDateElm = weatherInfoElm.querySelector('#current-day-date')
const cityElm = weatherInfoElm.querySelector('#city')
const temperatureElm = weatherInfoElm.querySelector('#temperature')
const windElm = weatherInfoElm.querySelector('#wind')
const humidityElm = weatherInfoElm.querySelector('#humidity')
const conditionElm = weatherInfoElm.querySelector('#condition')
const conditionIcon = weatherInfoElm.querySelector('#condition-icon')
const feelsLikeElm = weatherInfoElm.querySelector('#feelslike')

const weatherInfo = {}
let unit = false
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

    cityElm.textContent = city
    currentDayDateElm.textContent = dateToAlpha(localtime)
    temperatureElm.textContent = (unit ? tempF : tempC) + '°'
    feelsLikeElm.textContent = (unit ? feelsLikeF : feelsLikeC) + '°'
    conditionIcon.src = `./${isDay ? '' : 'n'}${icon}`
    conditionElm.textContent = condition
    humidityElm.textContent = `${humidity}%`
    windElm.textContent = `${wind}km/h`

    console.log(conditionIcon.src)
}

function setUnit() {
    unit = unitSwitch.checked
    render()
}

function setWeatherInfo(data) {
    Object.assign(weatherInfo, data)
    render()
}

function bindEvents() {
    unitSwitch.addEventListener('change', setUnit)
}

function init() {
    bindEvents()
}

export default { init, setWeatherInfo }
