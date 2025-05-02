const express = require("express")
const passport = require('./pass.js')
const router =express.Router()
//secure authentic
function auth(req,res,next){//authentication verifying function
if(req.isAuthenticated()){// if authenticated
    return next()// grant permission to the next route 
}
return res.status(400).json({msg:"unauthorized"})
}


router.post('/login',passport.authenticate('local'),(req,res)=>{// handle login logic with passport local strategy
return res.status(200).json({msg:`welcome ${req.user.role} `})//return msg wtih usser role
})

router.get('/dash',auth,(req,res)=>{//if useer passes auth middleweare function grant
    //access to the dash (protected ) route  
return res.status(200).json({msg:"welcome to dash board "})
})
module.exports = router