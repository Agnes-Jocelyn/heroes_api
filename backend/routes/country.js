const express = require('express')
const router = express.Router()
const Country = require('../controller/Country')

router.post('/post', Country.create)
router.get('/get', Country.getData)
router.get('/get/:countryId', Country.getDataById)
router.put('/put/:countryId', Country.editById)
router.delete('/delete/:countryId', Country.deletebyId)

module.exports = router;