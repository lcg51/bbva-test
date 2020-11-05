const jwt = require('jsonwebtoken');

const checkAccess = (req, res, next) => {

  const token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, req.app.get('llave'), (err, decoded) => {
      if (err) {
        return res.status.send({
          message: 'Token inválida'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(400).send({
      message: 'Token no proveída.'
    });
  }

};

module.exports = {
    checkAccess
};
