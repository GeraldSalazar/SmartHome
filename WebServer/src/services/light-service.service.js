function switchLightState(lightID){
    console.log("switchLightState service!. Light ID to change: "+lightID)
    // create process for C lib binary
    // ask C program to change the state of LED with lightID, via cmd args
    // if change is successful, create smart device object with fetched state
    // if change is NOT successful, create error obj
    // send back the object to controller
    // controller send back to web client the updated data of the smart device obj or the error
}
function getLightState(lightID){
    console.log("getLightState service!. Light ID to change: "+lightID)
    // create process for C lib binary
    // ask C program to fetch the state of LED with lightID, via cmd args
    // create smart device object with fetched state
    // send back the object to controller
    // controller send back to web client the updated data of the smart device obj
    return buildLightObj(lightID, true)
}
function getStateAllLights(){
    console.log("getStateAllLights service!. Getting the state of every LED")
    // create process for C lib binary
    // ask C program to fetch the state of all the LEDs, via cmd args
    // create smart device object with fetched state
    // send back the object to controller
    // controller send back to web client the updated data of the smart device obj
    const defaultLights = []
    for (let i = 1; i < 6; i++) {
        defaultLights.push(buildLightObj(i, true))
    }
    return defaultLights
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