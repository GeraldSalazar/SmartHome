async function authenticateUser(req, res, next){
    console.log('Got it!')
    console.log(req.body)
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