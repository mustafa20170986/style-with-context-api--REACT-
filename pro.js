// pro.js
const express = require('express');
const au = require('./aumid.js');
const perm = require('./per.js');

const router = express.Router();
//get request to the protected route login
router.get('/profile', au, (req, res) => { // here au middle ware authenticateb the user
  return res.status(200).json({ user: req.user });
});

router.get('/transactions', au, perm('write'), (req, res) => {//requires permission  to edit in the protected route
  return res.status(200).json({
    transactions: ["tx1", "tx2"],
  });
});

router.post('/edit', au, perm('write'), (req, res) => {
  return res.json({ msg: "Profile edited" });
});

module.exports = router;
