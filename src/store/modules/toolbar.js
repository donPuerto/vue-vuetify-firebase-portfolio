/**
 * Navbar
 */

 
// initial state
const state = {
   message: 'Hello World'
}


// getters
const getters = {
   GettersMessage: state => state.message
 }
 
// mutations
const mutations = {
   MutateMessage (state, payload) {
     state.message = payload
   
   },
}


// actions
const actions = {
   ActionMessage ({ commit, state }, payload ) {
     commit('MutateMessage', payload )
   }
 }
 
 //Export File
 export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
 } 