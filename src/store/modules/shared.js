/**
 * Shared Settings
 * - Toolbar
 * - Navbar
 */

// initial state
const state = {
   drawer: false,
   socials: [
    { icon: 'fa-github-square', href: 'https://github.com/vuetifyjs/vuetify' },
    { icon: 'fa-twitter-square', href: 'https://twitter.com/vuetifyjs' },
    { icon: 'fa-facebook-square', href: 'https://www.facebook.com/vuetifyjs' },
    { icon: 'fa-comment', href: 'https://chat.vuetifyjs.com' }
  ],
  items: [
    { icon: 'perm_identity', text: 'PROFILE' },
  ],
  //toolbars
  isVisible: {
    toolbar: false,
    navbar:false,
    footer:false,
  }
}


// getters
const getters = {
   GettersDrawer: state => state.drawer,
   GettersSocials: state => state.socials,
   GettersItems: state => state.items,
   GettersIsVisible: state => state.isVisible,
 }
 
// mutations
const mutations = {
   MutateMessage (state, payload) {
     state.message = payload
   
   },
   MutateDrawer (state, payload) {
    state.drawer = payload
  
  },
}


// actions
const actions = {
   ActionMessage ({ commit}, payload ) {
     //console.log('toolbar', payload)
     commit('MutateMessage', payload )
   },
   ActionDrawer ({ commit}, payload ) {
    console.log('toolbar', payload)
    commit('MutateDrawer', payload )
  }
 }
 
 //Export File
 export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
 } 