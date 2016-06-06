import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueResource from 'vue-resource'
/* eslint-disable no-new */
Vue.use(VueResource)
//TODO: Vuex的永久化存储方案
new Vue({
  el: 'body',
  components: { App },
  store
})
