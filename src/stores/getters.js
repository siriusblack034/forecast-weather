export default {
    getWeather: state => {
        return state.weather
    },
    getForecastWeather: state => {
        let removed = state.forecast.splice(7,7);
        removed.pop();
        return removed;
    },
    getNameCity: state =>{
        return state.nameCity
    }
}