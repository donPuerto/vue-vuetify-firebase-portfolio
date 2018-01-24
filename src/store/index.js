// core
import Vue from 'vue'
import Vuex from 'vuex'

// Vuex state
import * as actions from './actions'


// modules
import * as template from './modules/template'


//plugins
import createPersistedState from 'vuex-persistedstate'

const key = 'myVuex';
const vuexLocalStorage = createPersistedState({
   key: key,
   paths: [],
   storage: {
      getItem: key => window.localStorage.getItem(key),
      setItem: (key, state) => window.localStorage.setItem(key, state, { expires: 1, secure: false }),
      removeItem: key => window.localStorage.removeItem(key)
   },
   reducer: state => ({
      template: state.template.message2
   }),
});

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
   plugins: [vuexLocalStorage],
   strict: debug,
   actions,
   modules: {
      template,
   }
  
})


export default store

