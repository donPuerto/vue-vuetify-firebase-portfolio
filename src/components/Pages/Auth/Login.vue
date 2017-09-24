<template>
  <div class="loginComponent">
    <v-container>
      <v-layout row class="mb-1" v-if="alertMessage">
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 lg5 offset-lg4 xl4 offset-xl4 >
          <app-alert @dismissed="onDismissed" :message="alertMessage.message" :status="alertMessage.status" :icon="alertMessage.icon"></app-alert>
        </v-flex>
      </v-layout>

      
      <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 lg5 offset-lg4 xl4 offset-xl4  >
          <v-card>
            <v-card-media src="https://irp-cdn.multiscreensite.com/0e5c5b66/dms3rep/multi/mobile/character-animated-vector.png" height="300px"></v-card-media>  
             <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Login</h3>
                <div>Login with your email address password</div>
              </div>
            </v-card-title>
         
            <v-card-text>
      
              <div class="pb-4">Don't have an account? <span> <a href="" @click.prevent="onRegister" style="text-decoration: none;">Register?</a></span></div> 
              
              <form @submit.prevent="onLogin">
                
                <v-layout row wrap>
                  <v-flex>
                      <v-text-field
                        label="Email Address"
                        v-model="email"
                        :error-messages="emailErrors"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        type="email"
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
                  
                  
                <v-layout>
                  <v-flex row wrap>
                    <v-btn
                    :loading="loadingState"
                    :disabled="loadingState"
                    primary
                    @click="onSubmit"
                    style="margin:0;" 
                  >
                      <v-icon left dark>lock</v-icon>
                        Login
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </v-btn>

                    <v-btn @click="onClear">Clear</v-btn>
                    <div class="pt-2 pb-5"><span><a href=""  @click.stop.prevent="onSubmitForgotPassword" style="text-decoration: none;">Forgot your password?</a></span>    </div>
                  </v-flex>
                </v-layout>

                  
                <!-- Social Provider -->
                <v-layout>
                  <v-flex row wrap class="text-xs-center text-sm-center text-md-center text-lg-center text-xl-center">
                    <div>
                      <span class="pl-3 pr-3" v-tooltip:top="{ html: 'Anonymous Login' }"><v-icon large @click="anonymousLogin">fa-user-secret</v-icon></span>

                      <span class="pl-3 pr-3" v-tooltip:top="{ html: 'Google' }"><v-icon large @click="googleLogin">fa-google</v-icon></span>
            
                      <span class="pl-3 pr-3" v-tooltip:top="{ html: 'Facebook' }"><v-icon large @click="facebookLogin">fa-facebook</v-icon></span>
                  
                      <span class="pl-3 pr-3" v-tooltip:top="{ html: 'Twitter' }"><v-icon large @click="twitterLogin">fa-twitter</v-icon></span>

                      <span class="pl-3 pr-3" v-tooltip:top="{ html: 'Github' }"><v-icon large @click="githubLogin">fa-github</v-icon></span>
                    </div>
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
import { required, email   } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'Vuex'
export default {
  name: 'LoginComponent',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required},
    
  },
  data () {
    return {
      //Rotating Icon
      loader: null,
      loadingState: false,

      email: '',
      password: '',
    }
  }, //data

  methods: {
    onDismissed (){
      //console.log('Dismissed Alert')
      this.clearAlertMessage();
      this.onClear();
      
    },

    ...mapActions({
      loginUser: 'ActionLogin',
      clearAlertMessage: 'ActionClearAlertMessage',
    }),

    onSubmit() {
      if(this.email != "" && this.password != "") {
        this.loadingState = true

        this.loginUser({ email: this.email, password: this.password})
        .then( (res) => {
          //console.log(res)
          if(res === 'Authenticated and Verified User'){
            this.$router.push('/admin')
          }
        })
      }

      return 

    },
    
    onClear () {
      this.$v.$reset()
      this.password = ''
      this.email = ''
      this.loadingState = false
    },

   

    //logins
    anonymousLogin () {},
    googleLogin () {},
    facebookLogin() {},
    twitterLogin () {},
    githubLogin () {},
  },


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
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },
  },


  watch: {
    // user (value) {
    //   console.log('watcher', value);
    //   if(value !== null && value !== undefined) {
    //     this.$router.push('/')
    //   }
    // },
    loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
    }
  }, // watch

  mounted (){
    console.log('Login Vue')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .signin {

  }
</style>
