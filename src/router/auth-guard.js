import store from '../store/index'
import * as firebase from 'firebase'



export default (to, from, next) => {

   //const user = firebase.auth().currentUser
   if (store.getters.GetterFirebaseUser) {
      //console.log('auth guard getters', store.getters.GetterFirebaseUser);
      next ()
   } else {
         next ('/login')
   }
}