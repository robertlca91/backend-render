const { Router } = require('express')
const {
  getAllTodos,
  getTodosById,
  getTodosWithCategories,
  createTodos,
  updateTodos,
  deleteTodos,
} = require('../controllers/todos.controller')
const authMiddleware = require('../middlwares/auth.middleware')
const router = Router()

router.get('/todos', authMiddleware, getAllTodos)
router.get('/todos/:id', authMiddleware, getTodosById)
/// voya traer los todos con categories
router.get('/todos/:id/categories', authMiddleware, getTodosWithCategories)
router.post('/todos', authMiddleware, createTodos)
router.put('/todos/:id', authMiddleware, updateTodos)
router.delete('/todos/:id', authMiddleware, deleteTodos)

module.exports = router
