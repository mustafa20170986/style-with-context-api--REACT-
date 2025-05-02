const LocalStrategy =require("passport-local")
const passport=require("passport")
const bcrypt =require("bcryptjs")
const users =require('./puser.js')

//config loacl strategy
passport.use(new LocalStrategy(
    //customfileds
    {usernameField:'email',passwordField:'password'},
    async(email,password,done)=>{
const user =users.find(u=>u.email===email)//if email is = user emial
if(!user){//throw error if not match
    return done(null,false,{msg:"invalid user"})
}
//if email matched then check the password
const has =await bcrypt.compare(password,user.password)//compare
if(!has){//if incorrect
    return done(null,false,{msg:"password incorrect"})
}
return done (null,user)// if okay return the user object
    }
))
//serilalize for session 
passport.serializeUser((user,done)=>{//store user id  in session 
    //and express use cookie to store the session 
done(null,user.id)
})
//deserialize
passport.deserializeUser((id,done)=>{//read get(user id )
// from the session not 
    // form the cookie directly 
const user = users.find(u=>u.id ===id)
done(null,user)
})
module.exports=passport