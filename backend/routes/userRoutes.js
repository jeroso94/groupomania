const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/userControllers');

router.post('/signup', userCtrl.signup);
router.post('/optout', auth, userCtrl.optout);
router.post('/login', userCtrl.login);
router.post('/logout', auth, userCtrl.logout);

// router.get('/user', auth, userCtrl.user);

module.exports = router;