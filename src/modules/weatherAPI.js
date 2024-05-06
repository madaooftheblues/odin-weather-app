import observer from './observer.js'

const API_KEY = process.env.WEATHER
const baseURL = 'http://api.weatherapi.com/v1'
const forecastDays = 4

async function fetchWeatherData(city) {
    const res = await fetch(
        `${baseURL}/forecast.json?key=${API_KEY}&q=${city}&days=${forecastDays}`,
    )
    const data = await res.json()

    return data
}

function parse(data) {
    const weatherData = {
        city: data.location.name,
        localtime: data.location.localtime,
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        condition: data.current.condition.text,
        wind: data.current.wind_kph,
        humidity: data.current.humidity,
        feelsLikeC: data.current.feelslike_c,
        feelsLikeF: data.current.feelslike_f,
        isDay: data.current.is_day,
        icon: data.current.condition.icon.split('/').at(-1),
        todayHourly: parseTodayHourly(data),
    }

    return weatherData
}

function parseTodayHourly(data) {
    const base = data.forecast.forecastday.at(0).hour
    const todayHourly = base.map((hour) => {
        const weatherHourData = {
            tempC: hour.temp_c,
            tempF: hour.temp_f,
            icon: hour.condition.icon.split('/').at(-1),
            time: hour.time.split(' ').at(-1),
            isDay: hour.is_day,
        }
        return weatherHourData
    })
    return todayHourly
}

async function processWeatherData(city) {
    const data = await fetchWeatherData(city)
    const parsedData = await parse(data)

    console.log(data)
    observer.publish('weatherDataProcessed', parsedData)

    return parsedData
}

export default processWeatherData
