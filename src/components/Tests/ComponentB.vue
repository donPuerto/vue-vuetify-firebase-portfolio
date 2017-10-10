<template>
  <div>
     {{ message }} <br>
     {{ centralMessage}}
  </div>
</template>
<script>
import { EventBus }  from '../../../helpers/utilities'
export default {
   data () {
      return {
         message: '',
         centralMessage: ''
      }
   },
   created () {
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

