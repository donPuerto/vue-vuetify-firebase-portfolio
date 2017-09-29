import * as firebase from 'firebase'
import router from '@/router'
import * as api from '@/api/firebase'


/**
 * 
 * Register, Login, Logout, Password Reset, AutoSignin, 
 * 
 */


//Register
export const ActionRegisterUser = ({commit}, payload) => {
    //console.log('Action Register User',payload)
    commit('Mutate_Loading', true)
    commit('Mutate_Clear_Alert_Message')
 
  
    return firebase.auth().createUserWithEmailAndPassword( payload.email, payload.password )
        .then( (firebaseUser) => {
            //console.log('firebaseUser', firebaseUser)
            firebase.auth().currentUser.sendEmailVerification().then( ()=> {
                /**
                 * Success Stage
                 */    
                commit('Mutate_Loading', false)
                commit('Mutate_Alert_Message', {
                    status: 'success', 
                    message: 'User successfully created and please check your email for verification', 
                    icon: 'check_circle'
                })

                
            
            }).catch(function(error) {
                commit('Mutate_Loading', true)
                commit('Mutate_Alert_Message', {
                    status: 'error', 
                    message: 'Send email verification error', 
                    icon: 'error_outline'
                })
            })   
            
            return 'Created user successfully'
        
        })
        .catch ( (error) => {

            commit('Mutate_Loading', false)
            commit('Mutate_Alert_Message', {
                status: 'error', 
                message: error.message,
                icon: 'error_outline'
            })
            //console.log('Create User With Email And Password Error' ,error)      
    })
} //RegisterUser



//Login
export const ActionLogin = ({commit, dispatch}, payload) => {
    //console.log('Action Login Payload', payload)
  
    commit('Mutate_Loading', true)
    commit('Mutate_Clear_Alert_Message')

    api.Login(payload)
        .then( (firebaseUser) => {
            
            commit('Mutate_Loading', false)  
    
            if(firebaseUser.emailVerified){
                let user = {
                    uid: firebaseUser.uid,
                    appUrl: firebaseUser.A,
                    token: firebaseUser.refreshToken,
                    displayName: firebaseUser.displayName,
                    email: firebaseUser.email,
                    phoneNumber: firebaseUser.phoneNumber,
                    phoneUrl: firebaseUser.phoneUrl,
                    emailVerified: firebaseUser.emailVerified 
                }    
                //console.log('login user',user )
                commit('Mutate_Firebase_Authenticated_User',user)

                
                //updateUserProfile(firebaseUser)
                router.push('/admin')
                commit('Mutate_Alert_Message', {
                    status: 'success', 
                    message: 'User successfully login with email and password. Check your email for verification.', 
                    icon: 'check_circle'
                })
            }   
           
            return 
        })
        .catch ((error) => {
            //console.log(error)      
            commit('Mutate_Loading', true)
            commit('Mutate_Alert_Message', {
                status: 'error', 
                message: error.message,
                icon: 'error_outline'
            })
    })

} // Login




// logout
export const ActionLogout = ({commit}) => {
    commit('Mutate_Loading', true)
    commit('Mutate_Clear_Alert_Message')
    console.log('Logout')
    firebase.auth().signOut().then(function(user) {
        //console.log('Sign-out successful.')
        commit('Mutate_Firebase_Authenticated_User', null)
        commit('Mutate_Clear_Sync_Storage')
        router.push('/')

        }).catch(function(error) {
            commit('Mutate_Loading', true)
            commit('Mutate_Alert_Message', {
                status: 'error', 
                message: error.message,
                icon: 'error_outline'
        })
    });
      
        
} //logout





// Password Reset
export const ActionPasswordReset = ({commit, dispatch}, payload) => {
    commit('Mutate_Loading', true)
    commit('Mutate_Clear_Alert_Message')

    var auth = firebase.auth();
    var emailAddress = payload;
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
        /**
         * Success Stage
         */    
        commit('Mutate_Loading', false)
        commit('Mutate_Alert_Message', {
            status: 'success', 
            message: 'Sent link to your email for password reset', 
            icon: 'check_circle'
        })
        router.push('/login')

    }).catch(function(error) {
      // An error happened.
      commit('Mutate_Loading', false)
      commit('Mutate_Alert_Message', {
          status: 'error', 
          message: error.message,
          icon: 'error_outline'
      })
    });
} // Password Reset










    


export const ActionAuthStateChange = ({commit },payload) => {
    commit('Mutate_Loading', false)
    commit('Mutate_Clear_Alert_Message')
    commit('Mutate_Firebase_Authenticated_User',payload)
    console.log('ActionAuthStateChange')
    
} //ActionAuthStateChange




/**
 * Alert Message
 * 
 */
export const ActionAlertMessage = ({commit}, payload) => {
    //console.log('Mutate', payload)
    commit('MutateAlertMessage',payload)

} //Action Alert Message


export const ActionClearAlertMessage = ({commit}) => {
    //console.log('Action Clear Alert Message')
    commit('Mutate_Clear_Alert_Message')

} //Action Clear Alert Message

  


/**
 * Flash Message
 * 
 */
export const flashMessage = ({ commit }, message) => {
  commit('setMessage', message)

  setTimeout(() => {
    commit('clearMessage')
  }, 3000)

} //Flash Message






/**
 * Functions
 */

function updateUserProfile(payload) {
    console.log('Update User Profile Here...')
    var user = firebase.auth().currentUser;
    
    user.updateProfile({
      displayName: "Don Puerto",
      photoURL: "https://pbs.twimg.com/profile_images/840198544128585730/mrqyVT5f_400x400.jpg"
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
}