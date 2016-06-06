const {ipcRenderer} = window.require('electron')
export {closeWin, copyUrl, getMDFile, writeMDFile}

function closeWin () {
  ipcRenderer.send('close-main-window', 'close')
}
function copyUrl (text) {
  ipcRenderer.send('clipboard-write', text)
}
//TODO: 异常和超时处理
function getMDFile() {
  return new Promise(function(resolve, reject){
    ipcRenderer.send('get-mdfiles', 'mdfiles')
    ipcRenderer.on('get-mdfiles-reply', (event, files) => {
      return resolve(files)
    })
  })
}
function writeMDFile(fileItem) {
  return new Promise(function(resolve, reject) {
    ipcRenderer.send('save-mdfile', fileItem)
    ipcRenderer.on('save-mdfile-reply', (event, msg) => {
      if(msg === 'success'){
        return resolve(msg)
      }else{
        return reject('error')
      }
    })
  })
}
