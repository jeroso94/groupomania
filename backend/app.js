/* TODO --

[SECURITE]
    1/ OWASP#2 - Lutter contre piratage de session
        ...
        b) COOKIES - Transmettre via le HEADER des requêtes POST/GET

[DATABASE]
    1/ Configurer la connexion à la collection

[SECURITE]
    1/ OWASP#2 - Lutter contre piratage de session
        a) REVISER le CORS
    2/ ENVISAGER l'anonymisation OWASP#3 -  Lutter contre l'exposition des données sensibles
        a) Equivalent mySQL du module mongo-mask
        b) REVISER les privilèges GUEST
*/

const db = require("./models");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const helmet = require("helmet");

// ACTION OPTIONNELLE: Remplacer avec module mySQL
//const mongoMask = require('mongo-mask')


// ACTION : Adapter le routage à Groupomania_SocialNetwork
const userRoutes = require('./routes/userRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const commentRoutes = require('./routes/commentRoutes');

db.sequelize.sync()
.then(() => console.log('Succès de connexion à mySQL !'))
.catch(() => console.log('Echec de connexion à mySQL !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // OWASP#2 - Lutter contre piratage de session
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // ORIGINAL - 
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(helmet());

// ACTION : Adapter le routage à Groupomania_SocialNetwork
app.use('/api/auth', userRoutes);
app.use('/api/medias', mediaRoutes);
app.use('/api/comments', commentRoutes);


module.exports = app;