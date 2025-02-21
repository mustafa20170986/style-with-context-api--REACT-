const express = require('express')
const cors = require('cors')
const {PrismaClient} =require('@prisma/client')
const app = express()
const bodyParser = require('body-parser')
const prisma = new PrismaClient()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.post("/user",async(req,res) =>{
    const{name,email} = req.body
    try{
        const user = await prisma.user.create({
            data: {name,email},
    })
    res.json(user)
} catch(error){
    res.status(400).json({error:"email already exit"}
    )
}
})
app.get("/user",async(req,res)=>{
const user = await prisma.user.findMany()
res.json(user)
})
app.get("/user/:id",async(req,res)=>{
    const {id} = req.params
    const user = await prisma.user.findUnique({
        where:{id: parseInt(id)}
    })
    user ? res.json(user) : res.status(400).json({error:"id not found.maybe you are a new user "})

})
app.put("/user/:id",async(req,res)=>{
    const{id} = req.params
    const {name,email} =req.body
    try{
        const updt =await prisma.user.update({
            where:{id: parseInt(id)},
            data:{name,email}
        })
         res.json(updt)
    }
    catch(err){ 
        res.status(400).json({error:"failed to update your id"})
    }})
    app.delete("/user/:id",async(req,res)=>{
const {id} = req.params
try{
    await prisma.user.delet({
        where:{id:parseInt(id)},
    })
    res.json({message:"sccesssfully request for deleting youtr id"})
}
catch(error){
    res.status(400).json({error:"id doeesnt exist"})
}
    })
    app.listen(3000,()=>{
        console.log("app is listening")
    })