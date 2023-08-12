const getEvents = require('./getEvents')
const {signupUser, loginUser, protectedUser,} = require('./user')

module.exports = {
    getEvents,
    signupUser,
    loginUser,
    protectedUser,
}