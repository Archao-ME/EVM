import Vue from 'vue'
import Vuex from 'vuex'
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
    content: ''
  },
  uploadObj: {
    uploadPercent: 0,
    dragOver: false,
  },
  picOptions: {
    exURL: 'http://7xj0ss.com1.z0.glb.clouddn.com/',
    suURL: '',
    action: 'http://up.qiniu.com',
    tokenURL: 'http://api.pikach.com/qiniu'
  }
}

export const mutations = {
  /**
   * INIT ARTICLE LIST from ipcRenderer
   * @param {[type]} state [description]
   * @param {[type]} files [description]
   */
  INITARTICLE (state, articleList){
    state.articleList = articleList
  },
  /**
   * 改变文章对象
   * @param {[type]} state [description]
   * @param {[type]} item  [description]
   */
  CHANGEARTICLE (state, item) {
    state.currentArticle = item
  },
  /**
   * [main tab change,pic or article list]
   * @param  {[type]} state [description]
   * @param  {[type]} type  [description]
   * @return {[type]}       [description]
   */
  CHANGETAB (state, type) {
    state.currentTab = type
  },
  ADDARTICLE (state, article) {
    state.articleList.push(article)
  },
  ONPROGRESS (state, percent) {
    state.uploadObj.uploadPercent = percent
  },
  /**
   * [ONCOMPLETED description]
   * @param {[type]} state      [description]
   * @param {[type]} e          [description]
   * @param {[type]} picOptions [图床配置，前缀、后缀、token获取地址]
   */
  ONCOMPLETED (state, response, {exURL, suURL, action, tokenURL}) {
    let file = response
    if(file.key){
      let item = {name: file.key, img: exURL + file.key + suURL}
      state.picList.push(item)
    }else{
      alert('上传失败')
    }
  },
  ONERROR (state, msg) {
    console.log(msg)
  },
  ONDROP (state, msg) {
    state.uploadObj.dragOver = false
  },
  ONDRAGOVER (state, msg) {
    state.uploadObj.dragOver = true
  },
  ONDRAGLIVE (state, msg) {
    state.uploadObj.dragOver = false
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
})
