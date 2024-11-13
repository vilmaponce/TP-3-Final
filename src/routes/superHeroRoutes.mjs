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

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
// router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/superheroes/filtros', obtenerSuperheroesMayoresDe30YConFiltrosController)

// Nuevas rutas para manejar los métodos POST, PUT y DELETE
router.post('/superheroes', crearSuperheroeController); // Para crear un superhéroe
router.put('/heroes/:id', actualizarSuperheroeController); // Para actualizar un superhéroe por ID
router.delete('/heroes/:id', eliminarSuperheroeController); // Para eliminar un superhéroe por ID


export default router;
