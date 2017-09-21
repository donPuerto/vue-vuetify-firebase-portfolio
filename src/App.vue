<template lang="pug">
  
  
  v-app(light toolbar footer)
      main-toolbar
      main
       
        transition(
           mode="out-in"
           enter-active-class="animated fadeIn"
           
        )
          router-view
      
      //- v-footer(v-if="isVisible.footer")
       

      v-fab-transition
        v-btn(
          fab
          dark
          fixed
          bottom
          right
          class="red"
          v-scroll="onScroll"
          v-show="fab"
          @click="toTop"
        )
          v-icon keyboard_arrow_up


    
</template>

<script>
  import particles from 'particles.js'
  import { mapState,mapGetters, mapMutations, mapActions } from 'vuex';
  export default {
    data () {
      return {
        fab: false  
      }
    },
    computed: {
     

    }, // computed

    methods: {
  //     initParticleJS() {
  //       particlesJS('app', {
  //            "particles": {
  //    "number": {
  //      "value": 80,
  //      "density": {
  //        "enable": true,
  //        "value_area": 800
  //      }
  //    },
  //    "color": {
  //      "value": "#ffffff"
  //    },
  //    "shape": {
  //      "type": "triangle",
  //      "stroke": {
  //        "width": 0,
  //        "color": "#000000"
  //      },
  //      "polygon": {
  //        "nb_sides": 3
  //      },
  //      "image": {
  //        "src": "img/github.svg",
  //        "width": 200,
  //        "height": 200
  //      }
  //    },
  //    "opacity": {
  //      "value": 0.5,
  //      "random": false,
  //      "anim": {
  //        "enable": false,
  //        "speed": 1,
  //        "opacity_min": 0.1,
  //        "sync": false
  //      }
  //    },
  //    "size": {
  //      "value": 2,
  //      "random": false,
  //      "anim": {
  //        "enable": true,
  //        "speed": 0,
  //        "size_min": 100,
  //        "sync": true
  //      }
  //    },
  //    "line_linked": {
  //      "enable": true,
  //      "distance": 150,
  //      "color": "#ffffff",
  //      "opacity": 0.4,
  //      "width": 1
  //    },
  //    "move": {
  //      "enable": true,
  //      "speed": 8,
  //      "direction": "top",
  //      "random": false,
  //      "straight": false,
  //      "out_mode": "out",
  //      "bounce": true,
  //      "attract": {
  //        "enable": false,
  //        "rotateX": 600,
  //        "rotateY": 1200
  //      }
  //    }
  //  },
  //  "interactivity": {
  //    "detect_on": "canvas",
  //    "events": {
  //      "onhover": {
  //        "enable": true,
  //        "mode": "bubble"
  //      },
  //      "onclick": {
  //        "enable": true,
  //        "mode": "push"
  //      },
  //      "resize": true
  //    },
  //    "modes": {
  //      "grab": {
  //        "distance": 400,
  //        "line_linked": {
  //          "opacity": 1
  //        }
  //      },
  //      "bubble": {
  //        "distance": 400,
  //        "size": 40,
  //        "duration": 2,
  //        "opacity": 8,
  //        "speed": 3
  //      },
  //      "repulse": {
  //        "distance": 200,
  //        "duration": 0.4
  //      },
  //      "push": {
  //        "particles_nb": 4
  //      },
  //      "remove": {
  //        "particles_nb": 2
  //      }
  //    }
  //  },
  //  "retina_detect": true
  //       });
  //    },
      onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
        this.fab = top > 300
      },
      
      toTop () {
        window.scrollTo(0, 0)
      }

    }, //methods

    mounted () {
      console.log('App Vue')
      this.$vuetify.load(this.onScroll)

      

    // this.$nextTick(() => {
    // 	this.initParticleJS()	
    // })

    } //mounted
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  // v-app {
  //   border: 1px solid red;


  // }

  
  
</style>
