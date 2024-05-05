import { dateToAlpha } from '../utils.js'

const weatherInfoElm = document.getElementById('weather-info')
const currentDayDateElm = weatherInfoElm.querySelector('#current-day-date')
const cityElm = weatherInfoElm.querySelector('#city')
const temperatureElm = weatherInfoElm.querySelector('#temperature')

const weatherInfo = {
    localtime: '',
    city: '',
    temperature: '',
}

function render() {
    const { city, localtime, temperature } = weatherInfo

    cityElm.textContent = city
    currentDayDateElm.textContent = dateToAlpha(localtime)
    temperatureElm.textContent = temperature
}

export function setWeatherInfo(data) {
    Object.assign(weatherInfo, data)
    render()
}
