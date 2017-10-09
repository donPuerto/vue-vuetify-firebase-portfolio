import Vue from 'vue';
const EventBus = new Vue({
   methods: {
      centralEventBusData (data) {
         this.$emit('central-event-bus-data', data)
      }
   },
});


export { EventBus }