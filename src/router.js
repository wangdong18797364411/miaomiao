import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './pages/homepage.vue'
import Search from './pages/search.vue'
import Recommend from './pages/recommend.vue'
import Chat from './pages/chat.vue'
import Person from './pages/person.vue'
import Login from './pages/login.vue'
import LoginWay from './pages/loginWay.vue'
// import Car from './pages/car.vue'
// 使用中间件
Vue.use(Router)

export default new Router({
  mode: 'hash',

  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/homePage',
      component: HomePage
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/loginway',
      component: LoginWay
    },
    // {
    //   path: '/car',
    //   component: Car
    // }
  ]
})
