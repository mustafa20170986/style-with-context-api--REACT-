const express = require('express')
const {buy} =require('../controllers/invest')
const {promat} =require('../controllers/payment')
const {credit} = require('../controllers/crs')
const router2 = express.Router()
router2.post('/buy',buy)
router2.post('/applycredit',credit)
module.exports =router2
