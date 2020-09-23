<template>
  <div>
    <div class="card" >
      <div class="card-body text-center">
        <h5 class="card-title">{{getDay()}}</h5>
        <img :src="sourceImg" alt="icon">
        <h4 class="card-title">{{Math.ceil(dataInDay.min_temp)}}° - {{Math.ceil(dataInDay.max_temp)}}°</h4>
        <p class="card-text">{{dataInDay.weather.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataInDay: Object,
    day: Number
  },
  computed:{
    sourceImg() {
       let source = "";
      source +=
        "https://www.weatherbit.io/static/img/icons/" +
        this.dataInDay.weather.icon +
        ".png";
      return source;
    },
  },
  created(){
    this.$store.dispatch('updateDay', this.day)
  },
  methods:{
    getDay(){
      var nameDay =""
      switch (this.day%7 ) {
            case 0:
                nameDay = "CN"
                break
            case 1:
                nameDay = "Th 2"
                break
            case 2:
                nameDay = "Th 3"
                break
            case 3:
                nameDay = "Th 4"
                break
            case 4:
                nameDay = "Th 5"
                break
            case 5:
                nameDay = "Th 6"
                break
            case 6:
                nameDay = "Th 7"
                break
        }
        return nameDay
        
    }
  }
};
</script >

<style scoped>
.card{
  
  border: 2px solid;
  margin-top: 50px;
 
}
</style>