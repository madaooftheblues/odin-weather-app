import observer from '../observer.js'
import { dateToDay } from '../utils.js'
import WeatherCard from './components/WeatherCard.js'
import unitSwitch from './unit-switch.js'

const weatherInfoElm = document.getElementById('weather-info')
const dailyForecastElm = weatherInfoElm.querySelector('#daily-forecast')

const daily = []

function makeWeatherCards() {
    const unit = unitSwitch.getUnit()
    const cards = daily.map((day) => {
        const icon = day.icon
        const temp = (unit ? day.tempF : day.tempC) + '°'
        const dayName = dateToDay(day.date)
        return WeatherCard(dayName, icon, temp)
    })

    return cards
}

function render() {
    const todayHourlyCards = makeWeatherCards()
    dailyForecastElm.textContent = ''
    dailyForecastElm.append(...todayHourlyCards)
}

function setDaily(data) {
    daily.length = 0
    daily.push(...data.daily)
    render()
}

function init() {
    observer.subscribe('unitSwitched', render)
}

export default { init, setDaily }
