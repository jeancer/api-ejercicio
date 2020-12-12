const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Persona = require('./routes/Persona');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api-people/v1',Persona);
module.exports = app;