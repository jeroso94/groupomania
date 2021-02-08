const db = require('../models') ;
const { QueryTypes } = require('sequelize');


// GESTION DES COMMENTAIRES
// CREATE Authentifié - Méthode POST de commentCtrl.comment
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

// GESTION DES COMMENTAIRES
// READ Public - Méthode GET de commentCtrl.showAllComments
exports.showAllComments = (req, res, next) => {
    db.sequelize.query("SELECT `Comments`.`id`, `Comments`.`comment`, `Comments`.`mediaId`, `Users`.`email` FROM `Comments` INNER JOIN `Medias` ON `Comments`.`mediaId`=`Medias`.`id` INNER JOIN `Users` ON `Comments`.`userId`=`Users`.`id`", { type: QueryTypes.SELECT })
        .then((comments) => res.status(200).json( comments ))
        .catch(() => res.status(404).json({ error: "Echec de récupération de la liste des commentaires" }));
    
};