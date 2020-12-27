const db = require('../models') ;
const { QueryTypes } = require('sequelize');


// GESTION DES COMMENTAIRES
// CREATE Authentifié - Méthode POST de mediaCtrl.comment
exports.comment = (req, res, next) => {
    console.log('req.body.comment:', req.body.comment, 'req.param.mediaid:',req.param.mediaid, 'req.body.userId:', req.body.userId)
    db.Comments.create({
        comment: req.body.comment,
        mediaId: req.params.id,
        userId: req.body.userId
    })
        .then (() => {
            res.status(201).json({ message: 'Commentaire enregistré !'})
        })
        .catch(error => res.status(400).json({ error }));
};