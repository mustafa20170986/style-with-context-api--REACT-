const express = require('express')
const {crs,delses} = require('./ses.js')
const {genac,verify}= require('./jwt.js')
const passport = require('passport')

const router = express.Router()
//login rpute config 
router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{session:false},async(err,user)=>{//local strategy
        if(!user || err){
            return res.status(403).json({msg:"incalid login credentials"})
        }
        const sessionid =`${user.id}-${Date.now()}`//take a session id 
        await crs(user.id,sessionid,user)// create a session according to id
        const token = genac(user,sessionid)//generate access token
        return res.json({token})//return the token object
    })(req,res,next)
})

//logout rooute config

router.post('/logout',async(req,res)=>{
    const authhead = req.headers.authorization//if headers contain auth
    if(!authhead){
        return res.status(403).json({msg:"invlalid token"})
    }
    const token =authhead.split(' ')[1]// extract the token 
    try{
    const payload =verify(token);//verify the token 
    
    await delses(payload.id,payload.sessionid)//wait to delet the session
    return res.status(200).json({msg:"logout success"})
    }catch(err){
        return res.status(403).json({msg:"error"})
    }
})

module.exports= router

