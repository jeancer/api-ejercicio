const Persona = require('../models/Persona');
const axios = require('axios');

function recover(req,res){
const id = req.query.id;
Persona.findOne({id})
    .then(persona => {
        if(persona) return res.status(200).send({persona});
        return res.status(204).send({message: 'NOT FOUNT'});
    }).catch(error => res.status(500).send(error));
}

function load(req,res){
    const id = req.body.id;
    let per;
    axios.get('https://swapi.py4e.com/api/people/'+id, {
    }).then(function(response){
        Persona.findOne({id})
        .then(persona => {
            if(persona) return res.status(302).send({message: 'LA PERSONA YA EXISTE'});
            per = new Persona();
            per.id = id;
            per.nombre = response.data.name;
            per.altura = response.data.height;
            per.masa = response.data.mass;
            per.color_pelo = response.data.hair_color;
            per.color_piel = response.data.skin_color;
            per.color_ojo = response.data.eye_color;
            per.ano_nacimiento = response.data.birth_year;
            per.genero = response.data.gender;
            per.mundo_natal = response.data.homeworld;
            per.peliculas = response.data.films;
            per.especies = response.data.species;
            per.vehiculos = response.data.vehicles;
            per.naves_estelares = response.data.starships;
            per.creado = response.data.created;
            per.editado = response.data.edited;
            per.url = response.data.url;      
            per.save().then(persona => res.status(201).send({persona})).catch(error => res.status(500).send(error));
        });       
    });
    
}
module.exports = {
    recover,
    load
}