import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentClicker: 1
  },

  mutations: {
    setCurrentClicker(state, newIndex) {
      state.currentClicker = newIndex;
    }
  },

  actions: {
  },

  getters: {
    currentClicker: (state) => {
      return state.currentClicker;
    }
  },

  modules: {
  }

})
