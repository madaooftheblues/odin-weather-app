export default async function fetchWeatherData(city) {
    const API_KEY = '21ad2e4143f14cc4b7d25350243004'
    const baseURL = 'http://api.weatherapi.com/v1'

    const res = await fetch(`${baseURL}/current.json?key=${API_KEY}&q=${city}`)
    const data = await res.json()

    console.log(data)
}
