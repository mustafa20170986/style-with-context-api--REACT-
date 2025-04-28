const express = require("express")
 const router = express.Router()
 const user = require('./user.js')
 const {gen,ver} = require('./id.js')
 const { genac,verac,verref,genref,refst}= require('./ac.js')

 router.post('/login',(req,res)=>{//login route
    const {name,password} = req.body//getting name and password from req body
    if(name ==!user.name || password ==!user.password){
        return res.status(401).json({msg:"invalid username or password"})
    }
    // if everything is okay then
    const idt = gen(user)//gererate id token
 const atk = genac(user)// acess token
 const rr =genref(user) // refresh token
 res.json({idt,atk,rr})// and show them in the response body
})

router.get('/dash',verac,(req,res)=>{//this route is protected bcz of verac
const role = user.role//extract user role
if(role === "admin"){
    res.json({msg:`weclome admin ${req.user.id}`})
}
else{
    res.json({msg:`weclome user ${req.user.id}`})
}
})
router.post('/refresh',(req,res)=>{//getting refresh token
const {rftk} = req.body // get the refresh token from the req body
if(!rftk || !refst.includes(rftk)){//if refresh token dont exist or refresh token is not in the refst database 
   return res.status(403).json({msg:"invalid refresh token"})//show this line
}
try{
    const pp =genref(user)// gereate a new refresh t oken
    const ll =genac(user)// generate a new access token
    return res.json({newac:ll})// display the access token
}catch(err){
    return res.status(403).json({message:"invalid token generation"})
}
})
router.post('/logout',(req,res)=>{//revoke token for logout
    const {rftk} = req.body//get the refresh token
    const idx = refst.indexOf(rftk)// get the index of it 
    if(idx>-1){//if the index exist 
        refst.splice(idx,1)//remove it
        return res.json({msg:"success revoked token"})
    }else{
        return res.status(400).json({msg:"refresh token not fouond"})
    }
})

module.exports =router