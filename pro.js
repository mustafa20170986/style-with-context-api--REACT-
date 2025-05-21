const express = require("express")
const {authmid,perm} =require('./aumid.js')
const router = express.Router()

//protected route config
router.get('/profile',authmid,(req,res)=>{//if user is authorized 
  return res.json({perofile:req.user})//then can access to the profile
})

router.get('/task',authmid,perm("read"),(req,res)=>{//if user have authorized and have red permission then 
  return res.json({msg:"admin task performed"})//can access this route 
})

module.exports = router