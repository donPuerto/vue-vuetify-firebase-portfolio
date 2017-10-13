export const STORAGE_KEY = 'dp-portfolio'



let syncedData = {
    firebaseUser: null,
    profileMesage: null
   
}

let notSyncedData = {
    loading: false,
    alertMessage: null,
    snackbarSetup: {
        snackbar: false,
        message: 'snackbar message...',
        timeout: 600000,
        multiline: true,
        layout: false,
        top:true,
        bottom:false,
        right:true,
        left:false,
        color:'success'
    },
    toolbar: [
        {title: 'DONPUERTO'}
    ],
    navSidebars: [
        { leftsidebar: false}
    ]
}


// Sync with local storage.
if (window.sessionStorage.getItem(STORAGE_KEY)) {
    syncedData = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))
    
}    

// Merge data and export it.
export const state = Object.assign(syncedData, notSyncedData)
//console.log('Store State', state)