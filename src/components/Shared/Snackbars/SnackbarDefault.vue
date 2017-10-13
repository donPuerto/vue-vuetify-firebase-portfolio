<template>
    <v-snackbar
      :timeout="timeout"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :multi-line="multiline"
      :vertical="layout"
      :value="snackbar"
      
    >
      {{ message }}
      <v-btn flat class="pink--text" @click.native="onClickSnackbar">Close</v-btn>
    </v-snackbar>
    
</template>

<script>

export default {
 
    props: ['snackbar','message','timeout', 'multiline', 'layout', 'top','bottom','right','left'],

    methods: {
        onClickSnackbar () {
            this.$emit('dismissed')
            
        }
        
    }, //methods

   
    mounted () {
        console.log('Snackbar Vue')
      
    } // mounted
}
</script>
