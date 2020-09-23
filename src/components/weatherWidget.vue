<template>
  <div>
    <div v-if="this.$store.state.dataIsRecived" class="weather-widget">
      <div class="card" style="width: 23rem;">
        <img class="card-img-top" src="../assets/card.jpg" alt="Card image cap" />
        <div class="card-body text-center">
          <h2 class="card-title">{{weather.city_name}}</h2>

          <img :src="sourceImg" alt="icons" />
          <h1 class="card-title">{{weather.temp}} °C</h1>
          <p class="card-text">{{weather.weather.description}}</p>
        </div>
      </div>
    </div>
    <div v-else class="weather-widget">
      <img src="spinner.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    weather() {
      return this.$store.state.weather;
    },
    sourceImg() {
      let source = "";
      source +=
        "https://www.weatherbit.io/static/img/icons/" +
        this.$store.state.weather.weather.icon +
        ".png";
      return source;
    },
  },
  created() {
    this.$store.dispatch("updateWeather");
  },
};
</script>

<style  scoped >
.card {
  border: 1px solid;
}
</style>