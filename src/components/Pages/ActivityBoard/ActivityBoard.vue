<template>
  <div class="activityBoard">
    <v-container fluid >
      <v-layout row wrap justify-space-between style="padding: 3px">


          <v-dialog v-model="dialog" lazy absolute  width="30%">
            <v-btn secondary dark slot="activator">Select</v-btn>
            <v-card>
              <v-card-title>
                <div class="headline">Categories</div>
              </v-card-title>
              <v-card-text>
                
                <v-tabs dark v-model="active" :scrollable="false">
                  <v-tabs-bar secondary>
                    <v-tabs-item
                      v-for="tab in tabs"
                      :key="tab"
                      :href="'#' + tab"
                      ripple
                    >
                      {{tab }}
                    </v-tabs-item>
                    <v-tabs-slider class="secondary"></v-tabs-slider>
                  </v-tabs-bar>

                  <v-tabs-items>
                    <v-tabs-content
                      v-for="tab in tabs"
                      :key="tab"
                      :id="tab"
                    >
                      <v-card flat>
                        <v-card-text v-if="tab == 'Select'" style="padding:0" class="pt-4" flat>
                          <v-select v-bind:items="dropdown_edit" label="Select" editable item-value="text"
                            style=" -webkit-box-shadow: none;
                                    -moz-box-shadow: none;
                                     box-shadow: none;"    

                           
                          ></v-select>
                        </v-card-text>

                        <v-card-text v-else>
                          <h1>Create</h1>
                        </v-card-text>
                      </v-card>
                    </v-tabs-content>
                  </v-tabs-items>

                </v-tabs>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn class="green--text darken-1" flat="flat" @click.native="onLoadCategory">Load</v-btn>
                <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
          <v-btn>Create</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Settings</v-btn>
          
        
      </v-layout>

      <v-layout row class="drag-container">
        <v-flex xs12 class="drag-list">
          <v-card dark v-for="stage in stages" class="drag-column" :class="{['drag-column-' + stage]: true}" style="padding:0;min-width:300px; scroll;">
            <v-card-title primary class="drag-column-header" style="background-color: #f44336">
              <div>
                <h3 class="headline mb-0 primary">{{ stage }}</h3>
              </div>
            </v-card-title>
            <v-card-text style="padding:0; height:700px;  overflow-y: scroll;">
           
              <ul class="drag-inner-list" ref="list" :data-status="stage">
                  <li class="drag-item" v-for="block in readBlocks(stage)" :data-block-id="block.id" :key="block.id">
                      
                    <strong>{{ block.status }}</strong>
                    <div>{{ block.id }}</div>
                      
                  </li>
              </ul>
              
            </v-card-text>
          </v-card>
          
        </v-flex>
        
      </v-layout>
     
    </v-container>
   
  </div>
</template>

<script>
import dragula from 'dragula';
export default {
  name: 'ActivityBoard',
  data () {
    return {
      //dialog
      dialog: false,


      //tab
      tabs: ['Select', 'Create'],
      active: null,
      
      //Dropdown Button
      dropdown_edit: [
          { text: 'Unit Testing' },
          { text: 'New Component' },
          
        ],



      category: ['unit-test'],
      stages: ['on-hold', 'in-progress','on-hold', 'in-progress'],
      blocks: [
        {
          id: 1,
          status: 'on-hold',
          title: 'Test',
        },
   
    
        {
          id: 2,
          status: 'in-progress',
          title: 'Test',
        },
        {
          id: 3,
          status: 'on-hold',
          title: 'Test',
        },
      ],
    }
  }, //data


  methods: {
    //dialog
    onLoadCategory () {
      this.dialog = false;
    },
    //dialog
    readBlocks(status) {
      return this.blocks.filter(block => block.status === status);
    },
  },

  computed: {
     activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
  },
  mounted (){
    //console.log(this.$refs.list)
    dragula(this.$refs.list)

      .on('drag', (el) => {
        el.classList.add('is-moving');
      })

      .on('drop', (block, list) => {
        /**
         * block.dataset.blockId = return an "id"
         * block.dataset.blockId = return an ""status"
         */
        
      })

      .on('dragend', (el) => {
        el.classList.remove('is-moving');
        console.log(el)
        window.setTimeout(() => {
          el.classList.add('is-moved');
          window.setTimeout(() => {
            el.classList.remove('is-moved');
          }, 600);
        }, 100);
          
    });

    console.log('Activity Board')
  } //mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.layout {
  flex: none !important;
}

$ease-out: all .3s cubic-bezier(0.23, 1, 0.32, 1);


.drag-container {
  height: 100%;
  width: 100%;
 
}


.drag-list {
   
  display: flex;
  flex:none;
  overflow-x: scroll;
 
}

.drag-column {
   
    flex: 1;
    margin: 0 10px;
    position: relative;
    background: rgba(black, 0.2);
   
}


.drag-column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}


ul.drag-inner-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.drag-inner-list {
    min-height: 100px;
    color: white;
}

.drag-item {
    padding: 10px;
    margin: 10px;
    height: 150px;
    background: rgba(black, 0.4);
    transition: $ease-out;

    &.is-moving {
        //transform:skewY(2deg);
        //transform:rotateZ(10deg);
        transform: scale(1.3);
        background: rgba(black, 0.5);
    }

}

.drag-header-more {
    cursor: pointer;
}

// .drag-options {
//     position: absolute;
//     top: 44px;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     padding: 10px;
//     transform: translateX(100%);
//     opacity: 0;
//     transition: $ease-out;

//     &.active {
//         transform: translateX(0);
//         opacity: 1;
//     }

//     &-label {
//         display: block;
//         margin: 0 0 5px 0;

//         input {
//             opacity: 0.6;
//         }

//         span {
//             display: inline-block;
//             font-size: 0.9rem;
//             font-weight: 400;
//             margin-left: 5px;
//         }
//     }
// }

/* Dragula CSS  */

.gu-mirror {
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
    list-style-type: none;
}

.gu-hide {
  display: none !important;
}

.gu-unselectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.gu-transit {
  opacity: 0.2;
}


</style>
