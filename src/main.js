// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import * as firebase from 'firebase'


//Customize Components
import Toolbar27MAY2017 from '@/components/shared/Toolbars/Toolbar27MAY2017'
import LeftSideSidebar from '@/components/shared/NavigationBars/LeftSideBar'
import RightSideSidebar from '@/components/shared/NavigationBars/RightSideBar'
import AlertComponent from './components/Shared/Alerts/Alert'
import ActivityBoard from './components/customs/ActivityBoard'

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
Vue.component('main-toolbar', Toolbar27MAY2017)


//Navbars
Vue.component('main-left-sidebar', LeftSideSidebar)
Vue.component('main-right-sidebar', RightSideSidebar)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },

  methods: {
    ...mapActions({
      authStateChange: 'ActionAuthStateChange'
    })
  },

  created () {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB0xS8hCnmyGQcYM53T_bB3MUHPndZshUs",
      authDomain: "dp-portfolio.firebaseapp.com",
      databaseURL: "https://dp-portfolio.firebaseio.com",
      projectId: "dp-portfolio",
      storageBucket: "dp-portfolio.appspot.com",
      messagingSenderId: "679574357287"
    };
    firebase.initializeApp(config);

    /** 
     * "Auto Signin" is useful when it is unexpectedly closed the browser, and when you get back 
     * you dont need to sign in again because the cookies was store locally, otherwise you explicitly sign out 
     * cookies will deleted. 
     */
    this.authStateChange();


  }, // created
  mounted () { console.log('Main JS')}
})
