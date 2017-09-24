import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard.js'

import Home from '@/components/Home'
import Admin  from '@/components/Pages/CMS/Admin'

import ActivityBoard from '@/components/Customs/ActivityBoard'
import Profile from '@/components/Pages/Users/Profile'
import CreateProfile from '@/components/Pages/Users/Create'
import Projects from '@/components/Pages/Projects/Project'
import NewsFeed from '@/components/Pages/NewsFeed/NewsFeed'
import E404 from '@/components/Pages/Errors/404'


import Login from '@/components/Pages/Auth/Login'
import Logout from '@/components/Pages/Auth/Logout'
import Register from '@/components/Pages/Auth/Register'
import PasswordReset from '@/components/Pages/Auth/PasswordReset'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/profile',
      name: 'Profile',
      component: Profile
    },

    {
      path: '/profile/create',
      name: 'CreateProfile',
      component: CreateProfile
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
