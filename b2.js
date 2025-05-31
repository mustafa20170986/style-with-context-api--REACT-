import express from 'express'
const emu = express()

emu.get('/',(req,res)=>{
    return res.status(200).json({msg:"hellow from oni"})
})
emu.listen(3001,()=>{
    console.log('oni is listening')
})