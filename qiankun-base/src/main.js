import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import {
  registerMicroApps, // 注册应用
  start, // 开启方法
} from 'qiankun'
const apps = [
  {
    name: 'vueApp', // 应用名字，这个是微应用app1
    entry: '//localhost:10000', //默认会加载这个html 解析里面的js(这里使用的fetch) 动态的执行(子应用必须支持跨域)
    container: '#vue', //容器名 挂载元素
    activeRule: '/vue', // 激活路径 激活规则，当访问 /vue时就会把这个应用挂载到 #vue上
    props: { a: 1 }, // 实现主应用给子应用传参
  },
  {
    name: 'reactApp', // 应用名字，这个是微应用app2
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react',
    props: { b: 2 }, // 实现主应用给子应用传参
  },
]
registerMicroApps(apps) // 注册应用
start({
  // 开启
  prefetch: false, // 取消预加载
})

Vue.config.productionTip = false

new Vue({
  router ,
  render: (h) => h(App),
}).$mount('#base') // 这里需要更改挂载节点，防止跟app1-vue的节点重名。
