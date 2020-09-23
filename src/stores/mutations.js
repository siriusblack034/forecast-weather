import { API_KEY, CURRENT_WEATHER, FORECAST_WEATHER } from '../constants'
import axios from 'axios'
export default {
    UpdateWeather(state) {
        axios
            .get(CURRENT_WEATHER + state.nameCity + ",VN&key=" + API_KEY)
            .then(response => {
                state.weather = response.data.data[0]
                state.dataIsRecived = true

            })
            .catch(Error => {
                console.log(Error.response);
            })
    },
    forecastWeather(state) {
        
        axios
            .get(FORECAST_WEATHER + state.nameCity + ",VN&key=" + API_KEY)
            .then(response => {
                state.forecast = response.data.data
                state.dataIsRecived = true
                console.log(state.forecast);
                
            })
            .catch(error => {
                console.log(error);
            })
    },
    updateDay(state, day) {
        switch (day) {
            case 0:
                state.nameDay = "CN"
                break
            case 1:
                state.nameDay = "Th 2"
                break
            case 2:
                state.nameDay = "Th 3"
                break
            case 3:
                state.nameDay = "Th 4"
                break
            case 4:
                state.nameDay = "Th 5"
                break
            case 5:
                state.nameDay = "Th 6"
                break
            case 6:
                state.nameDay = "Th 7"
                break
        }
    },
    nameCity(state, name) {
        
        state.nameCity = name;
    }
}