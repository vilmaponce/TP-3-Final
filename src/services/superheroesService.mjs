import superHeroRepository from '../repositories/SuperHeroRepository.mjs';
// services/superheroesService.mjs
import SuperHero from '../models/SuperHero.mjs';

// Tu código para obtener superhéroes


export async function obtenerSuperheroePorId(id) {
  return await SuperHero.findById(id).exec(); // Esto busca por el ID
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
  return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

// export async function obtenerSuperheroesMayoresDe30() {
//   const superheroes = await superHeroRepository.obtenerTodos();
//   return superheroes.filter(hero => hero.edad > 30); // Filtra solo los mayores de 30
// }

// Función que filtra superhéroes mayores de 30 años
export async function obtenerSuperheroesMayoresDe30YconFiltros() {
  const heroes = await superHeroRepository.obtenerTodos();
  return heroes.filter(hero => hero.edad > 30); 
}

