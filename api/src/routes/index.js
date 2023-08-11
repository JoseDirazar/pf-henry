const { Router } = require('express');
const router = Router();
const events = require("./events")



router.use("/", events)



module.exports = router;