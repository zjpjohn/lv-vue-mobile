import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'
import personCenter from '@/pages/personCenter/personCenter'
import personalInfo from '@/pages/personalInfo/personalInfo'
import shoppingCart from '@/pages/shoppingCart/shoppingCart'
import Test from '@/pages/test/test'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login', // 登录
      component: Login
    },
    {
      path: '/Index', // 首页
      component: Index
    },
    {
      path:'/personCenter' , //个人中心
      component: personCenter
    },
    {
      path:'/personalInfo' , //个人资料
      component: personalInfo
    },
    {
      path:'/shoppingCart',//购物车
      component:shoppingCart
    },
    {
      path: '/test', // 测试
      component: Test
    }
  ]
})
