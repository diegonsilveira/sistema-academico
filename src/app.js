'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb://sys:sys@ds044689.mlab.com:44689/sistema-academico');

//carrega os models
const Noticias = require('./models/noticias');
const Cursos = require('./models/cursos');
const Professores = require('./models/professores');
const Alunos = require('./models/alunos');

//carrega as rotas
const indexRoute = require('./routes/index');
const noticiasRoute = require('./routes/noticias');
const cursosRoute = require('./routes/cursos');
const professoresRoute = require('./routes/professores');
const alunosRoute = require('./routes/alunos');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/', indexRoute);
app.use('/noticias', noticiasRoute);
app.use('/cursos', cursosRoute);
app.use('/professores', professoresRoute);
app.use('/alunos', alunosRoute);

module.exports = app;