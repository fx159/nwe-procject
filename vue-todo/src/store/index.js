import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './action'
import mutations from './mutations'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    user
  }
})
