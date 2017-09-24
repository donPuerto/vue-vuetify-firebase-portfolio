<template>
    <div class="mainToolbar">
        
        <v-navigation-drawer
            temporary
            v-model="leftSidebarSetter"
            light
            absolute
            >
            <v-list dense>
                <v-list-tile @click="">

                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                   
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <transition
            enter-active-class="animated slideInDown slow"
            leave-active-class="animated fadeOut Fast" 
            mode="out-in"
        >
            <v-toolbar dark class="primary"  style="opacity: 1">
        
                <!-- Toolbar Side Icon -->
                <v-toolbar-side-icon 
                    class="hidden-sm-and-up" 
                    @click.stop="onClickleftSidebar"
                ></v-toolbar-side-icon>
                
            
                <!-- Toolbar Title -->
                <v-toolbar-title>
                    <router-link to='/' tag="span" style="cursor: pointer">{{ toolbarTitle }}</router-link> 
                </v-toolbar-title>


                <!-- Push to right side -->
                <v-spacer></v-spacer>

                <!-- Icon Menu items at Right Side
                <v-btn 
                    dark
                    v-for="item in menus" :key="item.icon"
                    icon
                    v-tooltip:left="item.tooltip[0]"
                >
                    <v-icon light >{{ item.icon }}</v-icon>
                
                </v-btn>
                -->

                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn
                        flat
                        v-for="item in menus" :key="item.text"
                        router
                        :to="item.link"  
                        v-tooltip:left="item.tooltip[0]"
                    > 
                    <v-icon left ripple dark>{{ item.icon }}</v-icon>
                    {{ item.text }}
                    </v-btn>

                
                </v-toolbar-items>
               
               
     
                <v-menu
                    transition="slide-x-transition"
                    bottom 
                    left
                >
                    <v-btn icon slot="activator" dark>
                        <v-icon>more_vert</v-icon>
                    </v-btn>

                    <v-list   v-for="item in dropdownMenu"  :key="item.id">
                        <v-divider
                            v-if="item.divider"
                        ></v-divider>  

                        <v-list-tile 
                            v-else
                            flat
                            router
                            :to="item.link"    
                        >
                            
                            <v-list-tile-action class="pr-5">
                                <v-icon light>{{ item.icon }}</v-icon>
                            </v-list-tile-action> 
                            
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                    

                </v-menu>

        </v-toolbar>
    </transition>
   
    
</div>                
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'mainToolbar',
    data () {
        return {
            toolbar: [
                {title: 'DONPUERTO'}
            ],
            sidebar: false,
            menus: [
                { text: 'Home', icon: 'home', tooltip: [{html: 'home' }], link: '/' },
                { text: 'Activity Board', icon: 'assignment_ind', tooltip: [{html: 'activity board' }], link: '/activity-board' },
                { text: 'Profile', icon: 'person', tooltip: [{html: 'profile' }], link: '/profile' },
                { text: 'Projects', icon: 'business_center', tooltip: [{html: 'projects' }], link: '/projects' },
                { text: 'News Feed', icon: 'book', tooltip: [{html: 'news feed' }], link: '/newsfeed' },
                
            ],  

            dropdownMenu: [
                { title: 'Register', icon: 'face', link: '/register' },
                { title: 'Login', icon: 'lock_open', link: '/login' },
                { divider: true, inset: true },
                { title: 'Logout', icon: 'exit_to_app', link: '/logout' },
            ],
            
            
        } // return 
    }, //data

    methods: {
        ...mapMutations({
            setleftSidebar: 'Mutation_Left_SideBar',
            onClickleftSidebar: 'Mutation_On_Click_Left_SideBar'
        }),

       

    }, // method

    computed: {

        ...mapGetters({
            toolbarTitle: 'GetterToolbarTitle',
            leftSidebar: 'GetterLeftSidebar',
        }),

        leftSidebarSetter: {
            get() {
                return this.leftSidebar;
            },
            set( value ) {
                console.log('val',value)
                this.setleftSidebar(value)
            }
        }


    
    }, // computed


    mounted () {
        console.log('Toolbar Vue')
        console.log('Sidebar', this.leftSidebar)
        // window.onscroll = function (e) {  
        //     if(window.scrollY > 1 ) {
        //         console.log('hit')
        //     } else {
        //         console.log('hit')
        //     } 
        // },


    }// mounted
}
</script>

<style scoped>

</style>


