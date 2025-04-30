const express =require("express")
const {passport} =require('./mid.js')
const router =express.Router()
const {re,login,rrr,dash} = require('./auth2.js')
const rbac = require('./rn.js')
router.post('/login',login)
router.post('/registration',re)
router.post('/refresh',rrr)
router.get('/dash',passport.authenticate("jwt",{session:false}),rbac(["admin","organizer","attend"]),dash)// protected route with stateless 
// and loacl strategy includingn otkne based authorizatuin
module.exports=
    router
