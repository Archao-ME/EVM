import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
Vue.use(Vuex)
// 创建一个对象来保存应用启动时的初始状态
const state = {
  articleList: [{
    id: 1,
    name: 'This is a wonderful world',
    description: 'Wonderful definition, excellent; great; marvelous: We all had a wonderful weekend',
    content: '这是markdown原生内容。'
  }],
  picList: [{
    name: 'A good pic',
    img: 'http://vuejs.org.cn/images/logo.png'
  }],
  currentTab: 'PicList',
  currentArticle: {
    index: 0,
    content: '',
    name: ''
  },
  uploadObj: [{progress: 0}],
  onProgressIndex: 0,
  picOptions: {
    exURL: 'http://7xj0ss.com1.z0.glb.clouddn.com/',
    suURL: '',
    action: 'http://up.qiniu.com',
    tokenURL: 'http://api.pikach.com/qiniu'
  }
}
// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})
