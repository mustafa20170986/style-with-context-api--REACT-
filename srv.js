const express = require("express")
const routes = require('./r.js')
const {passport}=require('./mid.js')
const emu = express()
 const bodyparser =require("body-parser")
 emu.use(bodyparser.json())
 emu.use(routes)
 emu.use(passport.initialize())
 emu.listen(3000,()=>{
    console.log("emu is listening")
 })
 module.exports =emu