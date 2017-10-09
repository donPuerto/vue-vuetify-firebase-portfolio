export const UserDetailsMixin = {
   data () {
      return {
         //user details
         firstName: '',
         middleName: '',
         lastName: '',
         email: '',
         phone1: '',
         phone2: '',
         fax1: '',
         fax2: '',
      }
   },
   
   computed: {
      
      firstNameErrors () {
         const errors = []
         if (!this.$v.firstName.$dirty) return errors
         !this.$v.firstName.minLength && errors.push('Minimum of two (2) characters is allowed')
         !this.$v.firstName.required && errors.push('A first name is required')
         return errors
      },


      middleNameErrors () {
         const errors = []
         if (!this.$v.middleName.$dirty) return errors
         !this.$v.middleName.minLength && errors.push('Minimum of two (2) characters is allowed')
         return errors
      },

      lastNameErrors () {
         const errors = []
         if (!this.$v.lastName.$dirty) return errors
         !this.$v.lastName.minLength && errors.push('Minimum of two (2) characters is allowed')
         return errors
      },

      emailErrors() {
         const errors = []
         if (!this.$v.email.$dirty) return errors
         !this.$v.email.email && errors.push('Must be valid e-mail')
         !this.$v.email.required && errors.push('E-mail is required')
         return errors
      },

      phone1Errors () {
         const errors = []
         if (!this.$v.phone1.$dirty) return errors
         !this.$v.phone1.minLength && errors.push('Minimum of Eight (8) Characters is not allowed')
         return errors
      },

      phone2Errors () {
         const errors = []
         if (!this.$v.phone2.$dirty) return errors
         !this.$v.phone2.minLength && errors.push('Minimum of Eight (8) Characters is not allowed')
         return errors
      },

      fax1Errors() {
         const errors = []
         if (!this.$v.fax1.$dirty) return errors
         !this.$v.fax1.minLength && errors.push('Minimum of Eight (8) Characters is not allowed')
         return errors

      },

      fax2Errors() {
         const errors = []
         if (!this.$v.fax2.$dirty) return errors
         !this.$v.fax2.minLength && errors.push('Minimum of Eight (8) Characters is not allowed')
         return errors

      },
   
   },

   mounted () {
      console.log('Mixins User Details')
   }
}


