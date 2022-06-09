const mongoMessage = require('../mongoose/mongoMessage')
const mongoMessRep = require('../mongoose/mongoMessRep')

//处理留言发送
const handlerMessage = async (value) => {
    // console.log(value);

    let bol = await mongoMessage.create({
        visitorName: value.visitorName,
        messageValue: value.messageValue
    })
    return {
        code: 1,
        value: '消息留下成功',
        bol
    }
}

//处理留言获取第一页数据
const getMessageFirstPage = async()=>{
    let bol = await mongoMessage.find({},{},{sort:{visitTime:-1},skip:0,limit:3})
    let b = await (await mongoMessage.find()).length
    // console.log(b.length);
    return {bol,b}
}

//处理留言分页
const getMessageOnwhich = async(num)=>{
    // console.log(num.pageNum);
    let numPage = num.pageNum
    let bol = await mongoMessage.find({},{},{sort:{visitTime:-1},skip:(numPage-1)*3,limit:3})
    return bol
}

//处理留言回复功能
const handlerMessRep = async(body)=>{
    // console.log(body);
    let bol = await mongoMessRep.create({
        replyName:body.repName,
        replyValue:body.repValue,
        aboutId:body.repId
    })
    // let bol = mongoMessRep.find().populate('aboutId')
    return bol
}

//留言回复数据
const getMessRep = async(id)=>{
    // console.log(id);
    let bol = await mongoMessRep.find().populate('aboutId')
    // let mainData = bol.filter(item=>{
    //     return item.aboutId._id == id
    // })
    return bol
}




module.exports = { 
    handlerMessage,
    getMessageFirstPage,
    getMessageOnwhich,
    handlerMessRep,
    getMessRep,
 }