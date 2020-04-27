const express = require('express')
const router = express.Router();
const HeroesContainer = require('../controller/HeroesContainer')

router.post('/post', HeroesContainer.create)
router.get('/get', HeroesContainer.getData)
router.get('/get/:heroesId', HeroesContainer.getDatabyId)
router.delete('/delete/:heroesId', HeroesContainer.deleteById)
router.put('/edit/:heroesId', HeroesContainer.editById)

module.exports = router;