<template>
   <div class="adminBoardDashboard">
      <h1>Activity Board Dashboard</h1>
      <v-container >
         <v-layout secondary row wrap justify-space-between class="pa-5">
            
            <v-flex xs3 md2>
               <v-select
                
                  v-bind:items="states"
                  v-model="a1"
                  label="Select"
                  autocomplete
             
               ></v-select>
            </v-flex>  
            
            
            <v-spacer></v-spacer>
            <v-flex class="text-sm-right text-md-right text-lg-right pa-0" >
               <v-btn
                  class="ma-0"
               >Create</v-btn>
            </v-flex>
           
            
         </v-layout>

         <v-layout>
            <v-data-table
              v-bind:headers="headers"
              :items="items"
              hide-actions
              class="elevation-1"
            >
            <template slot="items" scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.sodium }}</td>
              <td class="text-xs-right">{{ props.item.calcium }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>

         </v-layout>
      </v-container> 
   </div>         
</template>

<script>
export default {
  name: 'AdminBoardDashboard',
  data () {
   return {
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
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Sodium (mg)', value: 'sodium' },
          { text: 'Calcium (%)', value: 'calcium' },
          { text: 'Iron (%)', value: 'iron' }
      ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
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
     console.log('Admin Board Dashboard')
  }, // mounted

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
