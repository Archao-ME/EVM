const electron = require('electron');
const {ipcMain} = electron;
const { readMDFiles } = require('../elect/handleFiles.js')
ipcMain.on('close-main-window', function (event,msg) {
  console.log('quit');
  app.quit();
});
ipcMain.on('clipboard-write', function (event,msg) {
  clipboard.writeText(msg);
});
ipcMain.on('get-mdfiles', function (event, msg) {
  readMDFiles(function(err, result){
    console.log('msg')
    console.log(msg)
    event.sender.send('get-mdfiles-reply',result)
  })
})
