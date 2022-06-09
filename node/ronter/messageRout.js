const express = require('express')
const router = express.Router()

const {handlerMessage,getMessageFirstPage,getMessageOnwhich,handlerMessRep,getMessRep} = require('../module/handler/handlermessage')
//导入mongoose的留言数据库
// const mongoMessage = require('../module/mongoose/mongoMessage')

//保存留言信息路由
router.post('/sendMessage',async(req,res)=>{
    let result = await handlerMessage(req.body)
    // console.log(result);
    res.send(result)
})

//获取留言数据路由
router.get('/getMessageFP',async (req,res)=>{
    let result = await getMessageFirstPage()
    // console.log(result);
    res.send(result)
})

//设置留言分页数据路由
router.post('/getMessageOnwhich',async(req,res)=>{
    // console.log(req.body);
    let result = await getMessageOnwhich(req.body)
    res.send(result)
})

//设置留言回复路由
router.post('/messRepChi',async(req,res)=>{
    let result = await handlerMessRep(req.body)
    // console.log(result[0].aboutId._id == req.body.repId);
    // console.log(result);
    // let abv = result.filter(item=>{
    //     return item.aboutId._id == req.body.repId
    // })
    res.send(result)
})

//设置获取留言回复数据的路由
router.post('/getMessRep',async(req,res)=>{
    // console.log(req.body.id);
    let result = await getMessRep(req.body)
    let abv = result.filter(item=>{
        return item.aboutId._id == req.body.id
    })
    // console.log(abv);
    res.send(abv)
})



module.exports = router