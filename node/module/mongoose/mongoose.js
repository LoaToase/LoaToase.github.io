//创建一个mongo数据库
const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/wlx')
.then(
    ()=>{
        console.log('mongoose连接成功');
    }
).catch(
    ()=>{
        console.log('mongoose连接失败');
    }
)