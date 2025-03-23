const express = require('express')
const {createuser,getuser,getusers,deleteuser,updateuser} =require('../controllers/controller')
const router = express.Router()
router.post('/',createuser)
router.get ('/:id',getuser)
router.get('/',getusers)
router.delete('/:id',deleteuser)
router.put('/:id',updateuser)
module.exports= router