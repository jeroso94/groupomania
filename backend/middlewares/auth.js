
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // console.log(req.headers);
    console.log(req.params.userid);
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    // console.log(userId);
    // next();

    if (req.params.userid && req.params.userid != userId) {
      throw 'Invalid user ID';
    } else {
      console.log ('Vérification user terminée, lecture du contrôle suivant');
      next();
    }

  } catch (err) {
    res.status(401).json({ error: err });
  }
};