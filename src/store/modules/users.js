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
      console.log('state', rootState.firebaseUser.uid)
      
      var user = firebase.auth().currentUser;
     
      console.log('user before',user)
      if( user.displayName === null || user.phoneNumber === null || user.photoURL === null || user.email === null  ) {
        user.updateProfile({
          displayName: payload.userDetails.firstName + ' ' + payload.userDetails.lastName,
          phoneNumber: payload.userDetails.phone1,
          photoURL: payload.userDetails.photoURL,
          email: payload.userDetails.email,
        }).then(function() {
          console.log('Update successful')
        }).catch(function(error) {
          // An error happened.
          console.log('Update error')
        });
      }
      console.log('user after',user)
      console.log('payload',payload)
     
      //Add User

      // var database = firebase.database();

      // database.ref('/users').push(payload["0"].userDetails)
      // database.ref('/address').push(payload["1"].userDetails)

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