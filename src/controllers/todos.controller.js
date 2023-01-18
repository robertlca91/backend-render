const TodosService = require('../services/todos.service')

const getAllTodos = async (req, res) => {
  try {
    const result = await TodosService.getAllTodos()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getTodosById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await TodosService.getById(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createTodos = async (req, res) => {
  try {
    const newtasks = req.body
    const result = await TodosService.createTodos(newtasks)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const updateTodos = async (req, res) => {
  try {
    const { id } = req.params
    const update = req.body
    const result = await TodosService.updateTodos(id, update)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params
    const result = await TodosService.deleteTodos(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getTodosWithCategories = async (req, res) => {
  try {
    const { id } = req.params
    const result = await TodosService.getTodosWithCategories(id)
    res.json({
      message: 'enviando tareas con categorias',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      error: error.messages,
      details: error.stack,
    })
  }
}

module.exports = {
  getAllTodos,
  getTodosById,
  getTodosWithCategories,
  createTodos,
  updateTodos,
  deleteTodos,
}
