<template>
  <div class="newsfeed">
     <h1>News Feed</h1>
  </div>
</template>

<script>
export default {
  name: 'NewsFeed',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, //data

  mounted (){
    console.log('NewsFeed Vue')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .newsfeed {

  }
</style>
