const usersService = require('../services/auth-service.service')

async function authenticateUser(req, res, next){
    console.log('Authenticating user...')
    try {
        res.send(usersService.validateUserData(req.body))
    } catch (err) {
        console.error(`Error while getting login info`, err.message);
        next(err);
    }
}

module.exports = {
    authenticateUser
}