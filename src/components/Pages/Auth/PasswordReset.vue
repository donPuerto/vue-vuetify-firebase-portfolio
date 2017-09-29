<template>
  <div class="passwordReset">
    <v-container>
      <v-layout row class="mb-1" v-if="alertMessage">
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 lg5 offset-lg4 xl4 offset-xl4 >
          <app-alert @dismissed="onDismissed" :message="alertMessage.message" :status="alertMessage.status" :icon="alertMessage.icon"></app-alert>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1 md6 offset-md3 lg5 offset-lg4 xl4 offset-xl4  >
          <v-card>
            <v-card-media src="https://www.genymotion.com/wp-content/themes/genymobile/img/page-reset-password/genymotion-android-simulator-reset-password.svg" height="300px"></v-card-media>  
             <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Forgot your password?</h3>
                <div>Enter your email address and click send</div>
              </div>
            </v-card-title>
         
            <v-card-text>
      
              <form @submit.prevent="onSend">
                
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
                  
                  
                <v-layout>
                  <v-flex row wrap>
                    <v-btn
                    :loading="loadingState"
                    :disabled="loadingState"
                    primary
                    @click="onSend"
                    style="margin:0;" 
                  >
                      <v-icon left dark>lock</v-icon>
                        Send
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
import { required, email   } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'Vuex'
export default {
  name: 'PasswordReset',
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    
  },
  data () {
    return {
       //Rotating Icon
      loader: null,
      loadingState: false,

      email: '',
    }
  },
  methods: {
    ...mapActions({
      passwordReset: 'ActionPasswordReset',
      clearAlertMessage: 'ActionClearAlertMessage',
      
    }),


    onDismissed (){
      //console.log('Dismissed Alert')
      this.clearAlertMessage();
      this.onClear();
      
    },

    onSend() {
      if(this.email != "") {
        this.loadingState = true
        this.passwordReset(this.email)
      }

      return 

    },
    
    onClear () {
      this.$v.$reset()
      this.password = ''
      this.email = ''
      this.loadingState = false
    },


  },
  computed: {
    ...mapGetters({
      alertMessage: 'GetterAlertMessage',
      
    }),

    //erros validation
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },
  mounted (){
    console.log('Password Reset')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
