// const express = require('express')
const multer = require('multer')

const path = require('path')
// const upload = multer({ dest: 'uploads/' })
// const app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    //   cb(null, '/tmp/my-uploads')
      if(file.originalname.endsWith('.md')){
          cb(null , path.resolve(__dirname,'../../public/File'))
      }else{
          cb(null , path.resolve(__dirname,'../../public/img'))
      }
    },
    filename: function (req, file, cb) {
        // console.log(req.file,file);
      cb(null, Date.now()+file.originalname)
    }
  })
  
module.exports = multer({ storage: storage }).single('file')