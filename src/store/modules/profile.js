import * as firebase from 'firebase'

/**
 * Profile
 * 
 */

// initial state
const state = {
   message: 'Profile Message'
}


// getters
const getters = {
   GettersMessage: state => state.message,
}
 
// mutations
const mutations = {
   MutateMessage (state, payload) {
     state.message = payload
   
   },

}


// actions
const actions = {
   ActionMessage ({ commit}, payload ) {
     commit('MutateMessage', payload )
   },

   ActionCreateProfile ({ commit}, payload ) {
      console.log('Create Profile', payload)

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