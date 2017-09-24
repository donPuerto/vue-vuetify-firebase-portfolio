/**
 * Firebase User
 */
export const Mutate_Firebase_Authenticated_User = (state, payload) => {
  state.firebaseUser = payload
}


export const Mutate_Clear_Firebase_Authenticated_User = (state) => {
  state.firebaseUser = null
}




/**
 * Clearing Local Storage
 */
export const Mutate_Clear_Sync_Storage = (state) => {
  state.firebaseUser = null
}





/**
 * Loading
 * 
 */
export const Mutate_Loading = (state, payload) => {
  state.loading = payload
}





/**
 * Alert Message
 * 
 */
export const Mutate_Alert_Message = (state, payload) => {
  //console.log('Mutate Alert Message', payload)
  state.alertMessage  = payload;
}


export const Mutate_Clear_Alert_Message = (state) => {
  state.alertMessage = null
}



export const Mutate_Profile_Message = (state, rootState) => {
  //console.log('rootState', rootState)
}



/**
 * Navigation Sidebar
 * 
 */
export const Mutation_Left_SideBar = (state,payload) => {
  console.log('payload',payload)
  state.navSidebars[0].leftsidebar = payload
  //console.log('Mutation_Left_SideBar', payload)
}

export const Mutation_On_Click_Left_SideBar = (state, mutations) => {
  console.log('hit',mutations)
  
  
}
