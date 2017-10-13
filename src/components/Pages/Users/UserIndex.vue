<template>
  <div class="userProfile">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm4 md4 lg3 xl3 class="pa-1">

          <v-card dark class="white pt-2 pa-1">
            <v-card-media 
              src='../static/images/DonPuerto.jpg'
              height="500px">
              <v-container fill-height style="margin-top: -6px; margin-left: -12px;"> 
                <v-layout >
                  <v-flex xs12 >
                    <div class="body-2 black--text" style="font-family: 'Libre Barcode 39 Extended', cursive; ">
                      <span style="font-size: 14px;">donpuerto</span>  
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>

            <v-layout justify-space-around class="mb-2">
              
                <div>
                  <a href="https://twitter.com/donpuerto_" style="text-decoration: none; color: black" target="_blank">
                     <v-icon class="">fa-twitter</v-icon>
                  </a>
                </div>
                
                <div>
                  <a href="https://github.com/donPuerto" style="text-decoration: none; color: black" target="_blank">
                      <v-icon class="" >fa-github</v-icon>
                  </a>
                </div>
                <div>
                  <a href="https://dp-portfolio.firebaseapp.com/" style="text-decoration: none; color: black" target="_blank">
                    <v-icon class="">public</v-icon>
                  </a>
                </div>
              
            </v-layout>

           
          
              
            <v-card-text class="black--text">

              <v-subheader>CONTACT</v-subheader>
              <v-layout row justify-space-around class="pa-2">
                <v-flex xs1>
                  <div><v-icon>account_circle</v-icon></div>
                </v-flex>
                <v-flex xs11>
                  <div class="ml-4">Born 1990 in Davao City, Philippines</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around  class="pa-2">
                <v-flex xs1>
                  <div><v-icon>location_city</v-icon></div>
                </v-flex>
                <v-flex xs11>
                  <div class="ml-4">1243 Catalunan Grande, Davao City</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around  class="pa-2">
                <v-flex xs1>
                  <div><v-icon>local_phone</v-icon></div>
                </v-flex>
                <v-flex xs11>
                  <div class="ml-4">+63 926 0967 304</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around  class="pa-2">
                <v-flex xs1>
                  <div><v-icon>mail</v-icon></div>
                </v-flex>
                <v-flex xs11>
                  <div class="ml-4">don.puerto@hotmail.com</div>
                </v-flex>
              </v-layout>

              

             

              
            
            

              <v-subheader class="pt-5 pb-4">SKILLS</v-subheader>
              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>Html5</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>CSS3</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>


              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>Stylus</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>Vanilla JS</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>Typescript</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>


              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>Vue JS</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>Firebase</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>

              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>Laravel</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>


              <v-layout row justify-space-around class="pa-2">
                <v-flex xs10>
                  <div>MySQL</div>
                  <v-slider v-model="value2" thumb-label step="1" snap class="pt-0 pr-0 pl-1"></v-slider> 
                </v-flex>
                <v-flex xs2>
                  <div class="body-1 pl-4 mt-4">{{value2}}%</div>
                </v-flex>
              </v-layout>
                
             
             
              

              

            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm8 md8 lg9 x9 class="pa-1">
          <v-subheader class="pt-4 pb-1">PROFILE</v-subheader>  
          <v-card>
            <v-card-text class="black--text">
              <div class="display-1">DON PUERTO</div>
              <div class="caption">REMOTE WEB DEVELOPER</div>
            </v-card-text>
          </v-card>

          <v-subheader class="pt-4 pb-1">INTRODUCTION</v-subheader>  
           <v-card>
            <v-card-text class="black--text">
              <div class="subheading grey--text">Hi, my name is Don and I am your developer</div>
              <div class="body-2 pb-4">I may not be the best on the market but i have motivation, attitude, hard work and dedication, and determination to complete a task at hand.</div>
       
            </v-card-text>
          </v-card>


          <v-subheader class="pt-4 pb-1">WORKING EXPERIENCE</v-subheader>  
           <v-card>
            <v-card-text class="black--text">
              <div class="subheading grey--text">Revival Group</div>
              <div class="caption">Since March 2015</div>
              <div class="body-2 pb-4">Australia</div>
              

              <div class="subheading grey--text">Junior Web Developer</div>
              <div class="body-2">Vue JS and Firebase</div>
            </v-card-text>
          </v-card>

          <v-subheader class="pt-4 pb-1">EDUCATION</v-subheader>
           <v-card>
            <v-card-text class="black--text">
              <div class="subheading grey--text">Bachelor of Science</div>
              <div class="body-2 pb-4">Computer Engineering</div>

              <div class="subheading grey--text">University of the Immaculate Conception</div>
              <div class="body-2">Davao City, Philippines</div>
            </v-card-text>
          </v-card> 

          <v-subheader class="pt-4 pb-1">QUOTES</v-subheader>
           <v-card>
            <v-card-text class="black--text">
              <blockquote  class="body-2 grey--text">
                <span>John 14:6</span>
                <span>Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me.</span></blockquote >
            

            </v-card-text>
          </v-card>  


        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value2: 80
    }
  }, //data

  created () {


  },
  mounted (){
    console.log('Use Profile Vue')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
