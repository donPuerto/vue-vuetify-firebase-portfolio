<template>
  <div class="profile">
     <h1>Profile</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, //data

  created () {


  },
  mounted (){
    console.log('Profile Vue')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profile {

  }
</style>
