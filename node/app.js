const express = require('express')
const app = express()

//配置静态文件
app.use(express.static('./public'))
//解析文件格式
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//引入session
app.use(require('./module/plugin/session'))

//引入mongoose
const mongoose = require('./module/mongoose/mongoose')

//设置node留言子路由
app.use('/message',require('./ronter/messageRout'))

//设置一个管理员子路由
app.use('/admin',require('./ronter/admin'))


//后端连接80端口
app.listen('80',()=>{
    console.log('80端口连接成功');
})