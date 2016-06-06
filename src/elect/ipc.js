const {ipcRenderer} = window.require('electron')
export {closeWin, copyUrl, getMDFiles, writeMDFile,readMDFile}

function closeWin () {
  ipcRenderer.send('close-main-window', 'close')
}
function copyUrl (text) {
  ipcRenderer.send('clipboard-write', text)
}
//TODO: 异常和超时处理
function getMDFiles() {
  return new Promise(function(resolve, reject){
    ipcRenderer.send('get-mdfiles', 'mdfiles')
    ipcRenderer.once('get-mdfiles-reply', (event, files) => {
      return resolve(files)
    })
  })
}
function writeMDFile(fileItem) {
  return new Promise(function(resolve, reject) {
    ipcRenderer.send('save-mdfile', fileItem)
    ipcRenderer.once('save-mdfile-reply', (event, msg) => {
      if(msg === 'success'){
        return resolve(msg)
      }else{
        return reject('error')
      }
    })
  })
}
function readMDFile(fileName) {
  return new Promise(function(resolve, reject) {
    ipcRenderer.send('read-mdfile', fileName)
    ipcRenderer.once('read-mdfile-reply', (event, result) => {
      console.log('ipc result', result)
      if(result === 'error'){
        return reject(result)
      }else{
        return resolve(result)
      }
    })
  })
}
