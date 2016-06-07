export {changeTab,handleDrop,handleDragover,handleDragleave,changeArticle,initArticles}
// import {writeMDFile, readMDFile, getMDFiles} from '../elect/ipc'
//MAKRDOWN editor

//MAINTAB code block
function changeTab ({ dispatch }, type) {
  dispatch('CHANGETAB', type)
}

/**
 * [切换保存文件，读取切换的文件内容并填入item.content]
 * @param  {[type]} {dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} item      [store 中列表的 item，内容为 {name:String}]
 * @return {[type]}           [description]
 */
function changeArticle ({dispatch, state}, item, index) {
  readMDFile(item.name).then(msg => {
    if(msg === 'error'){
      window.alert('读取文件错误')
    }else{
      item.content = msg
      item.index = index
      dispatch('CHANGEARTICLE', index)
    }
  },msg => {
    window.alert('读取文件错误')
  })
  var fileItem = {
    name: state.currentArticle.name,
    content: state.currentArticle.content
  }
  //TODO: 判读是否修改。若有修改再保存
  writeMDFile(fileItem).then(msg => {
    console.log(msg,fileItem)
  })
}
/**
 * 初始化列表，获取mdfils文件夹下的所有md文件
 * @param  {[type]} {dispatch} [description]
 * @return {[type]}            [description]
 */
function initArticles({dispatch}) {
  getMDFiles().then(files => {
    dispatch('INITARTICLES', files)
  })
}
function initArticle({dispatch, state}, index) {
  let articleItem = state.articleList[index]
  readMDFile(articleItem.name).then( result =>{
    state.articleList[index].content = result
    dispatch('CHANGEARTICLE', index)
  })
}
/**
 * 处理文件拖拽上传
 * @param  {[type]} {          dispatch      [description]
 * @param  {[type]} state      }             [description]
 * @param  {[type]} e          拖拽事件
 * @param  {[type]} picOptions 图床配置
 * @return {[type]}            [description]
 */
function handleDrop ({ dispatch,state }, e, picOptions) {
  let fileList = e.dataTransfer.files
  let fileArr = Array.prototype.slice.call(fileList)
  dispatch('ONDROP', true)
  e.preventDefault()
  this.$http.get(picOptions.tokenURL).then(response => {
    for(let file of fileArr){
      _uploadXHR(picOptions.action, file, response.data.body)
    }
  })
  /**
   * [_uploadXHR description]
   * @param  {[type]} action [description]
   * @param  {[type]} file   [description]
   * @param  {[type]} token  [description]
   * @return {[type]}        [description]
   */
  function _uploadXHR(action, file, token){
    let fileName = file.name
    let index = state.onProgressIndex++
    let data = {
      'Content-Type': 'multipart/form-data',
      'file': file,
      'key': file.name,
      'token': token
    }
    let formData = new window.FormData()
    let XHR = new window.XMLHttpRequest()
    for(let item in data) {
      formData.append(item, data[item])
    }
    XHR.upload.addEventListener('progress', e => {dispatch('ONPROGRESS',index,e)} , false)
    XHR.addEventListener('load', e => dispatch('ONCOMPLETED', JSON.parse(e.srcElement.response),index,picOptions), false)
    XHR.addEventListener('error', e => dispatch('ONERROR',index, e) , false)
    XHR.addEventListener('abort', e => dispatch('ONABORT',index, e), false)
    XHR.open('POST', action)
    XHR.send(formData)
  }
}
//TODO: 拖拽过程中显示上传指引图标
function handleDragover ({ dispatch }, e) {
  dispatch('ONDRAGOVER', true)
  e.preventDefault()
}
function handleDragleave ({ dispatch }, e) {
  dispatch('ONDRAGLIVE', true)
  e.preventDefault()
}
function handleUpload ({dispatch}, e) {
}
