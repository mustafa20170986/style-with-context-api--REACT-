import express from 'express'
const emu =express()

emu.get('/',(req,res)=>{
    return res.status(200).json({msg:"hellow form neha"})
})
emu.listen(3002,()=>{
    console.log("neha is listening")
})