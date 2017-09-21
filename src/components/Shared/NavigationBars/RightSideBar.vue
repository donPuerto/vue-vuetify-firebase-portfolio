<template>
  <div class="rightSideBar">
   <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </div>
         

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Navbar04SEP2017",

  data () {
    return {
      drawer: false,
      right: false,
      rightDrawer: false
    } // return
  }, //data

  computed: {
    ...mapGetters({
      // drawer: 'sharedSettings/GettersDrawer',
      socials: 'sharedSettings/GettersSocials',
      items: 'sharedSettings/GetterItems',
    }),
  },

  mounted () {
    console.log('Navbar Vue')
    console.log(this.drawer)
    // console.log(this.socials)
  } //mounted
}
</script>

