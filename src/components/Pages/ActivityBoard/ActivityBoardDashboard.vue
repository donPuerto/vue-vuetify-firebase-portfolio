<template>
   <div class="adminBoardDashboard">
      <h1>Activity Board Dashboard</h1>
      <v-container >
         <v-layout secondary row wrap class="pa-1 grey lighten-3">
            <v-flex xs12>
              <v-btn class="blue--text text--lighten-2" @click="sort  = !sort">
              <v-icon left >filter_list</v-icon>
                Filter
              </v-btn>
            </v-flex>

            <transition
                mode="out-in"
                enter-to-class="animated slideInDown"
                leave-to-class="animated fadeOut"
            >
              <v-flex xs12 v-if="sort" class="pa-2">
                <ul>
                  <li>Open</li>
                  <li>Closed</li>
                </ul>
              </v-flex>
            </transition>  
            
            
     
            
         </v-layout>

         <v-layout>
            <v-data-table
              v-bind:headers="headers"
              :items="items"
              hide-actions
              class="elevation-1"
            >
            <template slot="items" scope="props">
              <td>{{ props.item.category }}</td>
              <td class="text-xs-right">{{ props.item.user_name }}</td>
              <td class="text-xs-right">{{ props.item.description }}</td>
              <td class="text-xs-right">{{ props.item.created_date }}</td>
              <td class="text-xs-right">{{ props.item.updated_date }}</td>
              <td class="text-xs-right">
                <v-btn icon class="grey--text" @click.stop="open(props.item,$event)">
                      <v-icon>comment</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
     
         </v-layout>

         <v-layout row justify-center >
            <v-dialog v-model="dialog" persistent width="50%">
              <v-card  class="dialog-info">

                <v-card-title  style="background-color: #9E9E9E"> <span class="headline" >{{ itemSelected.category }}</span> </v-card-title>
                
                <v-card-text>
                  
                  <v-layout class="pa-2 pl-3 grey lighten-4">
                    <div style="display: flex; align-items: center"><span class="title" >Status <code v-if="e1 == !null">{{e1.text }}</code></span></div>
                    <v-spacer></v-spacer>
                    <v-btn class="primary light-blue darken-4 pa-0"  @click.native="dialog = false">Change</v-btn>
                  </v-layout>
                  <div class="pt-1"></div>
                  <v-select
                    v-bind:items="status"
                    v-model="e1"
                    label="Select"
                    single-line
                    bottom
                  ></v-select>

                  <div class="pt-3"></div>
                  <v-layout class="pa-2 pl-3 grey lighten-4">
                    <div style="display: flex; align-items: center"><span class="title" >Edit Section</span></div>
                    <v-spacer></v-spacer>
                    <v-btn class="primary light-blue darken-4 pa-0"  @click.native="dialog = false">Save</v-btn>
                  </v-layout>
                  <div class="pt-3"></div>
                  <v-text-field label="User Name" v-model="itemSelected.user_name" disabled></v-text-field>
                  <v-text-field label="Category" v-model="itemSelected.name" required></v-text-field>
                  <v-text-field label="Description" v-model="itemSelected.description" ></v-text-field>
                  <v-text-field label="Created Date" v-model="itemSelected.created_date" disabled></v-text-field>
                  <v-text-field label="Updated Date" v-model="itemSelected.updated_date" disabled></v-text-field>
                 
                 
                  <v-layout class="pa-2 pl-3  grey lighten-4">
                    <div style="display: flex; align-items: center"><span class="title" >Delete Section</span></div>
                    <v-spacer></v-spacer>
                    <v-btn class="primary darken-1 pa-0"  @click.native="dialog = false">Delete</v-btn>
                  </v-layout>

                  <div class="pt-3"></div>

                  
                  <div>
                    Delete <code>{{ itemSelected.category }}</code>
                  </div>
                  <div>
                    <blockquote style="font-size: 14px">Once you delete a project, there is no going back. Please be certain.</blockquote>
                  </div>
                  
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                   <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
                  
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
           
        
      </v-container> 
   </div>         
</template>

<script>
export default {
  name: 'AdminBoardDashboard',
  data () {
    return {
      sort: true,
      e1:  null,
      status: [
          { text: 'Open' },
          { text: 'Close' },
    
      ],
      dialog: false,
      itemSelected: {},
      a1: null,
      states: [
         'Alabama','Alaska','American Samoa','Arizona',
         'Arkansas','California','Colorado','Connecticut',
         'Delaware','District of Columbia','Federated States of Micronesia',
         'Florida','Georgia','Guam','Hawaii','Idaho',
         'Illinois','Indiana','Iowa','Kansas','Kentucky',
         'Louisiana','Maine','Marshall Islands','Maryland',
         'Massachusetts','Michigan','Minnesota','Mississippi',
         'Missouri','Montana','Nebraska','Nevada',
         'New Hampshire','New Jersey','New Mexico','New York',
         'North Carolina','North Dakota','Northern Mariana Islands','Ohio',
         'Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico',
         'Rhode Island','South Carolina','South Dakota','Tennessee',
         'Texas','Utah','Vermont','Virgin Island','Virginia',
         'Washington','West Virginia','Wisconsin','Wyoming'
      ],

      headers: [
          {
            text: 'Category Name',
            align: 'left',
            sortable: false,
            value: 'category'
          },
          { text: 'User Name', align: 'center', value: 'user_name' },
          { text: 'Description',  align: 'center', value: 'description'  },
          { text: 'Created Date',  align: 'right', value: 'created_date'},
          { text: 'Updated Dated', align: 'right', value: 'updated_date' },
          { text: 'Action',  align: 'right', value: '', sortable: false, },
      ],
      items: [
        {
          value: false,
          category: 'Unit Test',
          user_name: 'Don Puerto',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          created_date: 6.0,
          updated_date: 24,
      
        },
        {
          value: false,
          category: 'Unit Test',
          user_name: 'Rechel Puerto',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          created_date: 6.0,
          updated_date: 24,
         
        },
        {
          value: false,
          category: 'Unit Test',
          user_name: 'Samantha Kaylee Puerto',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          created_date: 6.0,
          updated_date: 24,
         
        },
        {
        value: false,
          category: 'Unit Test',
          user_name: 'Marcus Ethan Puerto',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          created_date: 6.0,
          updated_date: 24,
       
        },
      ],

      
   } // return
  

  }, //data

  methods: {
   
    open(item,e){
     
      this.itemSelected = item;
      this.dialog = true;
    }
  }, //methods

  computed: {
          binding () { /*Operates repsonsive grid*/
        const binding = {}
		if (this.$vuetify.breakpoint.smAndDown) binding.column = true
		return binding
      }
  }, // computed

  watch: {
   
  }, // watch

  mounted () {
     console.log('Admin Board Dashboard')
  }, // mounted

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dialog {
    min-width: 400px; 
    overflow:auto !important;
  }
</style>
