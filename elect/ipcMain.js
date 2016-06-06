const electron = require('electron');
const {ipcMain} = electron;
const { readMDFiles,writeMDFile, readMDFile } = require('../elect/handleFiles.js')
const mdPath = './mdfiles/'
const suName = '.md'
ipcMain.on('close-main-window', function (event,msg) {
  console.log('quit');
  app.quit();
});
ipcMain.on('clipboard-write', function (event,msg) {
  clipboard.writeText(msg);
});

/**
 * 返回文件列表 {name:String}
 * @param  {[type]} 'get-mdfiles' [description]
 * @param  {[type]} function      (event,       msg [description]
 * @return {[type]}               [description]
 */
ipcMain.on('get-mdfiles', function (event, msg) {
  readMDFiles(function(err, result){
    event.sender.send('get-mdfiles-reply',result)
  })
})
ipcMain.on('save-mdfile', function (event, msg){
  var result = ''
  writeMDFile(mdPath+msg.name+suName, msg.content, function(err,result){
    result = err ? err : 'success'
    event.sender.send('save-mdfile-reply', result)
  })
})

/**
 * 发送文件内容
 * @param  {[type]} 'read-mdfile' [description]
 * @param  {[type]} function      (event,       fileName [description]
 * @return {String}               文件内容
 */
ipcMain.on('read-mdfile', function (event, fileName){
  readMDFile(mdPath+fileName+suName, function(err, result){
    result = err? 'error' : result
    console.log(fileName,result.toString())
    event.sender.send('read-mdfile-reply', result.toString())
  })
})
