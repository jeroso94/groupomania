const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const mediaCtrl = require('../controllers/mediaControllers');

//Publier un media
router.post('/upload', auth, multer, mediaCtrl.upload);

//Afficher toutes les publications que j'ai posté
router.get('/:id', auth, mediaCtrl.showAllMediaPostedByMe);

//Afficher toutes les publications
router.get('/', mediaCtrl.showAllMedia);

//Supprimer un media
router.delete('/:id', auth, mediaCtrl.delete);

module.exports = router;