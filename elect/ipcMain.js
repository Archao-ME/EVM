const electron = require('electron');
const {ipcMain} = electron;
const { readMDFiles,writeMDFile } = require('../elect/handleFiles.js')
ipcMain.on('close-main-window', function (event,msg) {
  console.log('quit');
  app.quit();
});
ipcMain.on('clipboard-write', function (event,msg) {
  clipboard.writeText(msg);
});
ipcMain.on('get-mdfiles', function (event, msg) {
  readMDFiles(function(err, result){
    event.sender.send('get-mdfiles-reply',result)
  })
})
ipcMain.on('save-mdfile', function (event, msg){
  var result = ''
  console.log(msg)
  writeMDFile('./mdfiles/'+msg.name+'.md', msg.content, function(err,result){
    result = err ? err : 'success'
    event.sender.send('save-mdfile-reply', result)
  })
})
