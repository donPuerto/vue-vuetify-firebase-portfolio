import store from '../store/index'


export default (to, from, next) => {
     //console.log('auth guard getters', store);
     if (store.getters.GetterFirebaseUser) {
          next ()
     } else {
          next ('/login')
     }
}