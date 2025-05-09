const express = require('express')
const  prisma= require('./client')
const route = require('./src/routers/route.js')
const router2 =require('./src/routers/route2.js')
const emu = express()
emu.use(express.json())
emu.use(route)
emu.use(router2)
 // Mount the routes under the /api prefix
emu.listen(3000,()=>{
    console.log("emu is listening")
})