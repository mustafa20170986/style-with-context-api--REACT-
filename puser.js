const bcrypt =require("bcryptjs")
const users =[{//seeding user 
    id:1,
    email:"emu2017@gmail.com",
    role:"admin",
    password:bcrypt.hashSync("i love you emu",10)//here set the length 10 dont make it over 10
    //bcz it will take more time to run the server and response the routes in postman 
}]
module.exports=users