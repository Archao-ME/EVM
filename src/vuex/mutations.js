export const mutations = {
  /**
   * INIT ARTICLES LIST from ipcRenderer
   * @param {[type]} state [description]
   * @param {[type]} files [description]
   */
  INITARTICLES (state, articleList){
    state.articleList = articleList
  },
  /**
   * 改变文章对象
   * @param {[type]} state [description]
   * @param {[type]} index  articleList的序列
   */
  CHANGEARTICLE (state, index) {
    state.currentArticle = state.articleList[index]
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
  CHANGEUPLOADOBJ (state, index){
    state.uploadObj[index].percent = 50
  },
  ONPROGRESS (state, index, e) {
    e.percent = ~~((e.loaded / e.total) * 100)
    if(state.uploadObj.length - 1 < index ){
      state.uploadObj.push({ progress: 0})
    }
    state.uploadObj[index].progress = e.percent
  },
  /**
   * [ONCOMPLETED description]
   * @param {[type]} state      [description]
   * @param {[type]} e          [description]
   * @param {[type]} picOptions [图床配置，前缀、后缀、token获取地址]
   */
  ONCOMPLETED (state, response,index,{exURL, suURL, action, tokenURL}) {
    let file = response
    if(file.key){
      let item = {name: file.key, img: exURL + file.key + suURL}
      state.picList.push(item)
      state.onProgressIndex--
      state.uploadObj[index].progress = 0
    }else{
      alert('上传失败')
    }
  },
  ONERROR (state, msg) {
    console.log(msg)
  },
  ONDROP (state, msg) {
    console.log(msg)
    // state.uploadObj.dragOver = false
  },
  ONDRAGOVER (state, msg) {
    // state.uploadObj.dragOver = true
  },
  ONDRAGLIVE (state, msg) {
    // state.uploadObj.dragOver = false
  }
}
