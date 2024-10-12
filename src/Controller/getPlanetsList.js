const { PlanetModel } = require("../Model/PlanetModel");

const handler = async (_) => {
  try {
    const result = await PlanetModel.scan().exec();
    return {
      status: 200,
      data: result,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    return {
      status: 400,
      message: "Ocurrió un error en la consulta a la base de datos",
    };
  }
};

module.exports = { handler }