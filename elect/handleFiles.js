var fs = require("fs")
function readMDFiles (callback) {
  let path = 'mdfiles'
  let fileList = []
  let fileObject = {}
  fs.readdir(path, function(err, files){
    if(err){
      return callback(err)
    }
    files.forEach( function (file){
      if(file.substr(-3) === '.md'){
        fileObject = {}
        fileObject.name = file.slice(0,-3)
        fileList.push(fileObject)
      }
    })
    if(fileList.length>0){
      callback(null,fileList)
    }else{
      callback(err)
    }
  })
}
function writeMDFile (fileName, content, callback){
  fs.writeFile(fileName, content, (err)=> {
    callback(err,'success')
  })
}

module.exports = {readMDFiles, writeMDFile}
