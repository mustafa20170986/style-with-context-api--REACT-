const express = require('express')
const path  = require('path')
const emu =express()
emu.get((req,res,next)=>{
  console.log(`request type ${req.method} and the request for ${req.url}`)
  next()
})
emu.get('/header',(req,res,next)=>{
  res.append('custom-header','i love you emu so much')
  res.send(`header append`)
})
emu.get('/atta',(req,res)=>{
res.attachment('protootype2.txt')
res.send('file downloadinfg start')
})
emu.get('/cookie',(req,res)=>{
  res.cookie('user','emu',{maxAge:900000,httpOnly:true})
  res.send('cookie send')
})
emu.get('/cookieclear',(req,res)=>{
  res.clearCookie(user)
  res.send('cookie cleared successfully')
})
emu.get('/download',(req,res)=>{
  const file = path.join(__dirname,'sample.txt')
  res.download(file,'sample.txt',(err)=>{
    if(err){
      res.status(500).send('could not send the file')
  }
})
})
emu.get('/',(req,res)=>{
  res.send(`<h1> hello welcome to emu web application</h1>`)
})
emu.listen(3000,()=>{
  console.log('emu is listening')
})