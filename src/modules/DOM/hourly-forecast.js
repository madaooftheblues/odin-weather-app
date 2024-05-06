import observer from '../observer.js'
import WeatherCard from './components/WeatherCard.js'
import unitSwitch from './unit-switch.js'

const weatherInfoElm = document.getElementById('weather-info')
const hourlyForecastElm = weatherInfoElm.querySelector('#hourly-forecast')

const todayHourly = []

function makeWeatherCards() {
    const unit = unitSwitch.getUnit()
    const cards = todayHourly.map((hour) => {
        const icon = `${hour.isDay ? '' : 'n'}${hour.icon}`
        const temp = (unit ? hour.tempF : hour.tempC) + '°'
        return WeatherCard(hour.time, icon, temp)
    })

    return cards
}

function render() {
    const todayHourlyCards = makeWeatherCards()
    hourlyForecastElm.textContent = ''
    hourlyForecastElm.append(...todayHourlyCards)
}

function setTodayHourly(data) {
    todayHourly.length = 0
    todayHourly.push(...data.todayHourly)
    render()
}

function init() {
    observer.subscribe('unitSwitched', render)
}
export default { init, setTodayHourly }
