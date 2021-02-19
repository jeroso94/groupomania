/* TODO --

[SECURITE]
    1/ Coder la validation et la transformation des entrées usilisateurs OWASP#7 - vulnérabilité XSS

*/


const db = require('../models') ;
const bcrypt = require ('bcrypt');

// Inscription
exports.signup = (req, res, next) => {
  db.Users.findOne({where: { email: req.body.email }})
  .then(user => {
    if (user) {
      return res.status(400).json({ error: 'Utilisateur déjà existant !' });
    }
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = db.Users.build({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

// Connexion
const jwt = require('jsonwebtoken');
exports.login = (req, res, next) => {
  db.Users.findOne({where: { email: req.body.email }})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user.id,
            user: user.email,
            isAdmin: user.admin,
            token: jwt.sign(
              { userId: user.id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Deconnexion
exports.logout = (req, res, next) => {
  db.Users.findOne({where: { email: req.body.email }})
    .then(user => {
      if (user) {
        return res.status(401).json({
          user: user.email,
          result: 'Utilisateur déconnecté'
        });
      }
    })
    .catch(error => res.status(500).json({ error }));
};

// Suppression de compte utilisateur
exports.optout = (req, res, next) => {
  db.Users.findOne({where: { email: req.body.email }})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      // return res.status(200).json({ user });

      bcrypt.compare(req.body.password, user.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        user.destroy()
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé !' }))
        .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};


// exports.user = (req, res, next) => {
//   db.Users.findOne({where: { email: req.body.email }})
//     .then(user => res.send(user.email))
//     .catch(error => res.status(401).json({ error: 'Utilisateur non trouvé !' }));
// };