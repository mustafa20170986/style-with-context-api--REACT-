const express = require("express")
const routes = require('./r.js')
const emu = express()
 const bodyparser =require("body-parser")
 emu.use(bodyparser.json())
 emu.use(routes)
 emu.listen(3000,()=>{
    console.log("emu is listening")
 })
 module.exports =emu