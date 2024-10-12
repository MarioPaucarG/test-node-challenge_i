# API para obtener y agregar planetas del API SWAPI

El API fue hecho como un reto simple, utiliza Node.js, DynamoDB, Serverless y Jest; contiene 3 endpoints, cabe resaltar que se necesita serverless con credenciales necesarias para despliegue en AWS.

## Uso

### Obtener planetas desde Swappi

endpoint de método GET para obtener los planetas desde SWAPI con los campos en español:

```
/planetas/swapi
```

los datos fueron almacenados en una clase y el resultado deberia ser similar a este:

```
{
    "status": 200,
    "data": [
        {
            "diametro": "10465",
            "clima": "arid",
            "agua_superficial": "1",
            "nombre": "Tatooine",
            "creado": "2014-12-09T13:50:49.641000Z",
            "url": "https://swapi.py4e.com/api/planets/1/",
            "periodo_rotacion": "23",
            "editado": "2014-12-20T20:58:18.411000Z",
            "terreno": "desert",
            "gravedad": "1 standard",
            "periodo_orbital": "304",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "poblacion": "200000"
        }
    ],
    "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
```

### Agregar planeta a la DB de DynamoDB

Endpoint de método POST encargado de almacenar un planeta en la base de datos, se utilizó un ORM llamado dynamoose:
```
/planetas
```
La estructura de los datos que se deben enviar es la misma de un planeta traido con el api anterior en formato JSON, ejemplo:

```
{
            "diametro": "10465",
            "clima": "arid",
            "agua_superficial": "1",
            "nombre": "Tatooine",
            "creado": "2014-12-09T13:50:49.641000Z",
            "url": "https://swapi.py4e.com/api/planets/1/",
            "periodo_rotacion": "23",
            "editado": "2014-12-20T20:58:18.411000Z",
            "terreno": "desert",
            "gravedad": "1 standard",
            "periodo_orbital": "304",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "poblacion": "200000"
        }
```

La respuesta debe ser parecida a esta:

```
{
    "code": 200,
    "description_status": "Operación exitosa",
    "message": "Planeta agregado correctamente"
}
```

### Obtener planetas desde DB

Endpoint de método GET, encargado de obtener el listado de planetas que se grabaron en la base de datos con el método POST anterior.

```
/planetas
```

La respuesta debe ser parecida a esta

```
{
    "status": 200,
    "data": [
        {
            "diametro": "10465",
            "nombre": "Tatooine",
            "agua_superficial": "1",
            "clima": "arid",
            "residentes": [
                "https://swapi.py4e.com/api/people/1/",
                "https://swapi.py4e.com/api/people/2/",
                "https://swapi.py4e.com/api/people/4/",
                "https://swapi.py4e.com/api/people/6/",
                "https://swapi.py4e.com/api/people/7/",
                "https://swapi.py4e.com/api/people/8/",
                "https://swapi.py4e.com/api/people/9/",
                "https://swapi.py4e.com/api/people/11/",
                "https://swapi.py4e.com/api/people/43/",
                "https://swapi.py4e.com/api/people/62/"
            ],
            "planetaId": "57780699-86ee-492d-964b-e258e49bb0fc",
            "url": "https://swapi.py4e.com/api/planets/1/",
            "poblacion": "200000",
            "periodo_orbital": "304",
            "peliculas": [
                "https://swapi.py4e.com/api/films/1/",
                "https://swapi.py4e.com/api/films/3/",
                "https://swapi.py4e.com/api/films/4/",
                "https://swapi.py4e.com/api/films/5/",
                "https://swapi.py4e.com/api/films/6/"
            ],
            "editado": "2014-12-20T20:58:18.411000Z",
            "periodo_rotacion": "23",
            "gravedad": "1 standard",
            "creado": "2014-12-09T13:50:49.641000Z",
            "terreno": "desert"
        }
    ],
    "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}
```

### Prueba unitaria con JEST

Una prueba sencilla para mostrar una prueba unitaria con JEST, se ejecuta con el siguiente comando una vez instalado los paquetes de node:

```
npm test
```

el resultado debe ser parecido al siguiente:

```
 PASS  tests/api.test.js
  √ test for getting planets from swapi and transforming properties to spanish (866 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.329 s, estimated 2 s
Ran all test suites.
```
