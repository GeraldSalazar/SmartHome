const devicesDataJSON = './devices.json'
const fs = require('fs');

let deviceData = fs.readFileSync(devicesDataJSON, { encoding: "utf8" })
function getDevicesData() {
    deviceData = fs.readFileSync(devicesDataJSON, { encoding: "utf8" })
    return JSON.parse(deviceData)
}

function getDevicesByType(type){
    const allDevices = getDevicesData();
    return allDevices[type]
}

function getSpecificDevice(type, id){
    const devicesByType = getDevicesByType(type)
    return devicesByType[id]
}

function switchDeviceState(deviceID, type){
    const devicesData = getDevicesData()
    console.log("Editing: ")
    console.log(devicesData[type][deviceID])
    devicesData[type][deviceID].state = !devicesData[type][deviceID].state;
    console.log("bef write")
    console.log(devicesData)
    fs.writeFileSync(devicesDataJSON, JSON.stringify(devicesData, null, 2));
    console.log("after write")
    console.log(devicesData)
}

module.exports = {
    getDevicesByType,
    switchDeviceState,
    getSpecificDevice
}