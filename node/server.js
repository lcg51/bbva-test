const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config');

var Storage = require('node-storage');
 
// this will synchronously create storage file and any necessary directories
// or just load an existing file
var store = new Storage('db.json');

const users = [{
  id: 1,
  name: 'Luis',
  surname: 'Cobo',
  mail: 'luis@accenture.com',
  password: '123456',
  lastAccess: new Date().getTime()
},
{
  id: 2,
  name: 'Juan',
  surname: 'Vilanova',
  mail: 'juan@accenture.com',
  password: '123456',
  lastAccess: new Date().getTime()
}];


var app = express();

var PORT = 3000;

var corsOption = {
  origin: '*'
};
var server;

app.set('llave', config.llave);
app.use(bodyParser.json());
app.use(cors(corsOption));

const middleware = express.Router();

middleware.use((req, res, next) => {
  const token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, app.get('llave'), (err, decoded) => {      
      if (err) {
        return res.status.send({ message: 'Token inválida' });    
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
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.get('/', function (req, res) {
  res.status(200).send('Hsdasd');
});

app.post('/login', (req, res) => {
  const mailUser = req.body.mail;
  const passUser = req.body.password;
  const users = store.get('users');
  const payload = {
    check:  true
   };
  const token = jwt.sign(payload, app.get('llave'), {
    expiresIn: 1440
   });
  let existsUser = users.find(item => (item.mail === mailUser && item.password === passUser));
  if (existsUser != null) {
    res.json({
      body: existsUser,
      token: token
    });
  } else {
    res.status(400).send({message: 'Usuario o contraseña incorrectos'});
  }
});

app.post('/logout', middleware,(req, res) => {
  const user = req.body.user;
  const users = store.get('users');
    users.map(u => u.lastAccess = (u.id === user.id) ? new Date().getTime() : u.lastAccess);
    store.put('users',users);
    res.json({
      body: 'ok',
    });
});

server = http.Server(app);

server.listen(PORT, function () {
  console.log('Server is running at 3000');
});
