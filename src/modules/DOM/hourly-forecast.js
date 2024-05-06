import WeatherCard from './components/WeatherCard.js'

const weatherInfoElm = document.getElementById('weather-info')
const hourlyForecastElm = weatherInfoElm.querySelector('#hourly-forecast')

const todayHourly = []

function makeWeatherCards() {
    const cards = todayHourly.map((hour) => {
        const icon = `${hour.isDay ? '' : 'n'}${hour.icon}`
        return WeatherCard(hour.time, icon, hour.tempC)
    })

    return cards
}

function render() {
    console.log(todayHourly)
    const todayHourlyCards = makeWeatherCards()
    hourlyForecastElm.textContent = ''
    hourlyForecastElm.append(...todayHourlyCards)
}

function setTodayHourly(data) {
    todayHourly.length = 0
    todayHourly.push(...data.todayHourly)
    render()
}

export default { setTodayHourly }
