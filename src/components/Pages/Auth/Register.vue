<template>
  <div class="registerComponent">
    <v-container>
      <v-layout row class="mb-1" v-if="alertMessage">
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 lg5 offset-lg4 xl4 offset-xl4 >
          <app-alert @dismissed="onDismissed" :message="alertMessage.message" :status="alertMessage.status" :icon="alertMessage.icon"></app-alert>
        </v-flex>
      </v-layout>
      
      <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 lg5 offset-lg4 xl4 offset-xl4 >
          <v-card>
            <v-card-media src="http://zep-com.net/wp-content/uploads/2015/05/Languages-1024x618.png" height="300px"></v-card-media>  
             <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Register</h3>
                <div>Welcome! register by entering your email address and password</div>
              </div>
            </v-card-title>

            <v-card-text class="pb-4">
                           
              <form>
                <v-layout row wrap>
                  <v-flex >
                      <v-text-field
                        label="Email Address"
                        v-model="email"
                        :error-messages="emailErrors"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        required
                      ></v-text-field>
                  </v-flex>
                </v-layout>


                <v-layout row wrap>
                  <v-flex>
                      <v-text-field
                        label="Password"
                        v-model="password"
                        type="password"
                        :error-messages="passwordErrors"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        required
                      ></v-text-field>
                  </v-flex>
                </v-layout>


                <v-layout row wrap>
                  <v-flex>
                    <v-text-field
                      label="Repeat Password"
                      v-model="repeatPassword"
                      type="password"
                      :error-messages="repeatPasswordErrors"
                      @input="$v.repeatPassword.$touch()"
                      @blur="$v.repeatPassword.$touch()"
                      required
                      ></v-text-field>
                  </v-flex>
                </v-layout>

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
                      Register
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
import { required, maxLength, email, sameAs, minLength, alphaNum   } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'Vuex'

export default {
  name: 'RegisterComponent',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required,  minLength: minLength(6), alphaNum },
    repeatPassword: { required, sameAsPassword: sameAs('password'), alphaNum },
  },
  data () {
    return {
      //Rotating Icon
      loader: null,
      loadingState: false,

      //Form
      email: '',
      password: '',
      repeatPassword: '',
    }
  }, //data

  methods: {
    
    onDismissed (){
      //console.log('Dismissed Alert')
      this.clearAlertMessage();
      this.onClear();
      
    },

    ...mapActions({
      clearAlertMessage: 'ActionClearAlertMessage',
      registerUser: 'ActionRegisterUser'
    }),

    onSubmit () {
      //console.log(this.$v)
      if(this.email != "" && this.password != "" && this.repeatPassword != "") {
        this.loadingState = true

        this.registerUser({email: this.email, password: this.password})
     
      }
      return 
      
    },
    onClear () {
      this.$v.$reset()
      this.repeatPassword = ''
      this.password = ''
      this.email = ''
      this.loadingState = false
    },

    
    

    


  },// method

  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }

  }, //watcher


  computed: {
    ...mapGetters({
      alertMessage: 'GetterAlertMessage',
      //loading: 'GetterLoading',
      user: 'GetterFirebaseUser'
    }),

    //erros validation
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },

    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Password must be at least 6 characters long.')
      this.$v.password.alphaNum && errors.push('Password must have atleast 1 alphanumeric.')
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },

    repeatPasswordErrors () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords must be identical.')
      !this.$v.password.required && errors.push('Repeat Password is required.')
      return errors
    },
 
   
  

  }, // Computed

  mounted (){
    console.log('Register Vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
