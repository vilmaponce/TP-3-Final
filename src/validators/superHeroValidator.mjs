import { body, param } from 'express-validator';

// Validador para la creación de un superhéroe
export const crearSuperHeroeValidation = [
    body('nombreSuperHeroe')
      .notEmpty().withMessage('El nombre del superhéroe es obligatorio'),
    body('nombreReal')
      .notEmpty().withMessage('El nombre real es obligatorio'),
    body('edad')
      .isInt({ min: 0 }).withMessage('La edad debe ser un número entero mayor o igual a 0'),
    body('planetaOrigen')
      .notEmpty().withMessage('El planeta de origen es obligatorio'),
    body('debilidad')
      .notEmpty().withMessage('La debilidad es obligatoria'),
    body('poderes')
      .isArray().withMessage('Los poderes deben ser un arreglo'),
    body('aliados')
      .isArray().withMessage('Los aliados deben ser un arreglo'),
    body('enemigos')
      .isArray().withMessage('Los enemigos deben ser un arreglo')
  ];

// Validación para actualizar un superhéroe
export const actualizarSuperHeroeValidation = [
    param('id').isMongoId().withMessage('El ID debe ser un ID de MongoDB válido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    body('edad').optional().isInt({ min: 0 }).withMessage('La edad debe ser un número positivo'),
    body('planetaOrigen').optional().notEmpty().withMessage('El planeta de origen no puede estar vacío'),
    body('poderes').optional().isArray().withMessage('Poderes debe ser una lista de valores')
  ];

// Validación para eliminar un superhéroe
export const eliminarSuperheroeValidation = [
  param('id').isMongoId().withMessage('El ID debe ser un ID de MongoDB válido')
];

