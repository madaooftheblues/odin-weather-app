import observer from './observer.js'

const API_KEY = process.env.WEATHER
const baseURL = 'https://api.weatherapi.com/v1'
const forecastDays = 3

async function fetchWeatherData(city) {
    try {
        const res = await fetch(
            `${baseURL}/forecast.json?key=${API_KEY}&q=${city}&days=${forecastDays}`,
        )
        const data = await res.json()
        return data
    } catch (e) {
        console.log('Error fetching weather data', e)
    } finally {
        observer.publish('cityQueryCompleted', '')
    }
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
        daily: parseDaily(data),
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

function parseDaily(data) {
    const base = data.forecast.forecastday
    const daily = base.map((d) => {
        const day = d.day
        const weatherDayData = {
            tempC: day.avgtemp_c,
            tempF: day.avgtemp_f,
            icon: day.condition.icon.split('/').at(-1),
            date: d.date,
        }

        return weatherDayData
    })

    return daily
}

async function processWeatherData(city) {
    try {
        const data = await fetchWeatherData(city)
        const parsedData = await parse(data)

        observer.publish('weatherDataProcessed', parsedData)

        return parsedData
    } catch (e) {
        console.log('Error fetching weather data', e)
    }
}

export default processWeatherData
