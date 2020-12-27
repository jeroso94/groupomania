
const db = require('../models') ;
const { QueryTypes } = require('sequelize');

// GESTION DES PUBLICATIONS
// CREATE Authentifié - Méthode POST de mediaCtrl.upload
exports.upload = (req, res, next) => {
    console.log (req.file);
    db.Medias.create({
        userId: req.body.media.userId,
        mediaUrl: req.body.media.mediaUrl
        //mediaUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
        .then ((media) => {
            res.status(201).json({ message: 'Objet enregistré !'})
            console.log("auto-generated ID :", media.id, "userId:", media.userId, "Path:", media.mediaUrl);    
        })
        .catch(error => res.status(400).json({ error }));
};

// GESTION DES PUBLICATIONS
// READ Public - Méthode GET de mediaCtrl.showAllMedia
exports.showAllMedia = (req, res, next) => {
    db.sequelize.query("SELECT * FROM `Medias`", { type: QueryTypes.SELECT })
        .then((medias) => res.status(200).json( medias ))
        .catch((error) => res.status(404).json({ error: error }));
};

/*
exports.showAllMedia = (req, res, next) => {
    db.Medias.findAll({ attributes: [ 'userId', 'mediaUrl' ]})
        .then((medias) => res.status(200).json( medias ))
        .catch((error) => res.status(404).json({ error: error }));
};
*/

// GESTION DES PUBLICATIONS
// READ Authentifié - Méthode GET de mediaCtrl.showAllMediaPostedByMe
exports.showAllMediaPostedByMe = (req, res, next) => {
    db.Medias.findAll({where: { userId: req.params.id }})
        .then((medias) => res.status(200).json( medias ))
        .catch((error) => res.status(404).json({ error: error }));
};
/*
exports.showAllMediaPostedByMe = (req, res, next) => {
    db.sequelize.query("SELECT * FROM `Medias` WHERE `userId` = `req.params.id`, { type: QueryTypes.SELECT })
        .then((medias) => res.status(200).json( medias ))
        .catch((error) => res.status(404).json({ error: error }));
};
*/

// GESTION DES PUBLICATIONS
// DELETE Authentifié - Méthode DELETE de mediaCtrl.delete
const fs = require('fs');
exports.delete = (req, res, next) => {
    db.Medias.findOne({where: { id: req.params.id }})
        .then((media) => {
            const filename = media.mediaUrl.split('/images/')[1];
            //res.status(200).json( filename );
            fs.unlink(`images/${filename}`, () => {
                db.Medias.destroy({where: { id: req.params.id }})           
                    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(404).json({ error }));
};
