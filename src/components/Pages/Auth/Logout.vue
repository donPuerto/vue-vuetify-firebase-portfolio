<template>
  <div class="logout">
    <v-container>
 
      <v-layout >
        <v-flex xs12>
          <v-card>
           
            <v-card-media src="https://www.zoho.com/creator/images/creator-deluge-characters.png" height="600px" ></v-card-media>  
             <v-card-title primary-title>
              <div >
                <h3 class="headline mb-0">You are now logged out</h3>
                <div>Bye... Have a nice day ahead, Jon Snow ;)</div>
                </div>
            </v-card-title>
            
            <v-card-text class="pb-5">
              <div>You can <span @click="onReturn" style="cursor:pointer"><a>return to the home page</a></span> or <span @click="onLogin" style="cursor:pointer"><a>log in again</a></span></div>
            </v-card-text>
          </v-card>
        </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  name: 'Logout',
  data () {
    return {
      
    }
  }, //data

  methods:{
    onReturn() {
      this.$router.push('/')
    },
    onLogin () {
      this.$router.push('/login')
    },
    
    ...mapActions({
      logout: 'ActionLogout'
    }),
  },



  mounted (){
    this.logout();
    console.log('Logout Vue')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .signout {

  }
</style>
