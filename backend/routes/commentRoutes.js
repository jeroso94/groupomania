const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const commentCtrl = require('../controllers/commentControllers');

//Publier un commentaire sur une publication
router.post('/:id/comment', auth, commentCtrl.comment);

//Afficher tous les commentaires d'une publication
router.get('/', commentCtrl.showAllComments);

//Supprimer un commentaire
router.delete('/:id', auth, commentCtrl.delete);

module.exports = router;