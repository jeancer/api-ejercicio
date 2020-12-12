const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    altura: String,
    masa: String,
    color_pelo: String,
    color_piel: String,
    color_ojo: String,
    ano_nacimiento: String,
    genero: String,
    mundo_natal: String,
    peliculas: [],
    especies: [],
    vehiculos: [],
    naves_estelares: [],
    creado: String,
    editado: String,
    url: String,
});

const Persona = mongoose.model('Persona', PersonaSchema);
module.exports = Persona; 