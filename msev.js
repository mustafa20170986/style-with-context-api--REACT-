// mxerv.js
const express = require('express');
const passport = require('./loc.js');
const { connect } = require('./redcli.js');
const authRoutes = require('./art.js');
const protectedRoutes = require('./pro.js');

const emu = express();

emu.use(express.json());
emu.use(passport.initialize());

emu.use('/auth', authRoutes);
emu.use('/protected', protectedRoutes);


connect()//connect the redis server first
.then(()=>{// then catch for handling error
emu.listen(3000,()=>{
  console.log("emu is listening")
})
})
 .catch((eror)=>{
  console.log("error",eror)
 })
