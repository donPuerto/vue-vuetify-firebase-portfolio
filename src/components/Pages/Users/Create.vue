<template>
   <div class="createProfile">
      
      <v-container>
         <v-layout row class="mb-1" v-if="alertMessage">
         <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg4 offset-lg4 xl4 offset-xl4 >
            <app-alert @dismissed="onDismissed" :message="alertMessage.message" :status="alertMessage.status" :icon="alertMessage.icon"></app-alert>
         </v-flex>
         </v-layout>
      
         <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg4 xl4 offset-xl4 >
               <v-card class="grey lighten-4">
                  <v-card-media src="https://media.giphy.com/media/K5kfQExKk731K/giphy.gif" height="200px"></v-card-media>  
                  <v-card-title primary-title>
                     <div>
                        <h3 class="headline mb-0">Create Profile</h3>
                        <div>Fill up your information</div>
                     </div>
                  </v-card-title>

                  <v-card-text>
                              
                  <form>
                      <v-layout row wrap>
                        <v-flex>    
                          <header class="subheading primary--text pt-5">User Information</header>
                        </v-flex>
                      </v-layout>

                      <v-layout row wrap>
                        <v-flex class="pr-1">
                          <v-text-field
                            box
                            label="First Name"
                            v-model="firstName"
                            :error-messages="firstNameErrors"
                            @input="$v.firstName.$touch()"
                            @blur="$v.firstName.$touch()"
                            type="text"
                            required
                          ></v-text-field>
                        </v-flex>

                        <v-flex class="pl-1">
                          <v-text-field
                            box
                            label="Last Name"
                            v-model="lastName"
                            :error-messages="lastNameErrors"
                            @input="$v.lastName.$touch()"
                            @blur="$v.lastName.$touch()"
                          ></v-text-field>
                        </v-flex>
                     
                      </v-layout>


                      <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                              box
                              label="Email"
                              v-model="email"
                              type="email"
                              :error-messages="emailErrors"
                              @input="$v.email.$touch()"
                              @blur="$v.email.$touch()"
                              required
                            ></v-text-field>
                        </v-flex>
                      </v-layout>


                      <v-layout row wrap>
                        <v-flex class="pr-1">
                            <v-text-field
                              box
                              label="Phone 1"
                              v-model="phone1"
                              :error-messages="phone1Errors"
                              @input="$v.phone1.$touch()"
                              @blur="$v.phone1.$touch()"
                            ></v-text-field>
                        </v-flex>

                        <v-flex class="pl-1">
                            <v-text-field
                              box
                              label="Phone 2"
                              v-model="phone2"
                              :error-messages="phone2Errors"
                              @input="$v.phone2.$touch()"
                              @blur="$v.phone2.$touch()"
                            ></v-text-field>
                        </v-flex>

                      </v-layout>


                      <v-layout row wrap>
                        <v-flex class="pr-1">
                            <v-text-field
                              box
                              label="Fax 1"
                              v-model="fax1"
                              :error-messages="fax1Errors"
                              @input="$v.fax1.$touch()"
                              @blur="$v.fax1.$touch()"
                            ></v-text-field>
                        </v-flex>

                        <v-flex class="pl-1">
                            <v-text-field
                              box
                              label="Fax 2"
                              v-model="fax2"
                              :error-messages="fax2Errors"
                              @input="$v.fax2.$touch()"
                              @blur="$v.fax2.$touch()"
                            ></v-text-field>
                        </v-flex>
                        
                      </v-layout>

            
                     <!--  <v-layout row wrap>
                        <v-flex>    
                          <header class="subheading pt-5 primary--text">Address</header>
                        </v-flex>
                      </v-layout>

                      <v-layout row wrap>

                        <v-flex class="pr-1">
                            <v-text-field
                              box
                              id="searchTextField"
                              v-model="streetAddress1"
                              label="Street Address 1"
                            ></v-text-field>
                        </v-flex>

                      

                        <!-- <v-flex class="pl-1">
                            <v-select
                              box
                              v-bind:items="items"
                              v-model="streetAddress2"
                              label="Address 2"
                               autocomplete
                            ></v-select>
                        </v-flex> 

                      </v-layout>-->

                  <!--

                      <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                              box
                              label="State"
                              v-model="state"
                              :error-messages="stateErrors"
                              @input="$v.state.$touch()"
                              @blur="$v.state.$touch()"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>


                      <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                              box
                              label="City"
                              v-model="city"
                              :error-messages="cityErrors"
                              @input="$v.city.$touch()"
                              @blur="$v.city.$touch()"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                              box
                              label="Postal Code"
                              v-model="postalCode"
                              :error-messages="postalCodeErrors"
                              @input="$v.postalCode.$touch()"
                              @blur="$v.postalCode.$touch()"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                              box
                              label="Country"
                              v-model="country"
                              :error-messages="countryErrors"
                              @input="$v.country.$touch()"
                              @blur="$v.country.$touch()"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>


                      <v-layout row wrap>
                        <v-flex>    
                          <header class="subheading pt-5 primary--text">Profile Information</header>
                        </v-flex>
                      </v-layout>

                       <v-layout row wrap>
                        <v-flex>
                            <v-text-field
                              box
                              label="Intro"
                              v-model="intro"
                              multi-line
                              rows="3"
                              :error-messages="introErrors"
                              @input="$v.intro.$touch()"
                              @blur="$v.intro.$touch()"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs9 sm9>
                            <v-text-field
                              box
                              label="Quotes"
                              v-model="quotes"
                              :error-messages="quotesErrors"
                              @input="$v.quotes.$touch()"
                              @blur="$v.quotes.$touch()"
                            >
                            </v-text-field>
                           
                           
                        </v-flex>
                        
                        <v-flex xs1 sm1 class="text-center">
                          <v-btn primary small style="padding:0; margin-top:18px;"><v-icon>add</v-icon></v-btn>
                          <v-btn primary small style="padding:0; margin-top:-4px;"><v-icon>remove</v-icon></v-btn>
                        </v-flex>    
                      </v-layout> -->



                      <v-layout class="pb-5 pt-3">  
                        <v-flex row wrap>
            
                        <v-btn
                            :loading="loadingState"
                            :disabled="loadingState"
                            primary 
                            @click="onSubmit"
                            style="margin:0;" 
                            >
                            <v-icon left dark>face</v-icon>
                            Create Profile
                            <span slot="loader" class="custom-loader">
                              <v-icon light>cached</v-icon>
                            </span>
                        </v-btn>

                        <v-btn @click="onClear">Clear</v-btn>
                        </v-flex>
                      </v-layout>
                  </form>
                  </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email,minLength, maxLength   } from 'vuelidate/lib/validators'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'CreateProfile',
  mixins: [validationMixin],
  validations: {
    firstName: { required, minLength: minLength(2), maxLength: maxLength(10) },
    lastName: { minLength: minLength(2), maxLength: maxLength(10) },
    email: { required, email },
    phone1: { minLength: minLength(4), maxLength: maxLength(10) },
    phone2: { minLength: minLength(4), maxLength: maxLength(10) },
    fax1: { minLength: minLength(4), maxLength: maxLength(10) },
    fax2: { minLength: minLength(4), maxLength: maxLength(10) },
    // select: { required },
    // checkbox: { required }

    
  },
  data () {
    return {
      //Rotating Icon
      loader: null,
      loadingState: false,

      //Form Elements
      firstName: '',
      lastName: '',
      email: '',
      phone1: '',
      phone2: '',
      fax1: '',
      fax2: '',

      //Google Map
      streetAddress1: '',
      streetAddress2: '',
      
    } //return 
  }, //data


  
  methods: {

      onDismissed (){
        //console.log('Dismissed Alert')
        this.clearAlertMessage();
        this.onClear();
      
      },

      ...mapActions({
        createProfile: 'Profile/ActionCreateProfile',
        clearAlertMessage: 'ActionClearAlertMessage',
      }),

      onSubmit() {
        
        if(this.firstName != "" && this.email != "") {
          this.loadingState = true

          this.createProfile({ 
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email, 
            phone1: this.phone1,
            phone2: this.phone2,
            fax1: this.fax1,
            fax2: this.fax2,
          })
          .then( (res) => {
            //console.log(res)
            if(res === 'Profile Created Successfully'){
              this.$router.push('/profile')
            }
          })
        } //if

        return 

      },
    
      onClear () {
        this.$v.$reset()
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone1 = ''
        this.phone2 = ''
        this.fax1 = ''
        this.fax2 = ''


        this.loadingState = false
      },

  }, //method

  computed: {

    ...mapGetters({
      alertMessage: 'GetterAlertMessage',
      loading: 'GetterLoading',
      user: 'GetterFirebaseUser'
    }),


    //erros validation
    firstNameErrors () {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.minLength && errors.push('Minimum of Two (2) Characters are allowed.')
      !this.$v.firstName.maxLength && errors.push('Maximum of Ten (10) Characters is allowed')
      !this.$v.firstName.required && errors.push('A first name is required')
      return errors
    },


    lastNameErrors () {
      const errors = []
      if (!this.$v.lastName.$dirty) return errors
      !this.$v.lastName.minLength && errors.push('Minimum of Two (2) Characters are allowed.')
      !this.$v.lastName.maxLength && errors.push('Maximum of Ten (10) Characters is allowed')
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
      !this.$v.phone1.minLength && errors.push('Minimum of Four (4) Characters are allowed.')
      !this.$v.phone1.maxLength && errors.push('Maximum of Ten (10) Characters is allowed')
      return errors
    },

    phone2Errors () {
      const errors = []
      if (!this.$v.phone2.$dirty) return errors
      !this.$v.phone2.minLength && errors.push('Minimum of Four (4) Characters are allowed.')
      !this.$v.phone2.maxLength && errors.push('Maximum of Ten (10) Characters is allowed')
      return errors
    },

    fax1Errors() {
      const errors = []
      if (!this.$v.fax1.$dirty) return errors
      !this.$v.fax1.minLength && errors.push('Minimum of Four (4) Digits are allowed.')
      !this.$v.fax1.maxLength && errors.push('Maximum of Ten (10) Digits are allowed')
      return errors

    },

    fax2Errors() {
      const errors = []
      if (!this.$v.fax2.$dirty) return errors
      !this.$v.fax2.minLength && errors.push('Minimum of Four (4) Digits are allowed.')
      !this.$v.fax2.maxLength && errors.push('Maximum of Ten (10) Digits are allowed')
      return errors

    }


  }, // computed

  watcher: {
    loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
    }
  }, // watcher


  created () {
   
  }, //created

  mounted (){
      var input = document.getElementById('searchTextField');
      // var options = {componentRestrictions: {country: 'us'}};
      new google.maps.places.Autocomplete(input);

    console.log('Create Profile Vue')
  } //mounted

} //export default
</script>


<style scoped>

</style>
