<template>
  <div>
    <searchName />
    <div class="home">
      <weatherWidget />
    </div>
    <foreCast />
  </div>
</template>

<script>
import searchName from "../components/CityName"
import weatherWidget from "../components/weatherWidget";
import foreCast from "../components/forecast/foreCast";
export default {
  name: "home",
  components: {
    searchName,
    weatherWidget,
    foreCast,
  },
};
</script>

<style  scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
</style>