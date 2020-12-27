const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControllers');

router.post('/signup', userCtrl.signup);
router.post('/optout', userCtrl.optout);
router.post('/login', userCtrl.login);
router.post('/logout', userCtrl.logout);


module.exports = router;