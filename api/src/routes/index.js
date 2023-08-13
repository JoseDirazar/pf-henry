const { Router } = require('express');
const router = Router();
const events = require("./events")
const users = require('./users');
const verifyToken = require('../utils/verifyToken');
const mercadopago = require("./mercadopago"); // x*xx**xxx***

router.use('/protected', verifyToken)
router.use("/protected", events)
router.use("/pagar", mercadopago); // x*xx**xxx***


router.use('/', users)

module.exports = router;