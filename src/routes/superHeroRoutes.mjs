import express from 'express';
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  // obtenerSuperheroesMayoresDe30YConFiltrosController
  obtenerSuperheroesMayoresDe30YConFiltrosController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
// router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/superheroes/filtros', obtenerSuperheroesMayoresDe30YConFiltrosController)


export default router;
