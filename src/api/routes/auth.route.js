const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');

router.route('/register').post(authController.register);

module.exports = router;
