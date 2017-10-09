<template>
  <div class="userDetails">


  </div>
</template>

<script>

import { EventBus }  from '../../../helpers/utilities'


export default {
   name: 'UserDetails',
   
   data () {
      return {
     
      }
   }, //data

   methods: {
      sentData() {
          let user = {
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            email: this.email,
            phone1: this.phone1,
            phone2: this.phone2,
            fax1: this.fax1,
            fax2: this.fax2
          };
          
          EventBus.$emit('emit-event-bus-data', 'Simple Event Bus Working' );
          EventBus.centralEventBusData(user);
          //EventBus.centralEventBusData({user: 'don puerto', age: '38'});
          //EventBus.centralEventBusData(this.user);  
         
      }
   },
  
  mounted (){
    console.log('User Details Vue')
  } //mounted
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
