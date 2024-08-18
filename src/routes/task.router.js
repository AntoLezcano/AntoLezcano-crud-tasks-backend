import {createTask, showTask, showTaskID, editTaskID, deleteTaskID} from '../controllers/task.controllers.js';
import {Router} from 'express';
import {validationCreateTask, validationUpdateTask} from '../validations/validate.task.js';
import {aplicateValidation} from '../middlewares/msj.validation.js';
export const task = Router();

//mostrar
task.get('/', showTask)
//buscar por id
task.get('/:id', showTaskID)
//ruta para crear
task.post('/', validationCreateTask, aplicateValidation ,createTask)
//ruta editar
task.put('/:id',validationUpdateTask, aplicateValidation, editTaskID)
//ruta para eliminar
task.delete('/:id', deleteTaskID)