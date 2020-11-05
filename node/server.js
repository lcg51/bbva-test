const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');
const middlewareRoutes = require('./middleware');

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
middleware.use(middlewareRoutes.checkAccess);

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
  res.status(200).send('Hello World!');
});

app.post('/login', routes.login);
app.post('/logout', middleware, routes.logout);

server = http.Server(app);

server.listen(PORT, function () {
  console.log('Server is running at 3000');
});
