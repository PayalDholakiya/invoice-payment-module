export default {
  namespaced: true,

  state: {
    invoices: [],
  },

  getters: {
    invoicedata: (state) => state.invoices,
  },

  actions: {
    addInvoice({ commit }, formData) {
      console.log('ghg')
      commit('ADD', formData)
    },
    remove({ commit }, i) {
      commit('DELETE', i)
    },
  },

  mutations: {
    ADD(state, formData) {
      state.invoices.push({ ...formData })
    },
    DELETE(state, i) {
      state.invoices.splice(i, 1)
    },
  },
}
