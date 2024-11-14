# Superhéroes API-Vilma Ponce

API desarrollada en Node.js y MongoDB para gestionar un catálogo de superhéroes. Permite realizar operaciones CRUD (por ahora GET) y consultar superhéroes por atributos específicos, como edad y planeta de origen.
# Superhéroes API.
```
src/
├── config/
│   └── dbConfig.mjs             # Configuración de la base de datos
├── controllers/
│   └── superheroesController.mjs # Controladores para manejar la lógica de las rutas
├── models/
│   └── SuperHero.mjs             # Definición del esquema de Mongoose
├── repositories/
│   └── SuperHeroRepository.mjs   # Capa de repositorio para la lógica de acceso a datos
├── routes/
│   └── superHeroRoutes.mjs       # Rutas de la API
├── services/
│   └── superheroesService.mjs    # Lógica de negocio para interactuar con el repositorio
├── views/
│   └── responseView.mjs          # Formato de respuesta y vistas 
└── app.mjs                       # Archivo principal de la aplicación
```


API desarrollada en Node.js y MongoDB para gestionar un catálogo de superhéroes. Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) y consultar superhéroes por atributos específicos, como edad y planeta de origen.
[![Demostración del Proyecto](https://img.youtube.com/vi/uSMqLC6aapU/0.jpg)](https://youtu.be/uSMqLC6aapU)


## Tabla de Contenidos
- [Descripción](#descripción)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas de la API](#rutas-de-la-api)
- [Capturas de Pantalla y Video](#capturas-de-pantalla-y-video)
- [Autor](#autor)

## Descripción
Esta API permite gestionar un conjunto de datos de superhéroes. Puedes:
- Consultar la lista completa de superhéroes.
- Buscar superhéroes específicos por atributos.
- Obtener superhéroes mayores de 30 años.

## Tecnologías Usadas
- Node.js
- Express.js
- MongoDB y Mongoose

## Tabla de Contenidos
- [Descripción](#descripción)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Requisitos](#requisitos)

- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas de la API](#rutas-de-la-api)
- [Capturas de Pantalla y Video](#capturas-de-pantalla-y-video)
- [Autor](#autor)

## Descripción
Esta API permite gestionar un conjunto de datos de superhéroes. Puedes:
- Consultar la lista completa de superhéroes.
- Buscar superhéroes específicos por atributos.
- Obtener superhéroes mayores de 30 años.

## Tecnologías Usadas
- Node.js
- Express.js
- MongoDB y Mongoose
# Configuración del Validador de la API de Superhéroes

Este proyecto utiliza la biblioteca `express-validator` para validar la entrada del usuario para la API de superhéroes. Las reglas de validación se definen en un módulo separado, `superHeroValidator.mjs`, y luego se utilizan en las rutas y controladores correspondientes.

## Módulos de Validación

El módulo de validación, `superHeroValidator.mjs`, contiene las siguientes reglas de validación:

1. `crearSuperHeroeValidation`: Reglas de validación para crear un nuevo superhéroe.
2. `actualizarSuperHeroeValidation`: Reglas de validación para actualizar un superhéroe existente.
3. `eliminarSuperheroeValidation`: Reglas de validación para eliminar un superhéroe.

Cada regla de validación se define como un arreglo de middleware de validación utilizando las funciones `body()`, `param()` y `query()` de `express-validator`.

## Uso en Rutas y Controladores

Los middleware de validación se utilizan en las rutas y controladores correspondientes:

1. **Rutas**:
   - Los middleware de validación se importan del módulo `superHeroValidator.mjs`.
   - Los middleware de validación se aplican a las rutas relevantes utilizando los métodos `router.post()`, `router.put()` y `router.delete()`.
   - El middleware `validationHandler` también se aplica para manejar los errores de validación.

2. **Controladores**:
   - Las funciones de controlador, como `crearSuperheroeController`, `actualizarSuperheroeController` y `eliminarSuperheroeController`, son responsables de manejar la lógica de solicitud y respuesta.
   - Estas funciones de controlador se llaman después de que se han aplicado los middleware de validación en las rutas.

Al separar la lógica de validación en un módulo dedicado, la base de código permanece más organizada y mantenible. El uso de middleware de validación también asegura que la entrada del usuario se valide correctamente antes de procesar la solicitud, mejorando la robustez general de la API.
## Requisitos
- Node.js
- MongoDB (en local o en un servicio en la nube como MongoDB Atlas)
- Postman (opcional, para pruebas)

## Vilma Ponce
