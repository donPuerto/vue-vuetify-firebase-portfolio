<template>
  <div class="userDashboard">
     <h1>User Index</h1>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, //data

  created () {


  },
  mounted (){
    console.log('User Dashboard Vue')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userProfile {

  }
</style>
