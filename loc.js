const passport =require("passport")
const LocalStrategy =require("passport-local").Strategy
const bcrypt =require("bcryptjs")

const user ={//hardcoded user 
  email:"emu2017@gmail.com",
  id:2017,
  password:bcrypt.hashSync("password",10),
  role:'admin',
  permissions:["read","write"]
}

passport.use(//local strategy
  new LocalStrategy({usernameField:'email'},(email,password,done)=>{//custom fields
const findemail =email ===user.email ? user:null//if email match with user email
if(!findemail){
  return done(null,false,{msg:"user not found"})
}
  bcrypt.compare(password,findemail.password,(err,isMatch)=>{// if password match with user password 
    if(err ||!isMatch){
      return done(null,false,{msg:"password incorrect"})
    }
    return done(null,user)
  })
  }
))
module.exports = passport