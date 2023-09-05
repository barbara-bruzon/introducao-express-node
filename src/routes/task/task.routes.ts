import { Router } from 'express'
import TaskController from '../../controllers/task/task.controller'

const taskRoutes = Router()

taskRoutes.post('/', TaskController.store)

//Listar uma task
taskRoutes.get('/', TaskController.index)

// Buscar uma task
taskRoutes.get('/:id', TaskController.show)

// Deletando uma task
taskRoutes.delete('/:id', TaskController.delete)

// Atualizar uma task
taskRoutes.put('/:id', TaskController.update)

export default taskRoutes