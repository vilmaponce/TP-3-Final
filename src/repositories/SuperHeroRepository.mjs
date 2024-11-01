import mongoose from 'mongoose'; 
import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {

  // Obtener un superhéroe por su ID
  async obtenerPorId(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("ID no válido");
    }
    
    try {
      return await SuperHero.findById(id);
    } catch (error) {
      console.error('Error al obtener superhéroe por ID:', error);
      throw error;
    }
  }

  // Obtener todos los superhéroes
  async obtenerTodos() {
    try {
      return await SuperHero.find({});
    } catch (error) {
      console.error('Error al obtener todos los superhéroes:', error);
      throw error;
    }
  }

  async buscarPorAtributo(atributo, valor) {
    const query = { [atributo]: new RegExp(valor, 'i') };
    try {
      return await SuperHero.find(query);
    } catch (error) {
      console.error(`Error al buscar superhéroes por ${atributo}:`, error);
      throw error;
    }
  }


  // Obtener superhéroes mayores de 30 años
  async obtenerMayoresDe30() {
    try {
      return await SuperHero.find({
        edad: { $gt: 30 }, // Filtra por edad
        planetaOrigen: 'Tierra', // También filtra por planeta de origen
        $expr: { $gte: [{ $size: "$poderes" }, 2] } // Al menos 2 poderes
      });
    } catch (error) {
      console.error('Error al obtener superhéroes mayores de 30:', error);
      throw error;
    }
  }
}

export default new SuperHeroRepository();

