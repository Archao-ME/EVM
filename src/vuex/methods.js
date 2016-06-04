function uploadXHR(action,fileList) {
  this.$http.get(action).then(response => {
    // TODO: 重写
    var form = new window.FormData()
    var XHR = new window.XMLHttpRequest()
    form.append('Content-Type', 'multipart/form-data')
    form.append('file', fileList[0])
    form.append('key', fileList[0].name)
    form.append('token', response.data.body)
    XHR.upload.addEventListener('progress', function (e) {
      e.percent = ~~((e.loaded / e.total) * 100)
      dispatch('ONPROGRESS', e.percent)
    } , false)
    XHR.addEventListener('load', e => {
      dispatch('ONCOMPLETED', e)
    }, false)
    XHR.addEventListener('error', e => { dispatch('ONERROR', e) }, false)
    XHR.addEventListener('abort', e => { dispatch('ONABORT', e)}, false)
    XHR.open('POST', 'http://up.qiniu.com')
    XHR.send(form)
  })
}
