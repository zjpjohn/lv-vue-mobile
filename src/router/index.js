import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login', // 登录
      component: Login
    },
    {
      path: '/Index', // 登录
      component: Index
    }
  ]
})
