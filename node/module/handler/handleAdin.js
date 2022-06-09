const { findOne } = require('../mongoose/mongoAdmin')
const mongoAdmin = require('../mongoose/mongoAdmin')
const mongoReading = require('../mongoose/mongoReading')


//初始化管理员账号
const initialization = async()=>{
    let bol = await mongoAdmin.findOne({adminName:'root'})
    if(bol) return 'yes'
    await mongoAdmin.create({
        adminName:'root',
        adminPass:'123'
    })
    return 'ok'
}

//处理管理员登录
const loginIn = async()=>{
    let bol =await mongoAdmin.findOne({adminName:'root'})
    // console.log(bol);
    return bol
}

//处理上传的文章数据
const handleAtr = async(body)=>{
    await mongoReading.create({
        readingTitle:body.artTitle,
        readingIfRecom:body.isRecom,
        readingPath:body.url.url,
        readingLabel:body.artLabel,
        readingIntro:body.artNeirong
    })
    return {code:1,value:'上传成功'}
}

//获取文章
const getAllArt = async()=>{
    let bol = await mongoReading.find({})
    return bol
}


module.exports = {
    initialization,
    loginIn,
    handleAtr,
    getAllArt,
}