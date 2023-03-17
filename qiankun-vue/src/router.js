import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue',
    name: 'Home-Index',
    component: Home,
  },
  {
    path: '/about',
    name: 'About-Index',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/',
    name: 'Home-Index',
    component: Home,
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
