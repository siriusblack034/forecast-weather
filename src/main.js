import Vue from 'vue'
import App from './App.vue'
import {store} from './stores/stores'
import axios from 'axios'

Vue.prototype.axios = axios
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
