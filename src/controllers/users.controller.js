const UserServices = require('../services/user.services')

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserServices.getById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getUserWithTasks = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserServices.getUserWithTasks(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const getUserWithCategories = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserServices.getUserWithCategories(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const createUser = async (req, res) => {
  try {
    const newUser = req.body
    const result = await UserServices.create(newUser)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = await UserServices.update(field, id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const result = await UserServices.delete({ where: { id } })
    res.status(201).json(result)
  } catch (error) {
    throw error
  }
}
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithTasks,
  getUserWithCategories,
}
