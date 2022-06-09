const mongoose = require('mongoose')

module.exports = mongoose.model(
    'mongoMessRep',
    new mongoose.Schema(
        {
            replyName:{
                type:String,
                default:'[匿名]'
            },

            replyValue:String,

            replyTime:{
                type:Date,
                default:Date.now() + 1000*60*60*8 
            },

            aboutId:{                                     //设置表关联，绑定回复哪一个留言
                type:mongoose.SchemaTypes.ObjectId,
                ref:'message'
            }
        },
        {
            versionKey:false
        }
    )
)