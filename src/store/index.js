import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据根
  state: {
    // 用户信息
    userInfo: {}
  },
  // 动态计算
  getters: {},
  // 同步进行
  mutations: {},
  // 异步进行
  actions: {}
})
