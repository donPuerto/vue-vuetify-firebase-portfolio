<template>
  <div>
     <button @click="sendData">Send Data</button>
     <component-b/>  

     <br>
     {{ mixinsData }}
  </div>
</template>
<script>
import { EventBus }  from '../../../helpers/utilities'
import ComponentB from './ComponentB'

export default {

  components: {
    'component-b': ComponentB
  },
  methods: {
     sendData () {
        EventBus.$emit('emit-event-bus-data', 'Simple Event Bus Working' );
        EventBus.centralEventBusData('Central Event Bus Data Working');
     }
  }
}
</script>

