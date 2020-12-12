const express = require('express');
const PersonaController = require('../controllers/PersonaController');
const Persona = require('../models/Persona');

const Router = express.Router();
Router.get('/recover', PersonaController.recover)
      .post('/load', PersonaController.load)

module.exports = Router;