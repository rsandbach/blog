import axios from 'axios'

const API_KEY = '577c0d5cbee6e70db8a2cf16dfac7b8e'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`

    return {
        type: FETCH_WEATHER,
        payload: axios.get(url)
    }
}