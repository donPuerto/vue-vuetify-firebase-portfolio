import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard.js'

import Home from '@/components/Home'
import Admin  from '@/components/Pages/CRM/Admin'

import ActivityBoard from '@/components/Pages/ActivityBoard/ActivityBoard'
import ActivityBoardDashboard from '@/components/Pages/ActivityBoard/ActivityBoardDashboard'



import Projects from '@/components/Pages/Projects/Project'
import NewsFeed from '@/components/Pages/NewsFeed/NewsFeed'
import E404 from '@/components/Pages/Errors/404'


import Login from '@/components/Pages/Auth/Login'
import Logout from '@/components/Pages/Auth/Logout'
import Register from '@/components/Pages/Auth/Register'
import PasswordReset from '@/components/Pages/Auth/PasswordReset'


//users 
import UserProfile from '@/components/Pages/Users/UserIndex'
import UserUpdate from '@/components/Pages/Users/UserUpdate'
import ComponentA from '@/components/Tests/ComponentA'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/test',
      name: 'ComponentA',
      component: ComponentA
    },
    
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: AuthGuard,
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    },
 
    {
      path: '/password-reset',
      name: 'PasswordReset',
      component: PasswordReset
    },

    {
      path: '/activity-board',
      name: 'ActivityBoard',
      component: ActivityBoard
    },
    

    {
      path: '/activity-board/dashboard',
      name: 'ActivityBoardDashboard',
      component: ActivityBoardDashboard
    },


    {
      path: '/user/profile',
      name: 'UserProfile',
      component: UserProfile,
      // beforeEnter: AuthGuard,
    },

    {
      path: '/user/update',
      name: 'UserUpdate',
      component: UserUpdate,
      // beforeEnter: AuthGuard,
    },

    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },

    {
      path: '/NewsFeed',
      name: 'NewsFeed',
      component: NewsFeed
    },

  
    {
      path: '*',
      name: 'E404',
      component: E404
    },

  ],
  mode: 'history'
})
