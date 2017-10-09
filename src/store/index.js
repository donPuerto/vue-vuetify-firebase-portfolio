import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//const debug = process.env.NODE_ENV !== 'production'

import { state } from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import plugins from './plugins'



import SharedSettings from './modules/shared'
import Users from './modules/users'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins,
  modules: {
    SharedSettings,
    Users,
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
})
