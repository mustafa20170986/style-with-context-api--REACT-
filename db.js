const  bcrypt =require("bcryptjs")
const users =[]// store user
const rft =[]// store refesh token
async function hd(){// asynchronas function to store a dummy user which we have seeded
    try{
const hash =await bcrypt.hash("sha-256",17)//convertt the password in to 17 length hash
console.log("password is:",hash)
users.push({
    id:1,
    password:hash,
    email:"emu2017@gmail.com",
    role:"admin"
})
console.log("user is seeded")
    }catch(err){
        console.log("error password hashing")
    }
}
hd()// function recall 
module.exports ={
    users,rft
}