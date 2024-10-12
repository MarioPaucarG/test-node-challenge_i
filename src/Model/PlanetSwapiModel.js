class PlanetSwapiModel {
    
    constructor(body) {
      this.diametro = body.diameter;
      this.clima = body.climate;
      this.agua_superficial = body.surface_water;
      this.nombre = body.name;
      this.creado = body.created;
      this.url = body.url;
      this.periodo_rotacion = body.rotation_period;
      this.editado = body.edited;
      this.terreno = body.terrain;
      this.gravedad = body.gravity;
      this.periodo_orbital = body.orbital_period;
      this.peliculas = body.films;
      this.residentes = body.residents;
      this.poblacion = body.population;
    }
}

module.exports = PlanetSwapiModel;