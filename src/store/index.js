import Vue from 'vue'
import Vuex from 'vuex'
import property from "./property"

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    property
  }
})
