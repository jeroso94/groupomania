const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const mediaCtrl = require('../controllers/mediaControllers');

//Publier un media
router.post('/upload/:userid', auth, multer, mediaCtrl.upload);

//Afficher toutes les publications que j'ai posté
router.get('/:userid', auth, mediaCtrl.showAllMediaPostedByMe);

//Afficher toutes les publications
router.get('/load/:userid', auth, mediaCtrl.showAllMedia);

module.exports = router;