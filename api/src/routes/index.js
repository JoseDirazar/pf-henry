const { Router } = require('express');
const router = Router();
const events = require("./events")
const users = require('./users');
const verifyToken = require('../utils/verifyToken');

router.use('/protected', verifyToken)
router.use("/protected", events)


router.use('/', users)

module.exports = router;