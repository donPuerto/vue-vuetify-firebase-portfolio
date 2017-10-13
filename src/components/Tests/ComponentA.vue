<template>
  <div>
     <button @click="sendData">Click here to send data...</button>
     <component-b/>  

     <br>

     <component-c @updateData="onUpdateData" />  



  </div>
</template>
<script>
import { EventBus }  from '../../helpers/utilities'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
export default {

  components: {
    'component-b': ComponentB,
    'component-c': ComponentC,
  },
  methods: {
    onUpdateData (val) {
      console.log('val',val)
    },
     sendData () {
        EventBus.$emit('emit-event-bus-data', 'Simple Event Bus Working' );
        EventBus.centralEventBusData('Central Event Bus Data Working');
     }
  }
}
</script>

