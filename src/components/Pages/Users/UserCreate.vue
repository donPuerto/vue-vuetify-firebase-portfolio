<template>
   <div class="userCreate">
      
      <v-container fluid>
        <v-layout row wrap style="overflow-x: scroll;">
          <v-flex xs12>
            <v-card style="min-width: 1012px; ">
              <v-toolbar class="grey darken-1" dark="dark" prominent="prominent" flat="flat">
                <span class="pr-1">
                  <v-icon dark medium right>person</v-icon>
                </span>
                <div class="headline">Add new user</div>
              </v-toolbar>
              <v-card-text >
                <!-- Save Button -->
                <v-layout row wrap  class="pt-3 pb-2 " >
                  
                    <v-btn
                      
                      class="mt-0 mb-0 ml-0 mr-2"
                      success
                      :loading="loadingState"
                      :disabled="loadingState"
                      primary 
                      @click="onSubmit"
                       
                    >
                      Save
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </v-btn>

                    <v-btn 
                      class="white mt-0 mb-0 ml-0 mr-2"
                    >
                      Save & Add Another Contact
                    </v-btn>

                    
                    <v-btn 
                      dark 
                      class="grey lighten-1 mt-0 mb-0 ml-0 mr-2" 
                      @click="onClear">Clear
                    </v-btn>
                    
                    
                    <v-spacer></v-spacer>
                    <v-btn 
                      dark 
                      class="secondary mt-0 mb-0 ml-0 mr-2"
                    >
                      Clone
                    </v-btn>

                    
                    <v-btn 
                      class="mt-0 mb-0 ml-0 mr-0"
                      dark 
                      primary 
                      @click="onDelete">Delete</v-btn>
                  
                </v-layout>
                <!-- Save Button -->
                
               
                <form> <!-- Form -->
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-expansion-panel expand>
                        <!-- USER DETAILS -->
                        <v-expansion-panel-content  v-bind:value="true">
                          <div slot="header"><strong>USER DETAIL</strong> </div>
                          <v-card>
                           
                            <v-card-text class="grey lighten-3" style="overflow-y: scroll;">  <!-- Card Text -->

                                  
                              <!-- First Name, Middle Name, Last Name -->
                              <v-layout row >
                                <v-flex xs3 class="pr-3">
                                  <v-text-field
                                    label="First Name"
                                    v-model="firstName"
                                    :error-messages="firstNameErrors"
                                    @input="$v.firstName.$touch()"
                                    @blur="$v.firstName.$touch()"
                                    type="text"
                                    required
                                  ></v-text-field>
                                </v-flex>

                                <v-flex xs3 class="pr-3">
                                  <v-text-field
                                    label="Middle Name"
                                    v-model="middleName"
                                    :error-messages="middleNameErrors"
                                    @input="$v.middleName.$touch()"
                                    @blur="$v.middleName.$touch()"
                                    type="text"
                                  ></v-text-field>
                                </v-flex>
              
                                <v-flex xs3 class="pr-3">
                                    <v-text-field
                                    label="Last Name"
                                    v-model="lastName"
                                    :error-messages="lastNameErrors"
                                    @input="$v.lastName.$touch()"
                                    @blur="$v.lastName.$touch()"
                                    ></v-text-field>
                                </v-flex>
      
                              </v-layout>
                              <!-- First Name, Middle Name, Last Name -->

                              <!-- Email Name -->
                              <v-layout row>
                                <v-flex xs3 class="pr-3">
                                  <v-text-field
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
                              <!-- Email Name -->


                              <!-- Phone 1, Phone 2 -->
                              <v-layout row>
                                <v-flex xs3 class="pr-3">
                                  <v-text-field
                                    label="Phone 1"
                                    v-model="phone1"
                                    :error-messages="phone1Errors"
                                    @input="$v.phone1.$touch()"
                                    @blur="$v.phone1.$touch()"
                                    required
                                  ></v-text-field>
                                </v-flex>
                            
                            
                                <v-flex xs3 class="pr-3">
                                  <v-text-field
                                    label="Phone 2"
                                    v-model="phone2"
                                    :error-messages="phone2Errors"
                                    @input="$v.phone2.$touch()"
                                    @blur="$v.phone2.$touch()"
                                  ></v-text-field>
                                </v-flex>

                              </v-layout>
                              <!-- Phone 1, Phone 2 -->


                              <!-- Fax 1, Fax 2  -->
                              <v-layout row>
                                <v-flex xs3 class="pr-3">
                                    <v-text-field
                                      label="Fax 1"
                                      v-model="fax1"
                                      :error-messages="fax1Errors"
                                      @input="$v.fax1.$touch()"
                                      @blur="$v.fax1.$touch()"
                                    ></v-text-field>
                                </v-flex>
                              
                                <v-flex xs3 class="pr-3">
                                    <v-text-field
                                      label="Fax 2"
                                      v-model="fax2"
                                      :error-messages="fax2Errors"
                                      @input="$v.fax2.$touch()"
                                      @blur="$v.fax2.$touch()"
                                    ></v-text-field>
                                </v-flex>
                              </v-layout>
                              <!-- Fax 1, Fax 2  --> 


                              <!-- Job Title -->
                              <!-- <v-layout row>  
                                <v-flex xs3>
                                  <v-text-field
                                    
                                    label="Job Title"
                                    v-model="job_title"
                                    :error-messages="job_titleErrors"
                                    @input="$v.job_title.$touch()"
                                    @blur="$v.job_title.$touch()"
                                  ></v-text-field>
                                </v-flex>
                            
                              </v-layout> -->
                              <!-- Job Title -->


                              <!-- Job Title -->
                              <!-- <v-layout row>  
                                <v-flex xs3>
                                  <v-text-field
                                    
                                    type="file" 
                                    id="myFile"
                                    accept="image/*"

                                  ></v-text-field>
                                </v-flex>
                            
                              </v-layout> -->
                              <!-- Job Title -->


                            </v-card-text>  <!-- Card Text -->
                          </v-card> 
                        </v-expansion-panel-content>
                        <!-- USER DETAILS -->


                        <!-- ADDRESS -->
                        <v-expansion-panel-content v-bind:value="true">
                          <div slot="header"><strong>ADDRESS</strong> </div>
                          <v-card>
                            <v-card-text class="grey lighten-3">
                              
                              <!-- streetAddress1, streetAddress2 -->
                              <v-layout row>
                                <v-flex xs3 class="pr-3">
                                  <v-text-field
                                    label="Street Address 1"
                                    v-model="streetAddress1"
                                    :error-messages="streetAddress1Errors"
                                    @input="$v.streetAddress1.$touch()"
                                    @blur="$v.streetAddress1.$touch()"
                                  >
                                  </v-text-field>
                                </v-flex>
                            
                                <v-flex xs3>
                                  <v-text-field
                                    v-model="streetAddress2"
                                    label="Street Address 2"
                                    :error-messages="streetAddress2Errors"
                                    @input="$v.streetAddress2.$touch()"
                                    @blur="$v.streetAddress2.$touch()"
                                  >
                                  </v-text-field>
                                </v-flex> 
                              </v-layout>
                              <!-- streetAddress2 -->


                              <!-- state -->
                              <v-layout row>
                                <v-flex xs3>
                                  <v-text-field
                                    label="State"
                                    v-model="state"
                                    :error-messages="stateErrors"
                                    @input="$v.state.$touch()"
                                    @blur="$v.state.$touch()"
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                              <!-- state -->

                              <!-- city -->
                              <v-layout row>
                                <v-flex xs3>
                                  <v-text-field
                                    label="City"
                                    v-model="city"
                                    :error-messages="cityErrors"
                                    @input="$v.city.$touch()"
                                    @blur="$v.city.$touch()"
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                              <!-- city -->

                              <!-- postal code -->
                              <v-layout row>
                                <v-flex xs3>
                                  <v-text-field
                                    label="Postal Code"
                                    v-model="postalCode"
                                    :error-messages="postalCodeErrors"
                                    @input="$v.postalCode.$touch()"
                                    @blur="$v.postalCode.$touch()"
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                              <!-- postal code -->

                              <!-- country -->
                              <v-layout row>
                                <v-flex xs3>
                                  <v-text-field
                                    label="Country"
                                    v-model="country"
                                    :error-messages="countryErrors"
                                    @input="$v.country.$touch()"
                                    @blur="$v.country.$touch()"
                                  ></v-text-field>
                                </v-flex>
                              </v-layout>
                              <!-- country -->


                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                        <!-- ADDRESS -->

                      </v-expansion-panel>
                  </v-flex>
                </v-layout>
                </form> <!-- Form -->
               

              </v-card-text>
            </v-card>  
          </v-flex>
        </v-layout>



        <v-layout row wrap>
          <v-flex xs12>
              
          </v-flex>
        </v-layout>

         
           
    </v-container>
  </div>
</template>

<script>

import places from 'places.js';


import { EventBus } from '../../../helpers/utilities';
import { UserSharedSettingMixin }  from '../../../helpers/mixins/users/shared'
import { UserDetailsMixin }  from '../../../helpers/mixins/users/user-detail'
import { AddressMixin }  from '../../../helpers/mixins/users/address'


export default {
  name: 'UserCreate',
  mixins: [
      UserSharedSettingMixin, 
      UserDetailsMixin, 
      AddressMixin
  ],
  
  data () {
    return {
      //Rotating Icon
      loader: null,
      loadingState: false,

      userTemp: 'temp',


      //Company Details
      //company: '',
      //job_title: '',

      //Educational Attainment
      //Skills
      
    } //return 
  }, //data


  
  methods: {

  }, //method

  

  


  mounted (){
      console.log('Create Profile Vue')
  } //mounted

} //export default
</script>

