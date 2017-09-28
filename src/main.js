// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import { firebaseConfig } from './api/firebase'


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


//Firebase Initialization
firebase.initializeApp(firebaseConfig);
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
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          phoneNumber: firebaseUser.phoneNumber,
          phoneUrl: firebaseUser.phoneUrl,
          emailVerified: firebaseUser.emailVerified 
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