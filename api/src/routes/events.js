const {Router} = require("express")
const router = Router()
const {getEvents} = require('../controllers/index')

router.get('/events', getEvents)

module.exports = router;