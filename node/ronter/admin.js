const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = require('../module/plugin/multer')
const fs = require('fs')
const { initialization, loginIn ,handleAtr,getAllArt,} = require('../module/handler/handleAdin')

//初始化管理员账号
router.get('/initialization', async (req, res) => {
    let result = await initialization()
    res.send(result)
})

//管理员登录
router.get('/loginIn', async (req, res) => {
    let result = await loginIn()
    // console.log(result);
    res.send(result)
})

//上传文章
router.post('/uploadArt', (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            console.log(err);
            // 发生错误
        } else if (err) {
            console.log(err);
            // 发生错误
        }

        // 一切都好
        let path = req.file.path
        let url = '/File/' + req.file.filename
        res.send({code:1,data:{path,url},value:'上传成功'})
    })
})

//删除上传文章
router.post('/deleteMd',async(req,res)=>{
    // console.log(req.body);
    fs.unlinkSync(req.body.path.path)
    res.send('删除成功')
})

//点击上传
router.post('/submitArt',async(req,res)=>{
    // console.log(req.body);
    let result = await handleAtr(req.body)
    if(!result.code)return
    res.send(result.value)
})


//获取文章数据
router.get('/getAllArt',async(req,res)=>{
    let result = await getAllArt()
    res.send(result)
})




module.exports = router