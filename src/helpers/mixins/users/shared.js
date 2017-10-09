import { validationMixin } from 'vuelidate'
import { required, email,minLength, maxLength   } from 'vuelidate/lib/validators'
import {mapGetters, mapActions} from 'vuex'
export const UserSharedSettingMixin = {
   mixins: [validationMixin],
   validations: {
      // ***** User Detail *****
      firstName: { required, minLength: minLength(2)},
      middleName: { minLength: minLength(2)},
      lastName: { minLength: minLength(2)},
      email: { required, email },
      phone1: { minLength: minLength(8)},
      phone2: { minLength: minLength(8)},
      fax1: { minLength: minLength(8)},
      fax2: { minLength: minLength(8)},


      // ***** Address *****
      streetAddress1: { minLength: minLength(2), maxLength: maxLength(20) },
      streetAddress2: { minLength: minLength(2), maxLength: maxLength(20) },
      state: { minLength: minLength(2), maxLength: maxLength(10) },
      city: { minLength: minLength(2), maxLength: maxLength(10) },
      postalCode: { minLength: minLength(2), maxLength: maxLength(10) },
      country: { minLength: minLength(2), maxLength: maxLength(10) },

   },

   methods: {
      ...mapActions({
         createProfile: 'Users/ActionCreateProfile',
         clearAlertMessage: 'ActionClearAlertMessage',
       }),

      
      onSubmit() {
         this.$v.$touch()
         
         let user = {
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            email: this.email,
            phone1: this.phone1,
            phone2: this.phone2,
            fax1: this.fax1,
            fax2: this.fax2,
            streetAddress1: this.streetAddress1,
            streetAddress2: this.streetAddress2,
            state: this.state,
            city: this.city,
            postalCode: this.postalCode,
            country: this.country,
         }

         if(this.firstName != "" && this.email != "") {
            this.loadingState = true
            this.createProfile(user)
         
         } //if

         return 

      },

       
      onDismissed (){
         //console.log('Dismissed Alert')
         this.clearAlertMessage();
         this.onClear();
       
       },
 
      


      onDelete() {},
      onClear () {
         this.$v.$reset()
         this.firstName = ''
         this.middleName = ""
         this.lastName = ''
         this.email = ''
         this.phone1 = ''
         this.phone2 = ''
         this.fax1 = ''
         this.fax2 = ''
         this.streetAddress1,
         this.streetAddress2,
         this.state,
         this.city,
         this.postalCode,
         this.country,
 
 
         this.loadingState = false
       },
   },

   computed: {
      
      ...mapGetters({
      alertMessage: 'GetterAlertMessage',
      loading: 'GetterLoading',
      user: 'GetterFirebaseUser'
      }),
      
   }, // computed

   watcher: {
      loader () {
          const l = this.loader
          this[l] = !this[l]
  
          setTimeout(() => (this[l] = false), 3000)
  
          this.loader = null
      }
   }, // watcher

   mounted () {
      console.log('Mixins User Shared Settings')
   }
}
