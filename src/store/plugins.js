import { STORAGE_KEY } from './state'

const SYNC_STORAGE = (store) => {

   
   store.subscribe((mutation, state, getter) => {
      const syncedData = { 
         firebaseUser: state.firebaseUser,  
      }
     
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))

      if (mutation.type === 'Mutate_Clear_Sync_Storage') {
         console.log('mutation.type',mutation.type)
         window.sessionStorage.removeItem(STORAGE_KEY)
      }
   })
}


export default [SYNC_STORAGE]