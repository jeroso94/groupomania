/* TODO --

[SECURITE]
    1/ Coder la validation et la transformation des entrées usilisateurs OWASP#7 - vulnérabilité XSS

*/


const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(req.headers);
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    // console.log ('userId:', userId, 'req.body.userId:', req.body.userId);
    next();
/*
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      console.log ('Vérification user terminée, lecture du contrôle suivant');
      next();
    }
*/
  } catch {
    res.status(401).json({ error: 'Token de session utilisateur périmé' });
  }
};