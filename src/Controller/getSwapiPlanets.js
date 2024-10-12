const PlanetSwapiModel  = require('../Model/PlanetSwapiModel');

const handler = async (_) => {
  try {
    const res = await fetch("https://swapi.py4e.com/api/planets");

    console.log("Status Code:", res.status);
    const planets = [];
    const swapiData = await res.json();

    swapiData.results.forEach((planet) => {
      const planetSwapiModel = new PlanetSwapiModel(planet);
      planets.push(planetSwapiModel);
    });
    return {
      status: 200,
      data: planets,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 400,
      message: "Ocurrió un error en la consulta a SWAPI",
    };
  }
};

module.exports = { handler };
