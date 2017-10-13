import * as firebase from 'firebase'
import 'firebase/firestore'
import * as api from '@/helpers/api/firebase'
import router from '@/router'

/**
 * User
 * 
 */

// initial state
const state = {
   userInformation: {
     userDetails: null,
     userAddress: null,
   }
   
}


// getters
const getters = {
   GettersUserInformation: state => state.userInformation,
}
 
// mutations
const mutations = {
  MutateUserDetails (state, payload) {
    console.log('MutateUserDetails', payload)
    state.userInformation.userDetails = payload
  },

  MutateUserAddress (state, payload) {
    state.userInformation.userAddress = payload
  },

}


// actions
const actions = {

  ActionCreateProfile ({ state, commit, rootState}, payload ) {
      console.log('Create Profile', rootState)
      
      //console.log('state', rootState.firebaseUser.uid)
      
      var user = firebase.auth().currentUser;
      
      var db = firebase.firestore();
      console.log('user',user)
      /**
       * Status: todo
       * 
       * - before creating a record, check first the database if exist. 
       * - validation on these unique field "firstName", "address", "phone1", "phone2" "email"
       * - if record exist then show a dialog box with the lists of record with corresponding links
       * - Has also a button to create on dialog box
       * */

      


      /**
       * Status: done ===but need resolve issue on  'phoneNumber' and 'photoURL===
       * 
       * - When creating a record at the same time updating firebase "Provider Data"
       * 
       * Error
       * [2] - although it is successfully created on firebase, 
       *       however  'phoneNumber' and 'photoURL were not updated
       * 
       */
     
     
      


      /**
       * Status: WIP
       * 
       * - Writing record to firebase  ==Done==
       * - reference to "users" and "address" ==Done==
       * - take the uid on "firebase.auth().currentUser" and include to "users" and "address" ==Done==
       * - conduct test for query on "users" and "address" ==Todo==
       */
      
     

      /**
       * Status: todo
       * 
       * - this code must be part of the api firebase folder
       *      
       *      
       */
      //console.log('user after',user)
      //console.log('payload',payload)

   }, // ActionCreateProfile

   ActionUpdateProfile ({ state, commit, rootState}, payload ) {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    

    user.updateProfile({
      displayName: payload.firstName + ' ' + payload.lastName,
      phoneNumber: payload.phone1,
      photoURL: payload.photoURL,
      email: payload.email,
    }).catch(function(error) {
      // An error happened.
      console.log('Update error')
    })


    db.collection("users").doc(user.uid).set({
      firstName: payload.firstName,
      middleName: payload.middleName,
      lastName: payload.lastName,
      email: payload.email,
      phone1: payload.phone1,
      phone2: payload.phone2,
      fax1: payload.fax1,
      fax2: payload.fax2,
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });


    db.collection("address").doc(user.uid).set({
      streetAddress1: payload.streetAddress1,
      streetAddress2: payload.streetAddress2,
      state: payload.state,
      city: payload.city,
      postalCode: payload.postalCode,
      country: payload.country,
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });  

    rootState.snackbarSetup.snackbar = true
    rootState.snackbarSetup.message = "Users successfully updated. Thank you."
    setTimeout( ()=> {
      rootState.snackbarSetup.timeout = 3000
      router.push('/')
    }, 4000);
 
      
    }, //ActionUpdateProfile


    ActionPopulateUser ({ state, commit, rootState}, payload ) { 
      var db = firebase.firestore();
      var user = firebase.auth().currentUser;

      //set loading to true
      //rootState.loading = true
      console.log('rootState',rootState)
      //console.log('ActionPopulateUser',user)
      
      var docUserDetailsRef = db.collection("users").doc(user.uid);
      var docUserAddressRef = db.collection("address").doc(user.uid);
      docUserDetailsRef.get().then(function(doc) {
        if(doc.exists) {
          //populate records
          commit('MutateUserDetails', doc.data() )
        } 
        
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
  
      docUserAddressRef.get().then(function(doc) {
        if(doc.exists) {
          //populate records
          commit('MutateUserAddress', doc.data() )
         
          
        }
        
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });

      //set loading to false 
      rootState.loading = false
    }, // ActionPopulateUser

 } //actions
 
 



 //Export File
 export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
 } 