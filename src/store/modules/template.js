// imports
import * as types from '../mutation-types'


// initial state
export const state = {
   message1: 'Persisted message',
   message2: 'None persist message'
} // initial state


// getters
export const getters = {
   [types.GETTER_TEMPLATE_MESSAGE]: (state) => state.message1,
} // getters


// actions
export const actions = {
   [types.ACTION_TEMPLATE_MESSAGE] ( {commit, rootState, state}, payload) {
      commit('MUTATION_TEMPLATE_SET_MESSAGE', payload)
   },

} // actions


// mutations
export const mutations = {
   [types.MUTATION_TEMPLATE_SET_MESSAGE] (state, payload) {
      state.message1 = payload
   },
 
} //mutations


// export
export default {
  state,
  getters,
  actions,
  mutations
} //export