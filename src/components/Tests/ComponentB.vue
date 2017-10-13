<template>
  <div>
     <p>basic event bus: <strong>{{ message }}</strong></p>
     <p>central event bus: <strong>{{ centralMessage}}</strong></p> 
  
  </div>
</template>
<script>
import { EventBus }  from '../../helpers/utilities'
export default {
   data () {
      return {
         message: '',
         centralMessage: ''
      }
   },
   
   created () {
      //received data from event bus
      EventBus.$on('emit-event-bus-data', (data)=> {
         this.message = data
         console.log('on-event-bus-data', data)
      });

      EventBus.$on('central-event-bus-data', (data)=> {
         this.centralMessage = data
         
      });
   }
}
</script>

