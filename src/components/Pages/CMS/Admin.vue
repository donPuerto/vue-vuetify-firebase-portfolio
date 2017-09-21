<template>
   <div class="adminLayout">
    <h1>Admin Page</h1>
   </div>         
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {
          name: "DON PUERTO"
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
     console.log('Admin Layout Vue')
  }, // mounted

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
