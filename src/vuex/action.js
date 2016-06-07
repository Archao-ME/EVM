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
//MAIN code block
function handleDrop ({ dispatch,state }, e, picOptions) {
  let fileList = e.dataTransfer.files
  let fileArr = Array.prototype.slice.call(fileList)
  dispatch('ONDROP', true)
  e.preventDefault()
  //TODO: 改写onProgress，只传入e,在 mutations 中生成多进度条
  // let handleEvents = {
  //   onProgress: e => {dispatch('ONPROGRESS', e)},
  //   onLoad: e => dispatch('ONCOMPLETED', JSON.parse(e.srcElement.response), picOptions),
  //   onError: e => dispatch('ONERROR', e),
  //   onAbort: e => dispatch('ONABORT', e),
  // }
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

/**
 * [XHR 上传模块]
 * @param  {[type]} action       [服务器地址]
 * @param  {[type]} data         [表单数据]
 * @param  {[type]} handleEvents [回调函数]
 * @return {[type]}              [description]
 */
function _uploadXHR(action, data, {onProgress, onLoad, onError, onAbort}) {
  let formData = new window.FormData()
  let XHR = new window.XMLHttpRequest()
  for(let item in data) {
    formData.append(item, data[item])
  }
  XHR.upload.addEventListener('progress', onProgress , false)
  XHR.addEventListener('load', onLoad, false)
  XHR.addEventListener('error', onError , false)
  XHR.addEventListener('abort', onAbort, false)
  XHR.open('POST', action)
  XHR.send(formData)
}
