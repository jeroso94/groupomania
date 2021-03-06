
const db = require('../models') ;
const { QueryTypes } = require('sequelize');

// GESTION DES PUBLICATIONS
// CREATE Authentifié - Méthode POST de mediaCtrl.upload
exports.upload = (req, res, next) => {
    console.log (req.file.filename);
    console.log ('req.body.user: ' + req.body.user);

    db.Users.findOne({where: { email: req.body.user }})
        .then((retrievedUser) => {
            //res.status(200).json(retrievedUser);
            console.log('retrievedUser ID: '+ retrievedUser.dataValues.id);

            db.Medias.create({
                title: req.body.description,
                // mediaUrl: req.body.media.mediaUrl
                mediaUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                userId: retrievedUser.dataValues.id
            })
                .then ((media) => {
                    res.status(201).json({ message: 'Objet enregistré !'})
                    console.log("auto-generated ID :", media.id, "userId:", media.userId, "Path:", media.mediaUrl);    
                })
                .catch(error => res.status(400).json({ error }));
        })
        .catch((error) => res.status(404).json({ error: error }));
};

// GESTION DES PUBLICATIONS
// READ Authentifié - Méthode GET de mediaCtrl.showAllMedia
exports.showAllMedia = (req, res, next) => {
    db.sequelize.query("SELECT `Medias`.`id`, `Medias`.`title`, `Medias`.`mediaUrl`, `Medias`.`updatedAt`, `Users`.`email` FROM `Medias` INNER JOIN `Users` ON `Medias`.`userId`=`Users`.`id`", { type: QueryTypes.SELECT })
        .then((medias) => res.status(200).json( medias ))
        .catch(() => res.status(404).json({ error: "Echec de récupération de la liste des publications" }));
};

// GESTION DES PUBLICATIONS
// READ Authentifié - Méthode GET de mediaCtrl.showAllMediaPostedByMe
exports.showAllMediaPostedByMe = (req, res, next) => {
    // db.Medias.findAll({where: { userId: req.params.id }})
    db.sequelize.query("SELECT `Medias`.`id`, `Medias`.`title`, `Medias`.`mediaUrl`, `Medias`.`updatedAt`, `Users`.`email` FROM `Medias` INNER JOIN `Users` ON `Medias`.`userId`=`Users`.`id` WHERE `Medias`.`userId` = $userId", {
            bind: { userId: req.params.userid },
            type: QueryTypes.SELECT 
        })
        .then((medias) => res.status(200).json( medias ))
        .catch((error) => res.status(404).json({ error: error }));
};

