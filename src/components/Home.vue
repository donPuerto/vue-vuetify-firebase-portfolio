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
