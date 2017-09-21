<template>
  <div class="leftSideBar">
    

  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "LeftSideBar",

  data () {
    return {
   
    } // return
  }, //data

  methods: {
    ...mapActions({
          ActionDrawer: 'sharedSettings/ActionDrawer',
      }),
  },

  computed: {
    ...mapGetters({
      sidebar: 'sharedSettings/GettersDrawer',
      socials: 'sharedSettings/GettersSocials',
      items: 'sharedSettings/GetterItems',
    }),
  },

  mounted () {
    console.log('LeftSideBar Vue')
   
   
  } //mounted
}
</script>

