function rbac(user){// extract role from payload and then access to the protected route
    return(req,res,next)=>{
    if(!user.includes(res.role)){
        return res.status(400).json({msg:"invalid role"})
    }
    next()// if every thing isokay then grant permissiion to protected route 
    }
}
module.exports=
    rbac
