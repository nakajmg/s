const store = new Vuex.Store({
  state: {
    count: 0
  },
  actions: {
    increment({commit, state}) {
      commit('INCREMENT_COUNT')
    },
    decrement({commit, state}) {
      commit('DECREMENT_COUNT')
    }
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count++
    },
    DECREMENT_COUNT(state) {
      state.count--
    }
  },
  getters: {
    count (state) {
      return state.count
    }
  }
})
