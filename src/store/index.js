import Vue from 'vue'
import Vuex from 'vuex'
import invoice from './modules/invoice.js'
import payment from './modules/payment.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  modules: {
    invoice,
    payment,
  },
})
