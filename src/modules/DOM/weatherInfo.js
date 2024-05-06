import { dateToAlpha } from '../utils.js'

const weatherInfoElm = document.getElementById('weather-info')
const unitSwitch = weatherInfoElm.querySelector('#unit')
const currentDayDateElm = weatherInfoElm.querySelector('#current-day-date')
const cityElm = weatherInfoElm.querySelector('#city')
const temperatureElm = weatherInfoElm.querySelector('#temperature')
const windElm = weatherInfoElm.querySelector('#wind')
const humidityElm = weatherInfoElm.querySelector('#humidity')
const conditionElm = weatherInfoElm.querySelector('#condition')
const feelsLikeElm = weatherInfoElm.querySelector('#feelslike')

const weatherInfo = {}
let unit = false

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
    } = weatherInfo

    cityElm.textContent = city
    currentDayDateElm.textContent = dateToAlpha(localtime)
    temperatureElm.textContent = (unit ? tempF : tempC) + '°'
    feelsLikeElm.textContent = (unit ? feelsLikeF : feelsLikeC) + '°'
    conditionElm.textContent = condition
    humidityElm.textContent = `${humidity}%`
    windElm.textContent = `${wind}km/h`
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
