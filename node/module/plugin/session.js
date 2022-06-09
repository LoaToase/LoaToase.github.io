//设置session
const session = require('express-session')

const mongostore = require('connect-mongo')



module.exports = session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24*7
    },
    //绑定mongoose数据库
    store:mongostore.create({
        mongoUrl:'mongodb://localhost:27017/wlx'
    })
})