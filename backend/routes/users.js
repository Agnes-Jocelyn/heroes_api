const express = require('express');
const router = express.Router();
const user = require('../controller/User')

router.post("/post", user.create)
router.post("/login", user.authenticated)

module.exports = router;
