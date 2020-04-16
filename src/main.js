// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint, {
  Toast,
  Indicator,
  MessageBox
} from 'mint-ui'
import VueAMap from 'vue-amap'
import router from './router'
import store from './store'
import axios from 'axios'
import 'normalize.css'
import 'mint-ui/lib/style.css'

// 全部组件
import './components/index'

Vue.use(Mint)
Vue.use(VueAMap)

// 请求
Vue.prototype.$axios = axios
// 快捷弹出层
Vue.prototype.$Toast = Toast
Vue.prototype.$Loading = Indicator
Vue.prototype.$Modal = MessageBox

// 调试专用
Vue.prototype.$log = console.log

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
