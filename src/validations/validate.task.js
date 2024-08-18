import { body } from 'express-validator';

export const validationCreateTask = [
    // /task method post
    body('title')
        .notEmpty().withMessage('Debe ingresar un titulo')
        .isString().withMessage('Debe ingresar un valor de tipo texto')
        .isLength({ max: 255 }).withMessage('Como maximo puede ingresar 255 caracteres'),
    body('description')
        .notEmpty().withMessage('Debe ingresar una descripcion')
        .isString().withMessage('Debe ingresar un valor de tipo texto')
        .isLength({ min: 10 }).withMessage('Como minimo debe ingresar 10 caracteres'),
    body('isComplete')
        .notEmpty().withMessage('Debe ingresar un valor')
        .isBoolean().withMessage('Debe ingresar true o false')
];

export const validationUpdateTask = [
    // /task:id method put
    body('title')
        .optional()
        .isString().withMessage('Debe ingresar un valor de tipo texto')
        .isLength({ max: 255 }).withMessage('Como maximo puede ingresar 255 caracteres'),
    body('description')
        .optional()
        .isString().withMessage('Debe ingresar un valor de tipo texto')
        .isLength({ min: 10 }).withMessage('Como minimo debe ingresar 10 caracteres'),
    body('isComplete')
        .optional()
        .isBoolean().withMessage('Debe ingresar true o false')
];
