const API_KEY = process.env.WEATHER
const baseURL = 'http://api.weatherapi.com/v1'

export default async function fetchWeatherData(city) {
    const res = await fetch(`${baseURL}/current.json?key=${API_KEY}&q=${city}`)
    const data = await res.json()

    console.log(data)
}
