const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://joao:joao@cluster0-s6ffj.mongodb.net/alunos')

//carregar modelos
const Aluno = require('./models/Aluno');
const Time = require('./models/Time');

//Carrega a rota de teste
const indexRoute = require('./routes/index-route');
//Carrega as Rotas
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/api', productRoute);

module.exports = app;