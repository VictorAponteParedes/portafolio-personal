const express = require('express');
const routes = express();

//Importanciones de archivos internos
const getClient = require('../controllers/getUser')
const createClient = require('../controllers/postUser')




routes.get('/form' , getClient)

routes.post('/registro' , createClient)

module.exports = routes;