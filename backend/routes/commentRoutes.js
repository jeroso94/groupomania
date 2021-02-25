const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const commentCtrl = require('../controllers/commentControllers');

//Publier un commentaire sur une publication
router.post('/:id/comment/:userid', auth, commentCtrl.comment);

//Afficher tous les commentaires d'une publication
router.get('/load/:userid', auth, commentCtrl.showAllComments);

//Supprimer un commentaire
router.delete('/delete/:id/:userid', auth, commentCtrl.delete);

module.exports = router;