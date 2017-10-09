import * as firebase from 'firebase'
import * as api from '@/helpers/api/firebase'

/**
 * User
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

  ActionCreateProfile ({ state, commit, rootState}, payload ) {
      console.log('Create Profile', payload)
      // if(rootState != null) {
        
      //   let obj = Object.assign(payload,rootState.firebaseUser)
      //   // /api.Write(obj)
      //   console.log(obj)
      // }

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