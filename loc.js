// loc.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Dummy user for demonstration
const fuser = {
  id: 1,
  name: "Emu",
  email: "emu2017@gmail.com",
  password: bcrypt.hashSync('sha-256', 10),
  permissions: ["read", "write"],
};

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, pass, done) => {//custom fields
    if (email !== fuser.email) {// if email not matched with user email
      return done(null, false, { msg: "Incorrect email" });// show error
    }
    bcrypt.compare(pass, fuser.password, (err, res) => {//compare password with suer password 
      if (err) return done(err);
      if (!res) return done(null, false, { msg: "Password incorrect" });
      return done(null, fuser);//if oaky return the user object 
    });
  })
);

module.exports = passport;
