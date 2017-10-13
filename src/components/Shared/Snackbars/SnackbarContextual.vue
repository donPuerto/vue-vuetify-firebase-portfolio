<template>
    <v-snackbar
      :timeout="timeout"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :multi-line="multiline"
      :vertical="layout"
      :class="color"
      :value="snackbar"
      
    >
      {{ message }}
      <v-btn flat class="white--text" @click.native="onClickSnackbar">Close</v-btn>
    </v-snackbar>
    
</template>

<script>

export default {
 
    props: ['snackbar','message','timeout', 'multiline', 'layout', 'top','bottom','right','left','color'],

    methods: {
        onClickSnackbar () {
            this.$emit('dismissed')
            //console.log('snackbar')
        }
        
    }, //methods

   
    mounted () {
        console.log('Snackbar Vue')
      
    } // mounted
}
</script>
