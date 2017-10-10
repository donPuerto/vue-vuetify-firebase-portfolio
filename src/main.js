// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import * as api from '@/helpers/api/firebase'
import * as firebase from 'firebase'



//Customize Components
import MainToolbar from '@/components/shared/Toolbars/MainToolbar_1'
import AlertComponent from './components/Shared/Alerts/Alert'


//Plugins
import Vuelidate from 'vuelidate'
import { mapActions } from 'vuex'



Vue.use(Vuelidate)
Vue.use(Vuetify)

Vue.config.productionTip = false

/**
 * Global Components
 */

Vue.component('app-alert', AlertComponent);
 
//Toolbars
Vue.component('main-toolbar', MainToolbar)


//Navbars


// Firebase Initialization
firebase.initializeApp(api.defaultAppConfig);



const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
  
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },

    methods: {
      ...mapActions({
        authStateChange: 'ActionAuthStateChange',
        logout: 'ActionLogout'
      })
    },

    created () {
      
      
      /** 
       * "Auto Signin" is useful when it is unexpectedly closed the browser, and when you get back 
       * you dont need to sign in again because the cookies was store locally, otherwise you explicitly sign out 
       * cookies will deleted. 
       */
     
      if (firebaseUser) {
       
        let user = {
          uid: firebaseUser.uid,
          appUrl: firebaseUser.A,
          token: firebaseUser.refreshToken,
          email: firebaseUser.email,
          // password: "secretPassword",
          emailVerified: firebaseUser.emailVerified,
          displayName: firebaseUser.displayName,
          phoneNumber: firebaseUser.phoneNumber,
          photoURL: firebaseUser.photoURL,
          //disabled: false   // true for disabled; false for enabled.
         
        }
        
        this.authStateChange(user)  
      } else {
          this.logout
      }
        
      
    

    }, // created
      mounted () { console.log('Main JS')}
  })

  unsubscribe()
}); //onAuthStateChanged