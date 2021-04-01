export default {
  namespaced: true,

  state: {
    payment: [],
  },

  getters: {
    data: (state) => state.payment,
  },

  actions: {
    addPayment({ commit }, formData) {
      commit('PAYMENT', formData)
    },
    remove({ commit }, i) {
      commit('DELETE', i)
    },
  },

  mutations: {
    PAYMENT(state, formData) {
      console.log(formData)
      state.payment.push({ ...formData })
    },
    DELETE(state, i) {
      state.payment.splice(i, 1)
    },
  },
}
