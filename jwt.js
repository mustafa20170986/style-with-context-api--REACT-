// jwt.js
const jwt = require("jsonwebtoken");

const acsec = "ilove you emu";   // Access token secret
const refsec = "i love you oni"; // Refresh token secret

function genac(user) {//generate access token
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    acsec,
    { expiresIn: "60m" }
  );
}

function genref(user, tid) {//generate refresh token
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      tokenid: tid,
    },
    refsec,
    { expiresIn: "10d" }
  );
}

function vertok(token) {//verify access token and return its payload
  return jwt.verify(token, acsec);
}

function verref(token) {// verify refresh token
  return jwt.verify(token, refsec);
}

module.exports = {
  genref,
  genac,
  vertok,
  verref,
  acsec,
  refsec,
};
