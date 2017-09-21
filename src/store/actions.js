import * as firebase from 'firebase'

/**
 * 
 * Login, Logout, Register, AutoSignin
 * 
 */

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
} //ActionRegisterUser




export const ActionLogin = ({commit, dispatch}, payload) => {
    console.log('Action Login Payload', payload)

    commit('Mutate_Loading', true)
    commit('Mutate_Clear_Alert_Message')


    return firebase.auth().signInWithEmailAndPassword( payload.email, payload.password )
        .then( (firebaseUser) => {
            
            commit('Mutate_Loading', false)  
    
            if(firebaseUser.emailVerified){
               
                commit('Mutate_Firebase_Authenticated_User', firebaseUser)
                return 'Authenticated and Verified User'
            }   
            commit('Mutate_Alert_Message', {
                status: 'success', 
                message: 'User successfully login with email and password. Check your email for verification.', 
                icon: 'check_circle'
            })
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

} // Action Login



// logout
export const ActionLogout = ({commit}) => {
    commit('Mutate_Loading', true)
    commit('Mutate_Clear_Alert_Message')

    firebase.auth().signOut().then(function(user) {
        //console.log('Sign-out successful.')
        commit('Mutate_Firebase_Authenticated_User', null)
        
        }).catch(function(error) {
            commit('Mutate_Loading', true)
            commit('Mutate_Alert_Message', {
                status: 'error', 
                message: error.message,
                icon: 'error_outline'
        })
    });
      
        
} //logout
    


export const ActionAuthStateChange = ({commit, getters}) => {
    commit('Mutate_Loading', true)
    commit('Mutate_Clear_Alert_Message')

    firebase.auth().onAuthStateChanged( (firebaseUser)=> {
        console.log('Auth Firebase',firebaseUser)
        
        //Trap error during signout
        if (firebaseUser === null) return
        commit('Mutate_Loading', false)
    });
   
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



export const test = ({ commit, dispatch, rootState }) => {
    console.log('rootState',rootState)
  
  
  
  } //Fla