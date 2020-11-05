var Storage = require('node-storage');
var store = new Storage('db.json');
const jwt = require('jsonwebtoken');
const config = require('./config');

const login = (req, res) => {
  const mailUser = req.body.mail;
  const passUser = req.body.password;
  const users = store.get('users');
  const payload = {
    check: true
  };
  const token = jwt.sign(payload, req.app.get('llave'), {
    expiresIn: 1440
  });
  let existsUser = users.find(item => (item.mail === mailUser && item.password === passUser));
  if (existsUser != null) {
    res.json({
      body: existsUser,
      token: token
    });
  } else {
    res.status(400).send({
      message: 'Usuario o contraseña incorrectos'
    });
  }
};

const logout = (req, res) => {
  const user = req.body.user;
  const users = store.get('users');
  users.map(u => u.lastAccess = (u.id === user.id) ? new Date().getTime() : u.lastAccess);
  store.put('users', users);
  res.json({
    body: 'ok',
  });
}

module.exports = {
  login,
  logout,
};
