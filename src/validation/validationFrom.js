const {body} = require('express-validator');
const db = require ("../database/models")


module.exports = [
    body('title').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength(min=3, max=30).withMessage("Debe contener entre 3 y 30 caracteres."),
    body("rating").notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isFloat({ min: 0, max: 10 }).withMessage('El número debe estar entre 0.1 y 10'),
    body("release_date")
    .custom((value) => {
      const fechaIngresada = new Date(value);
      const fechaMinima = new Date('01-01-1950');
      const fechaActual = new Date();

      if (fechaIngresada < fechaMinima || fechaIngresada > fechaActual) {
        throw new Error('La fecha debe ser mayor al 01-01-1950 y menor al día de hoy');
      }

      return true;
    }).withMessage('La fecha debe ser mayor al 01-01-1930 y menor al día de hoy'),
    body("awards").notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isInt({ min: 0, max: 15 }).withMessage('El número debe estar entre 0 y 15'),
    body("length").notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isInt({ min: 45, max: 300 }).withMessage('El mínimo es de 45 y el máximo de 300 minutos'),


];
