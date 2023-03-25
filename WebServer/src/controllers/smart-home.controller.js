const lightService = require('../services/light-service.service')
const doorService = require('../services/door-service.service')
/// ------------------------------------------------------------------ ///
/// ---------------- Controllers for the house lights ---------------- ///

async function getAllLightsState(req, res, next){
    console.log('getAllLightsState executed!!')
    try {
        res.json(lightService.getStateAllLights());
    } catch (err) {
        console.error(`Error while getting all lights state`, err.message);
        next(err);
    }
}
async function getLightState(req, res, next){
    console.log('getLightState executed!!')
    try {
        res.json(lightService.getLightState(req.query.id));
    } catch (err) {
        console.error(`Error while getting a light state`, err.message);
        next(err);
    }
}
async function setLightState(req, res, next){
    console.log('setLightState executed!!')
    console.log(req.originalUrl)
    console.log(req.query)
    try {
        res.json({"set-light": true});
    } catch (err) {
        console.error(`Error while setting light state`, err.message);
        next(err);
    }
}

/// ----------------------------------------------------------------- ///
/// ---------------- Controllers for the house doors ---------------- ///

async function getAllDoorsState(req, res, next){
    console.log('getAllDoorsState executed!!')
    try {
        res.json(doorService.getStateAllDoors());
    } catch (err) {
        console.error(`Error while getting all doors state`, err.message);
        next(err);
    }
}
async function getDoorState(req, res, next){
    console.log('getDoorState executed!!')
    try {
        res.json(doorService.getDoorState(req.query.id));
    } catch (err) {
        console.error(`Error while getting a door state`, err.message);
        next(err);
    }
}

/// ------------------------------------------------------------------ ///
/// ---------------- Controllers for the house camera ---------------- ///

async function getCameraPicture(req, res, next){
    console.log('getCameraPicture executed!!')
    try {
        res.json({"a-camera": true});
    } catch (err) {
        console.error(`Error while taking a web cam photo`, err.message);
        next(err);
    }
}


module.exports = {
    getAllLightsState,
    getLightState,
    setLightState,
    getAllDoorsState,
    getDoorState,
    getCameraPicture
}