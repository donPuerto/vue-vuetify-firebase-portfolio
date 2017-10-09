
export const AddressMixin = {

   data () {
      return {
         //Address
         streetAddress1: '',
         streetAddress2: '',
         state: '',
         city: '',
         postalCode: '',
         country: '',
        
      }
   },
   
   computed: {
      
      streetAddress1Errors () {
         const errors = []
         if (!this.$v.streetAddress1.$dirty) return errors
         !this.$v.streetAddress1.minLength && errors.push('Minimum of Two (2) Characters are not allowed.')
         !this.$v.streetAddress1.maxLength && errors.push('Maximum of Twenty (20) Characters is allowed')
         return errors
      },

      streetAddress2Errors () {
         const errors = []
         if (!this.$v.streetAddress2.$dirty) return errors
         !this.$v.streetAddress2.minLength && errors.push('Minimum of Two (2) Characters are not allowed.')
         !this.$v.streetAddress2.maxLength && errors.push('Maximum of Twenty (20) Characters is allowed')
         return errors
      },


      stateErrors () {
         const errors = []
         if (!this.$v.state.$dirty) return errors
         !this.$v.state.minLength && errors.push('Minimum of Two (2) Characters are not allowed.')
         !this.$v.state.maxLength && errors.push('Maximum of Twenty (20) Characters is allowed')
         return errors
      },

      cityErrors () {
         const errors = []
         if (!this.$v.city.$dirty) return errors
         !this.$v.city.minLength && errors.push('Minimum of Two (2) Characters are not allowed.')
         !this.$v.city.maxLength && errors.push('Maximum of Twenty (20) Characters is allowed')
         return errors
      },

      postalCodeErrors () {
         const errors = []
         if (!this.$v.postalCode.$dirty) return errors
         !this.$v.postalCode.minLength && errors.push('Minimum of Two (2) Characters are not allowed.')
         !this.$v.postalCode.maxLength && errors.push('Maximum of Twenty (20) Characters is allowed')
         return errors
      },


      countryErrors () {
         const errors = []
         if (!this.$v.country.$dirty) return errors
         !this.$v.country.minLength && errors.push('Minimum of Two (2) Characters are not allowed.')
         !this.$v.country.maxLength && errors.push('Maximum of Twenty (20) Characters is allowed')
         return errors
      },

   
   },

   mounted () {
      console.log('Mixins Address')
   }
}


