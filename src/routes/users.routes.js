const { Router } = require('express')
const {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  getUserWithCategories,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller')
const authMiddleware = require('../middlwares/auth.middleware')
const router = Router() // enrrutador

//app. get
//app.post
//app.put
//app.delete

router.get('/users', authMiddleware, getAllUsers)
router.get('/users/:id', authMiddleware, getUserById)
//obtener a un usuario con sus tareas
router.get('/users/:id/tasks', authMiddleware, getUserWithTasks)
router.get('/users/:id/categories', authMiddleware, getUserWithCategories) // traer median el users las categorias //
router.post('/users', createUser)
router.put('/users/:id', authMiddleware, updateUser)
router.delete('/users/:id', authMiddleware, deleteUser)

module.exports = router
