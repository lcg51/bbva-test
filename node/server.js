const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

var PORT = 3000;

var corsOption = {
  origin: '*'
};
var server;

const users = [{
  id: 1,
  name: 'Luis',
  surname: 'Cobo',
  mail: 'luis@accenture.com',
  password: '123456',
  lastAccess: new Date().getTime()
}];

app.use(bodyParser.json());
app.use(cors(corsOption));

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
  let existsUser = users.find(item => (item.mail === mailUser && item.password === passUser));
  console.log(existsUser);
  if (existsUser != null) {
    res.json({
      body: existsUser,
      token: 'bdbahsd'
    });
  } else {
    res.status(400).send({error: 'Este usuario no está dado de alta'});
  }
});

server = http.Server(app);

server.listen(PORT, function () {
  console.log('Server is running at 3000');
});
