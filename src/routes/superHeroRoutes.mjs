import express from 'express';
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30YConFiltrosController,
  crearSuperheroeController,  // Agregamos el controlador de creación
  actualizarSuperheroeController, // Agregamos el controlador de actualización
  eliminarSuperheroeController // Agregamos el controlador de eliminación
} from '../controllers/superheroesController.mjs';
import { crearSuperHeroeValidation } from '../validators/superHeroValidator.mjs';

import { validationHandler } from '../validators/validationHandler.mjs';
import { actualizarSuperHeroeValidation } from '../validators/superHeroValidator.mjs';
import { eliminarSuperheroeValidation } from '../validators/superHeroValidator.mjs';



const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
// router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/superheroes/filtros', obtenerSuperheroesMayoresDe30YConFiltrosController)

// Nuevas rutas para manejar los métodos POST, PUT y DELETE
// router.post('/superheroes', crearSuperheroeController); // Para crear un superhéroe
// router.put('/heroes/:id', actualizarSuperheroeController); // Para actualizar un superhéroe por ID
// router.delete('/heroes/:id', eliminarSuperheroeController); // Para eliminar un superhéroe por ID


// Rutas para crear, actualizar y eliminar superhéroes con validación
router.post(
  '/superheroes',
  crearSuperHeroeValidation,
  validationHandler,
  crearSuperheroeController
);
// Ruta para actualizar superhéroe
router.put(
  '/heroes/:id',
  actualizarSuperHeroeValidation,
  validationHandler,
  actualizarSuperheroeController
);

router.delete(
  '/heroes/:id',
  eliminarSuperheroeValidation,
  validationHandler,
  eliminarSuperheroeController
);

export default router;
