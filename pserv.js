const express =require("express")
const session =require("express-session")
const passport = require('./pass.js')
const emu = express()
const route = require('./protes')
emu.use(express.json())
emu.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))
emu.use(passport.initialize())
emu.use(passport.session())
emu.use(route)

emu.listen(3000,()=>{
    console.log("emu is listening")
})
module.exports = emu