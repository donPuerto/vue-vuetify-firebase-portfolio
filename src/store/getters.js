/**
 * Firebase User
 * 
 */
export const GetterFirebaseUser = (state) => {
  return state.firebaseUser
}



/**
 * Loading
 * 
 */
export const GetterLoading = (state) => {
  return state.loading
}



/**
 * Alert Message
 * 
 */
export const GetterAlertMessage = (state) => {
  return state.alertMessage
}



/**
 * Toolbar
 * 
 */
export const GetterToolbarTitle = (state) => {
  return state.toolbar[0].title
}


/**
 * Nav Sidebars
 * 
 */
export const GetterLeftSidebar = (state) => {
  return state.navSidebars[0].leftsidebar
}





