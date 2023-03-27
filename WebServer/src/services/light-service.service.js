const deviceUtils = require('./device-utils.service')
function switchLightState(lightID){
    deviceUtils.switchDeviceState(lightID, 'LEDS')
    console.log(deviceUtils.getDevicesByType('LEDS'))
    // create process for C lib binary
    // ask C program to change the state of LED with lightID, via cmd args
    // if change is successful, create smart device object with fetched state
    // if change is NOT successful, create error obj
    // send back the object to controller
    // controller send back to web client the updated data of the smart device obj or the error
}
function getLightState(lightID){
    console.log("getLightState service!. Light ID to change: "+lightID)
    return deviceUtils.getSpecificDevice("LEDS", lightID)
}
function getStateAllLights(){
    console.log("getStateAllLights service!. Getting the state of every LED")
    return deviceUtils.getDevicesByType("LEDS")
}

function buildLightObj(id, state){
    return {id: id, name: LEDlocationName[id], type: "LED", state: state}
}

const LEDlocationName = {
    1 : "ROOM1",
    2 : "ROOM2",
    3 : "LIVING ROOM",
    4 : "KITCHEN",
    5 : "BATHROOM"
}

module.exports = {
    getLightState,
    getStateAllLights,
    switchLightState
}