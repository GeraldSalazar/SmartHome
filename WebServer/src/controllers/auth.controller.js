const usersService = require('../services/auth-service.service')

async function authenticateUser(req, res, next){
    console.log('Got it!')
    console.log(req.body)
    console.log(usersService.getUsersData())
    try {
        res.json({"userHasAccess": false});
    } catch (err) {
        console.error(`Error while getting login info`, err.message);
        next(err);
    }
}

module.exports = {
    authenticateUser
}