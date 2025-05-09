const express = require('express')
const {createuser,getuser,getusers,deleteuser,updateuser} =require('../controllers/controller')
const {tfs}= require('../controllers/transfer')
const {aploan}= require('../controllers/loan')
const {getpl}= require('../controllers/getplan')
const router = express.Router()

router.get('/plans',getpl)

router.post('/',createuser)
router.get('/',getusers)
router.post('/transfer',tfs)
router.post('/loan',aploan)

router.put('/:id',updateuser)
router.delete('/:id',deleteuser)
router.get ('/:id',getuser)

module.exports= router