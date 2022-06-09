const mongoose = require('mongoose')


//创建mongoose数据库
module.exports = mongoose.model(
    'message',
    new mongoose.Schema(
        {
            visitorName:{                            //访客昵称
                type:String,
                default:'[匿名]'
            },
            messageValue:String,                     //留言的内容
            visitTime:{
                type:Date,
                default:Date.now() + 1000*60*60*8    //设置成北京时间
            }
        },
        {
            versionKey:false
        }
    )
)