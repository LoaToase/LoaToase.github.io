const mongoose = require('mongoose')


module.exports = mongoose.model(
    'reading',
    new mongoose.Schema(
        {
            readingTitle: String,            //文章标题
            readingTime:{                    //文章上传时间
                type:Date,
                default:Date.now()+ 1000*60*60*8 
            },
            readingIfRecom:{                 //是否推荐该文章
                type:Boolean,
                default:false
            },
            readingPath:String,              //文章路径，即文章内容
            readingLabel:String,             //文章标签
            readingIntro:String,             //文章简单介绍
        },
        {
            versionKey:false
        }
    )
)