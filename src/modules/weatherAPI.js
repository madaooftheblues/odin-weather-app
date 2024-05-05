import observer from './observer.js'

const API_KEY = process.env.WEATHER
const baseURL = 'http://api.weatherapi.com/v1'
const forecastDays = 3

async function fetchWeatherData(city) {
    const res = await fetch(
        `${baseURL}/forecast.json?key=${API_KEY}&q=${city}&days=${forecastDays}`,
    )
    const data = await res.json()

    return data
}

function parse(data) {
    const city = data.location.name
    const localtime = data.location.localtime
    const tempC = data.current.temp_c
    const tempF = data.current.temp_f
    const condition = data.current.condition.text
    const wind = data.current.wind_kph
    const humidity = data.current.humidity
    const feelsLikeC = data.current.feelslike_c
    const feelsLikeF = data.current.feelslike_f

    return {
        city,
        localtime,
        tempC,
        tempF,
        condition,
        wind,
        humidity,
        feelsLikeC,
        feelsLikeF,
    }
}

async function processWeatherData(city) {
    const data = await fetchWeatherData(city)
    const parsedData = await parse(data)

    console.log(data)
    observer.publish('weatherDataProcessed', parsedData)

    return parsedData
}

export default processWeatherData
