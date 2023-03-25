function getDoorState(doorID){
    console.log("getDoorState service!. Door ID to change: "+doorID)
    // create process for C lib binary
    // ask C program to fetch the state of door with doorID, via cmd args
    // create smart device object with fetched state
    // send back the object to controller
    // controller send back to web client the updated data of the smart device obj
    return buildDoorObj(doorID, true)
}

function getStateAllDoors(){
    console.log("getStateAllDoors service!. Getting the state of every door")
    // create process for C lib binary
    // ask C program to fetch the state of all the LEDs, via cmd args
    // create smart device object with fetched state
    // send back the object to controller
    // controller send back to web client the updated data of the smart device obj
    const defaultDoors = []
    for (let i = 1; i < 5; i++) {
        defaultDoors.push(buildDoorObj(i, true))
    }
    return defaultDoors
}

function buildDoorObj(id, state){
    return {id: id, name: DoorlocationName[id], type: "DOOR", state: state}
}

const DoorlocationName = {
    1 : "MAIN DOOR",
    2 : "DOOR ROOM 1",
    3 : "DOOR ROOM 2",
    4 : "BACK DOOR",
}

module.exports = {
    getDoorState,
    getStateAllDoors,
}