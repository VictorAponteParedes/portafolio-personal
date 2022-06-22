//IMPORTANDO MOUDULOS DEL NPM
const express = require('express')
const app = express()
const path = require('path')
const morgar = require('morgan')

//iMPORTANDO ARCHIVOS INTERNOS
const indexRoute = require('./routes/index')

//DATABASES
require('./databases/mongodb')


//STATIC
app.use( express.static(path.join(__dirname + '/controllers/public')))

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgar('dev'))





//ROUTES
app.use('/' , indexRoute)


//EXPORTING
module.exports = app;