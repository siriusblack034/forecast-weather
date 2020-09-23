export default {
    updateWeather(context) {
        context.commit("UpdateWeather");
    },
    forecastWeather(context) {
        console.log('action');
        context.commit('forecastWeather')
    },
    updateDay(context, day) {
        context.commit('updateDay', day)
    },
    setNameCity(context, name) {
        context.commit('nameCity', name);
    }
}