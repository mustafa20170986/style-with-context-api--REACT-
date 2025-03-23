const prisma = require('../client.js')
exports.createuser=async(req,res)=>{
const {name,email} = req.body
try{
    const user = await prisma.user.create({
        data:{name,email}
    })
    res.status(201).json(user)
}
catch(error){
    res.status(400).json({error:'error creating user'})
}
}
exports.getusers = async(req,res)=>{
    const users =await prisma.user.findMany()
res.json(users)
}
exports.getuser = async(req,res)=>{
    const {id} = req.params
    try{
    const user = await prisma.user.findUnique({
        where:{id:parseInt(id)}
    })
    if(!user)
       return res.status(404).json({error:'user not found'})
    res.json(user)
}
catch(error){
    res.status(400).json({error:'error to find'})
}}
 exports.updateuser = async(req,res)=>{
const {id}= req.params
const {name,email} = req.body
    try{
    const user = await prisma.user.update({
        where:{id:parseInt(id)},
        data:{name,email}
    })
    res.json(user)
 } catch(error){
res.status(400).json({error:'update error '})
 }}
exports.deleteuser =async(req,res)=>{
    const {id} = req.params
    try{
    await prisma.user.delete({
        where:{id}
    })
    res.status(204).send()
}
catch(error){
res.status(400).json({error:'eror to delet user'})
}}
