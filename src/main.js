import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueResource from 'vue-resource'
/* eslint-disable no-new */
Vue.use(VueResource)
new Vue({
  el: 'body',
  components: { App },
  store,
})
