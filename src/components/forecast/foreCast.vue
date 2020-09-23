<template>
  <div>
    
    <div class="row ">
      <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 " v-for="(data, index) in datas" :key="data.city_name">
        <one-day :dataInDay="data" :day="dayNumber+ (index+1)" />
      </div>
    </div>
  </div>
</template>

<script>
import oneDay from "./oneDay";
export default {
  data() {
    return {
      dayNumber: new Date().getDay(),
    };
  },
  created() {
    this.$store.dispatch("forecastWeather");
  },
  computed: {
    datas() {
      console.log(this.$store.getters.getForecastWeather);
      return this.$store.getters.getForecastWeather;
      //console.log("data"+this.$store.state.forecast);
    },
  },
  components: {
    oneDay,
  },
};
</script>

<style scoped>

</style>