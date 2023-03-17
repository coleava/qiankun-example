import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from './views/base.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home-Index',
    component: Base,
  },
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
