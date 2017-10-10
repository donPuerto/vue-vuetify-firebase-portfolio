import * as firebase from 'firebase'
/**
 * Firebase API
 */

export const defaultAppConfig =  {
   apiKey: "AIzaSyB0xS8hCnmyGQcYM53T_bB3MUHPndZshUs",
   authDomain: "dp-portfolio.firebaseapp.com",
   databaseURL: "https://dp-portfolio.firebaseio.com",
   projectId: "dp-portfolio",
   storageBucket: "dp-portfolio.appspot.com",
   messagingSenderId: "679574357287"

}

// firebase.initializeApp(defaultAppConfig);
// var database = firebase.database();


//Write 
// export const Write = (payload) => {
   
//    database.ref('users').push(payload)
//    return 'success'

// } // API Register
  















/**
 * Register
 * Login 
 * Logout 
 * Password Reset
 * AutoSignin 
 */



// API Register 
export const Register = (payload) => {
   
   return firebase.auth().createUserWithEmailAndPassword( payload.email, payload.password )

} // API Register
  


// API Login 
export const Login = (payload) => {
     
     return firebase.auth().signInWithEmailAndPassword( payload.email, payload.password )
} // API Login



// API Logout 
export const Logout = () => {
   
   return firebase.auth().signOut()
} // API Logout



// API Password Reset 
export const PasswordReset = (emailAddress) => {
   //console.log('emailAddress', emailAddress)
   var auth = firebase.auth();
   return auth.sendPasswordResetEmail(emailAddress)
   
} // API Password Reset 



