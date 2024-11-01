import mongoose from 'mongoose';
import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30YconFiltros
} from '../services/superheroesService.mjs';


import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';


export async function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ mensaje: "ID no válido" });
  }

  try {
    const superheroe = await obtenerSuperheroePorId(id);
    if (superheroe) {
      res.send(renderizarSuperheroe(superheroe));
    } else {
      res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el superhéroe:", error);
    res.status(500).send({ mensaje: "Error interno del servidor" });
  }
}


export async function obtenerTodosLosSuperheroesController(req, res) {
  try {
    const superheroes = await obtenerTodosLosSuperheroes();
    // Verifica si la lista de superhéroes está vacía
    if (superheroes.length === 0) {
      return res.status(404).send({ mensaje: "No se encontraron superhéroes" });
    }
    res.send(renderizarListaSuperheroes(superheroes));
  } catch (error) {
    console.error("Error al obtener todos los superhéroes:", error);
    res.status(500).send({ mensaje: "Error interno del servidor" });
  }
}

// Controlador para buscar superhéroes por atributo
export async function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params; // Obtener los parámetros de la URL

  if (!atributo || !valor) {
    return res.status(400).send({ mensaje: "Faltan parámetros requeridos" });
  }

  try {
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor); // Usar la función importada
    if (superheroes.length > 0) {
      res.send(renderizarListaSuperheroes(superheroes));
    } else {
      res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
    }
  } catch (error) {
    console.error("Error al buscar superhéroes por atributo:", error);
    res.status(500).send({ mensaje: "Error interno del servidor" });
  }
}


// export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
//   try {
//     const superheroes = await obtenerSuperheroesMayoresDe30(); 
//     res.send(renderizarListaSuperheroes(superheroes)); 
//   } catch (error) {
//     console.error("Error al obtener superhéroes mayores de 30:", error);
//     res.status(500).send({ mensaje: "Error interno del servidor" });
//   }
// }


//Esta función responde a una solicitud GET en la ruta /superheroes/filtros y 
//devuelve superhéroes que tienen más de 30 años y posiblemente aplicando otros filtros.
// superheroesController.mjs
export async function obtenerSuperheroesMayoresDe30YConFiltrosController(req, res) {
  try {
    const superheroes = await obtenerSuperheroesMayoresDe30YconFiltros();
    if (superheroes.length === 0) {
      return res.status(404).send({ mensaje: "No se encontraron superhéroes mayores de 30 años" });
    }
    res.send(renderizarListaSuperheroes(superheroes));
  } catch (error) {
    console.error("Error al obtener superhéroes:", error);
    res.status(500).send({ mensaje: "Error interno del servidor" });
  }
}


