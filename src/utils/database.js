const { Sequelize } = require('sequelize')
require('dotenv').config()

// crear una instancia con parametro
// un bejto de configuracion que no es mas que las credenciales de mi base de datos
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER, // el que tiene usuario pone su usuario
  host: process.env.DB_HOST, //127.0.0.1
  port: process.env.DB_PORT, // este no se de dondes sale
  password: process.env.DB_PASSWORD, // pones tu contraseña
  dialect: 'postgres', // la base de datos que estamos usando
  logging: false,
})

module.exports = db
