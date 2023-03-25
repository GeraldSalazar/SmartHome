const usersData = './users.json'
const fs = require('fs');

function getUsersData() {
    const jsonData = fs.readFileSync(require.resolve(usersData), { encoding: "utf8" })
    return JSON.parse(jsonData)   
}

module.exports = {
    getUsersData
}
