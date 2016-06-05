const {ipcRenderer} = window.require('electron')
export {closeWin, copyUrl, getMDFile}

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
