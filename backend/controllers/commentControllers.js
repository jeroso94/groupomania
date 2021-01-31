const db = require('../models') ;
const { QueryTypes } = require('sequelize');


// GESTION DES COMMENTAIRES
// CREATE Authentifié - Méthode POST de mediaCtrl.comment
exports.comment = (req, res, next) => {
    console.log(req.body)
    console.log('req.body.comment:', req.body.comment, 'req.params.id:',req.params.id, 'req.body.userid:', req.body.userid)
    db.Comments.create({
        comment: req.body.comment,
        mediaId: req.params.id,
        userId: req.body.userid
    })
        .then (() => {
            res.status(201).json({ message: 'Commentaire enregistré !'})
        })
        .catch(error => res.status(400).json({ error }));
};