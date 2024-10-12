const { v4: uuidv4 } = require("uuid");
const { PlanetModel } = require("../Model/PlanetModel");

const handler = async (event) => {
  try {
    const request = JSON.parse(event.body);
    const {
      diametro,
      clima,
      agua_superficial,
      nombre,
      creado,
      url,
      periodo_rotacion,
      editado,
      terreno,
      gravedad,
      periodo_orbital,
      peliculas,
      residentes,
      poblacion,
    } = request;
    const result = await PlanetModel.create({
      planetaId: uuidv4(),
      diametro,
      clima,
      agua_superficial,
      nombre,
      creado,
      url,
      periodo_rotacion,
      editado,
      terreno,
      gravedad,
      periodo_orbital,
      peliculas,
      residentes,
      poblacion,
    });

    return {
      code: 200,
      description_status: "Operación exitosa",
      message: "Planeta agregado correctamente",
      id: result.planetId,
      nombre: result.name,
    };
  } catch (error) {
    console.log(error);
    return {
      code: 400,
      description_status: "Operación fallida",
      message: "Ocurrió un error en la operación",
    };
  }
};

module.exports = { handler };
