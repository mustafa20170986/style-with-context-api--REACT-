const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy
const {Strategy:JwtStrategy,ExtractJwt} =require("passport-jwt")
const bcrypt =require("bcryptjs")
const {users} = require('./db.js')
const {sec}= require('./gen.js')

passport.use(//using loacl strategy 
    new LocalStrategy(
        {usernameField:"email",passwordField:"password"},// custom feilds dont edit them
        async(email,password,done)=>{//asynchronasly chek rthe email,password
const user = users.find(u=>u.email===email)// if matched email with user 
if(!user){
    return done(null,false,{msg:"invalid user"})
}
const match =await bcrypt.compare(password,user.password)//await to get the password and then convert int o hashes
if(!match){
    return done(null,false,{msg:"incorrect password"})
}
return done(null,user)//if credentials are valid reeturn user object
        }
    )
)

//token based authorization using jwt strategy


passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//extract the request head after bearer word 
        //get the token
        secretOrKey:sec//verify with secrrefct key to verify the usser 
    },
    (pay,done)=>{// function to verified the jwt payload 
const user = users.find(u=>u.id === pay.id)
if(!user){
return done(null,false,{msg:"unable to find user"})
}
return done(null,user)// if okay retun usser onbject 
    } 
)
)
 module.exports ={
    passport
 }
