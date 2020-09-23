<template>
  <div class="container">
    <input
      type="text"
      class="todo-input"
      @keyup.enter="setNameCity"
      autofocus
      placeholder="Search Name City"
      v-model="nameCity"
    />

    <button class="btn btn-danger" @click="setNameCity">Tìm</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameCity: "",
    };
  },
  methods: {
    setNameCity() {
      this.$store.dispatch("setNameCity", this.nameCity);
      this.$store.dispatch("updateWeather");
      this.$store.dispatch("forecastWeather");
      this.nameCity = "";
    },
  },
};
</script>

<style scoped>
.todo-input {
  width: 50%;
  font-size: 18px;
  margin-bottom: 16px;
  padding: 10px 18px;
}
.container{
  position: relative;
  display:inherit;
  left: 20%;
}
</style>