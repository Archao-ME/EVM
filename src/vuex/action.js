export {changeTab,handleDrop,handleDragover,handleDragleave,changeArticle,initArticle}
import {writeMDFile} from '../elect/ipc'
//MAKRDOWN editor
// function updateArticle ({ dispatch }, value) {
//   dispatch('UPDATEARTICLE', value)
// }
//MAINTAB code block
function changeTab ({ dispatch }, type) {
  dispatch('CHANGETAB', type)
}
//TODO: 切换时保存
function changeArticle ({dispatch, state}, item) {
  var fileItem = {
    name: state.currentArticle.name,
    content: state.currentArticle.content
  }
  writeMDFile(fileItem).then(msg => {
    console.log(msg,fileItem)
  })
  dispatch('CHANGEARTICLE', item)
}

function initArticle({dispatch}, files) {
  dispatch('INITARTICLE', files)
}
//MAIN code block
function handleDrop ({ dispatch }, e, picOptions) {
  var fileList = e.dataTransfer.files
  dispatch('ONDROP', fileList)
  e.preventDefault()
  let handleEvents = {
    onProgress: e => {
      e.percent = ~~((e.loaded / e.total) * 100)
      dispatch('ONPROGRESS', e.percent)
    },
    onLoad: e => dispatch('ONCOMPLETED', JSON.parse(e.srcElement.response), picOptions),
    onError: e => dispatch('ONERROR', e),
    onAbort: e => dispatch('ONABORT', e),
  }
  this.$http.get(picOptions.tokenURL).then(response => {
    let formData = {
      'Content-Type': 'multipart/form-data',
      'file': fileList[0],
      'key': fileList[0].name,
      'token': response.data.body
    }
    _uploadXHR.apply(this,[picOptions.action, formData, handleEvents])
  })

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
