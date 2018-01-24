// imports
//import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
   // examples
   /**
    Example1:
      added: [],

   Example2:
      checkoutStatus: null
   */
  
} // initial state

// getters
const getters = {
   // examples
   /**
      Example1:
         checkoutStatus: state => state.checkoutStatus,
     
      Example2:
      cartProducts: (state, getters, rootState) => {
         return state.added.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
            title: product.title,
            price: product.price,
            quantity
            }
         })
      },

      Example3:
      cartTotalPrice: (state, getters) => {
         return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
         }, 0)
      }
    * 
   */
   

  
} // getters

// actions
const actions = {
   /**
   
   Example1: 
   checkout ({ commit, state }, products) {
      const savedCartItems = [...state.added]
      commit(types.SET_CHECKOUT_STATUS, null)
      // empty cart
      commit(types.SET_CART_ITEMS, { items: [] })
      shop.buyProducts(
      products,
      () => commit(types.SET_CHECKOUT_STATUS, 'successful'),
      () => {
         commit(types.SET_CHECKOUT_STATUS, 'failed')
         // rollback to the cart saved before sending the request
         commit(types.SET_CART_ITEMS, { items: savedCartItems })
      }
      )
   } //checkout

   */
 
} // actions

// mutations
const mutations = {
   /**
   Example1:
   [types.ADD_TO_CART] (state, { id }) {
    state.checkoutStatus = null
    const record = state.added.find(product => product.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },


  Example2:
  [types.SET_CART_ITEMS] (state, { items }) {
    state.added = items
  },

  Example3:
  [types.SET_CHECKOUT_STATUS] (state, status) {
    state.checkoutStatus = status
  }
   */
  
}

export default {
  state,
  getters,
  actions,
  mutations
}