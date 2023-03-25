const usersData = './users.json'
const { Console } = require('console');
const fs = require('fs');

function validateUserData(user){
    return isUserValid(user)
}
function isUserValid(userToCheck){
    const users = Object.values(getUsersData())
    for(let i=0; i<users.length; i++){
        const adminUser = users[i]
        if(adminUser.username == userToCheck.user && adminUser.password == userToCheck.password) return true
    }
    return false
}
function getUsersData() {
    const jsonData = fs.readFileSync(require.resolve(usersData), { encoding: "utf8" })
    return JSON.parse(jsonData)
}

module.exports = {
    validateUserData
}
