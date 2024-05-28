const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/user/:username', userController.findByUsername);
router.get('/auth/status', userController.checkAuthStatus);

module.exports = router;