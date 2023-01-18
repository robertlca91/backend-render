const Categories = require('../models/categories.models')
const TodosCategories = require('../models/todos-categories.models')
const Todos = require('../models/todos.models')

class TodosService {
  static async getAllTodos() {
    try {
      const result = await Todos.findAll()
      return result
    } catch (error) {
      throw error
    }
  }
  static async getById(id) {
    try {
      const result = await Todos.findByPk(id)
      return result
    } catch (error) {
      throw error
    }
  }
  static async getTodosWithCategories(id) {
    try {
      const result = await Todos.findOne({
        where: { id },
        include: {
          model: TodosCategories,
          as: 'categories',
          attributes: ['id'],
          include: {
            model: Categories,
            as: 'category',
          },
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }
  static async createTodos(tasks) {
    try {
      const result = await Todos.create(tasks)
      return result
    } catch (error) {
      throw error
    }
  }
  static async updateTodos(id, update) {
    try {
      const result = await Todos.update(update, { where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
  static async deleteTodos(id) {
    try {
      const result = await Todos.destroy({ where: { id } })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = TodosService
