// 配置对应路由
let express=require('express')
let router=express.Router()
let select_success=require('./API/select_success')


router.get('/select_success',select_success.get_all)

module.exports=router


