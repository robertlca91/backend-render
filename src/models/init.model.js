const Users = require('./users.model')
const Todos = require('./todos.models')
const Categories = require('./categories.models')
const TodosCategories = require('./todos-categories.models')

const initModels = () => {
  // vamos a crear las relaciones
  // hasOne ...> para indicar que tiene  una tarea
  //hasMany =---> para indicar que tiene muchas tareas
  //belongsTo .....>pertenece a

  Todos.belongsTo(Users, { as: 'author', foreignKey: 'user_id' })
  Users.hasMany(Todos, { as: 'task', foreignKey: 'user_id' })
  // nueva relacion entre users y categories
  Categories.belongsTo(Users, { as: 'author', foreignKey: 'users_id' })
  Users.hasMany(Categories, { as: 'categories', foreignKey: 'users_id' })
  //relacion M-M
  TodosCategories.belongsTo(Todos, { as: 'task', foreignKey: 'todos_id' })
  Todos.hasMany(TodosCategories, { as: 'categories', foreignKey: 'todos_id' })

  TodosCategories.belongsTo(Categories, {
    as: 'category',
    foreignKey: 'categorie_id',
  })
  Categories.hasMany(TodosCategories, {
    as: 'task',
    foreignKey: 'categorie_id',
  })
}
module.exports = initModels
