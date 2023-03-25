const express = require('express');
const router = express.Router();
const smartHomeController = require('../controllers/smart-home.controller')

/// ---------------- Routes for the house lights ---------------- ///

// GET api/lights
// get the state of all lights
router.get('/lights', smartHomeController.getAllLightsState);

// GET api/light/:id
// get the state for a particular light
router.get('/light/:id', smartHomeController.getLightState);

// POST api/light/:id
// set the state (ON/OFF) for a particular light
router.post('/light/:id', smartHomeController.setLightState);


/// ----------------  Routes for the house doors  ---------------- ///

// GET api/doors
// get the state of all doors
router.get('/doors', smartHomeController.getAllDoorsState);

// GET api/door/:id
// get the state for a particular door
router.get('/door/:id', smartHomeController.getDoorState);


/// ----------------  Routes for the house web camera  ---------------- ///

// GET api/webcam
// take a photo with web cam and get the resource
router.get('/webcam', smartHomeController.getCameraPicture);

module.exports = router;