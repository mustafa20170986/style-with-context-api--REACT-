const express = require('express')
const prisma = require('./src/client.js')
const route = require('./src/routers/route.js')
const emu = express()
emu.use(express.json())
emu.use('/users',route)
emu.listen(3000,()=>{
    console.log("emu is listening")
})