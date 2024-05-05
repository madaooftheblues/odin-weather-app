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
    const temperature = data.current.temp_c

    return { city, localtime, temperature }
}

async function processWeatherData(city) {
    const data = await fetchWeatherData(city)
    console.log(data)
    const cleanedData = await parse(data)

    observer.publish('weatherDataProcessed', cleanedData)

    return cleanedData
}

export default processWeatherData
