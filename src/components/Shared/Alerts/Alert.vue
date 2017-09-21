<template lang="pug">
   v-alert(
      transition="scale-transition"
      :class="[status]"
      dismissible
      @input="onClose" 
      value="true"
      :icon="icon"
       
   )  {{ message }}
      
    
</template>

<script>

export default {
    /**
     * Icons
     * Success = check_circle
     * Information =  priority_high
     * Warning = warning
     * Error = error_outline
     * */     
    props: ['status','message','icon'],
    methods: {
        onClose () {
            this.$emit('dismissed')
            //console.log('alert onClose hit')
        }
        
    }, //methods

    mounted () {
        console.log('Alert Vue')
        //console.log('asasd', this.icon)
    } // mounted
}
</script>
