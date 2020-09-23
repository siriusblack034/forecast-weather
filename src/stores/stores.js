import Vue from 'vue'
import VueX from 'vuex'
import state from './states'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(VueX)
export const store = new VueX.Store({
    state,
    mutations,
    getters,
    actions
})