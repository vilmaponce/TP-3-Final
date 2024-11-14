import { body, param } from 'express-validator';

// Validador para la creación de un superhéroe
export const crearSuperHeroeValidation = [
  body('nombreSuperHeroe')
      .notEmpty().withMessage('El nombre del superhéroe es obligatorio')
      .isString().withMessage('El nombre del superhéroe debe ser una cadena de texto')
      .trim()
      .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres'),

  body('nombreReal')
      .notEmpty().withMessage('El nombre real es obligatorio')
      .isString().withMessage('El nombre real debe ser una cadena de texto')
      .trim()
      .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),

  body('edad')
      .notEmpty().withMessage('La edad es obligatoria')
      .isInt({ min: 0 }).withMessage('La edad debe ser un número entero mayor o igual a 0')
      .toInt(),

  body('poderes')
      .notEmpty().withMessage('Los poderes son obligatorios')
      .isArray({ min: 1 }).withMessage('Debe proporcionar al menos un poder')
      .custom((poderes) => poderes.every(poder =>
          typeof poder === 'string' &&
          poder.trim().length >= 3 &&
          poder.trim().length <= 60
      )).withMessage('Cada poder debe ser una cadena de texto sin espacios en blanco y tener entre 3 y 60 caracteres'),

  // Otros campos opcionales
  body('planetaOrigen')
      .notEmpty().withMessage('El planeta de origen es obligatorio'),

  body('debilidad')
      .notEmpty().withMessage('La debilidad es obligatoria'),

  body('aliados')
      .optional()
      .isArray().withMessage('Los aliados deben ser un arreglo'),

  body('enemigos')
      .optional()
      .isArray().withMessage('Los enemigos deben ser un arreglo')
];


// Validación para actualizar un superhéroe
export const actualizarSuperHeroeValidation = [
  param('id').isMongoId().withMessage('El ID debe ser un ID de MongoDB válido'),

  body('nombreSuperHeroe')
      .optional()
      .isString().withMessage('El nombre del superhéroe debe ser una cadena de texto')
      .trim()
      .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres'),

  body('nombreReal')
      .optional()
      .isString().withMessage('El nombre real debe ser una cadena de texto')
      .trim()
      .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),

  body('edad')
      .optional()
      .isInt({ min: 0 }).withMessage('La edad debe ser un número entero mayor o igual a 0')
      .toInt(),

  body('poderes')
      .optional()
      .isArray({ min: 1 }).withMessage('Los poderes deben ser un arreglo con al menos un elemento')
      .custom((poderes) => poderes.every(poder =>
          typeof poder === 'string' &&
          poder.trim().length >= 3 &&
          poder.trim().length <= 60
      )).withMessage('Cada poder debe ser una cadena de texto sin espacios en blanco y tener entre 3 y 60 caracteres'),

  body('planetaOrigen')
      .optional()
      .notEmpty().withMessage('El planeta de origen no puede estar vacío'),

  body('debilidad')
      .optional()
      .notEmpty().withMessage('La debilidad no puede estar vacía'),

  body('aliados')
      .optional()
      .isArray().withMessage('Los aliados deben ser un arreglo'),

  body('enemigos')
      .optional()
      .isArray().withMessage('Los enemigos deben ser un arreglo')
];

// Validación para eliminar un superhéroe
export const eliminarSuperheroeValidation = [
  param('id').isMongoId().withMessage('El ID debe ser un ID de MongoDB válido')
];

