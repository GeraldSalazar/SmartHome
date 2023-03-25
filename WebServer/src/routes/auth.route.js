const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

// Check user authentication credentials
// body with password and user
router.get('/', authController.authenticateUser);


module.exports = router;