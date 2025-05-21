const express = require("express")
const {redcli}= require('./redcli.js')
const authR= require('./auth.js')
const prm = require('./pro.js')
const passport= require('./loc.js')

const emu = express()
emu.use(express.json())
emu.use(passport.initialize())

emu.use('/auth',authR)
emu.use('/protect',prm)

/*redcli().then(()=>{
  emu.listen(3000,()=>{
console.log("emu is listening")
  })
})*/
module.exports = emu