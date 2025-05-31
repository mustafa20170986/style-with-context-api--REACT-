import express from 'express'
const emu = express()

emu.get('/',(req,res)=>{
  return res.status(200).json({msg:"hellow this is your emu"})
})
emu.listen(3000,()=>{
  console.log('emu is listening')
})