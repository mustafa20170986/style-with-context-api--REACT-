const express = require("express")
const emu = express()
const cors = require("cors")
emu.use(express.json())
emu.use(cors())
emu.get('/api/message',(req,res)=>{
    return res.json({message:"i love ypu emu"})
})
 
emu.listen(3000,()=>{
    console.log("emu is listening")
})