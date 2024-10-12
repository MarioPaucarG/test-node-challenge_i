const dynamoose = require("dynamoose");

const planetSchema = new dynamoose.Schema({
  planetaId: {
    type: String,
    hashKey: true,
  },
  diametro: {
    type: String,
  },
  clima: {
    type: String
  },
  agua_superficial: {
    type: String
  },
  nombre: {
    type: String
  },
  creado: {
    type: String
  },
  url: {
    type: String
  },
  periodo_rotacion: {
    type: String
  },
  editado: {
    type: String
  },
  terreno: {
    type: String
  },
  gravedad: {
    type: String
  },
  periodo_orbital: {
    type: String
  },
  peliculas: {
    type: Array,
    schema: [String],
  },
  residentes: {
    type: Array,
    schema: [String],
  },
  poblacion: {
    type: String
  },
});

const PlanetModel = dynamoose.model("PlanetasTable", planetSchema, {
  create: false,
});

module.exports = { PlanetModel };
