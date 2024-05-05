const API_KEY = process.env.WEATHER
const baseURL = 'http://api.weatherapi.com/v1'
const forecastDays = 3

export default async function fetchWeatherData(city) {
    const res = await fetch(
        `${baseURL}/forecast.json?key=${API_KEY}&q=${city}&days=${forecastDays}`,
    )
    const data = await res.json()

    console.log(data)
}
