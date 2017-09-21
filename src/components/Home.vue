<template>
  <div class="home">
    <v-container fluid fill-height class="application application--dark">
      <v-layout>
        <v-flex class="text-xs-left">
          
          <div 
            class="pt-1" 
            style="font-size: 4em; font-family: 'Anton', sans-serif;"
          >
            Don Puerto
          </div>

          
          <div
            class="pt-0"
            style="font-size: 2em; font-family: 'PT Sans Narrow', sans-serif; margin-top: -20px; padding:0"
          > 
            Powered by Vue.js Framework, Vuetify, and Firebase as Backend
          </div>


          <div
            class="pb-5 pt-1"
            style="font-size: 1.3em; font-family: 'PT Sans Narrow', sans-serif;"
          >
            Looking for a Web Developer? Shoot an email to 
            <strong>
              <span style="color:red">
                don.puerto@hotmail.com
              </span>
            </strong>
          </div>

        
          <div>
            <h5>Work in Progress</h5>
            <ul>
              <li style='text-decoration:line-through;'>Synchronizing Storage and Vuex state 9/15/2017</li>
              <li>Handling firebase user cookies expiration 9/15/2017 - To be delayed (no enough information) will come back soon</li>
              <li>Handling auto Sign in 9/15/2017 - To be delayed, since it is correlated to cookies expiration</li>
              <li style='text-decoration:line-through;'>Adding "Activity Board" menu 9/15/2017</li>
              <li>Will Work on CRUD for User, Address, and Profile - 17/09/2017</li>
            </ul>  
            <br>
            <h5>Future Work Plan</h5>
            <ul>
              <li>Handling Activity or Kanban Board *<code>priority</code>*</li>
            </ul>

            <br>
            <h5>Working with Apps</h5>
            <ul>
              <li>Electron and Vue Electron 16/9/2017</li>
            </ul>    
          </div>



        </v-flex>
      </v-layout>

    </v-container>

  </div>
  
       
     
         
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          name: "DON PUERTO"
        }
      ]
        
  
    }
  }, //data

  
  methods: {
 
  }, //methods

  computed: {
  
  }, // computed

  watch: {
   
  }, // watch

  mounted () {
     console.log('Home Vue')
     this.$store.dispatch('test')
  }, // mounted

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100%; 
    height: 100vh;
  }
  



</style>
