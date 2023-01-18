// importamos express

const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/init.model')
const Users = require('./models/users.model')
const Todos = require('./models/todos.models')
const userRoutes = require('./routes/users.routes')
const todosRoutes = require('./routes/todos.routes')
const authRoutes = require('./routes/auth.routes')
const cors = require('cors')
require('dotenv').config()
//crear una instancia de express

const app = express()

console.log(process.env)
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

db.authenticate()
  .then(() => console.log('autenticacion exitosa'))
  .catch((error) => console.log(error))

initModels()

db.sync({ force: false })
  .then(() => console.log('data base sincronizada'))
  .catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome the server' })
})

app.use('/api/v1', userRoutes)
app.use('/api/v1', todosRoutes)
app.use('/api/v1', authRoutes)

// definir las rutas de nuestras endpoints(de ahora en adelante ep)
// para todas las consultas de usuarios
//locashost:8000/users  // enpoint
// localhost:8000/todos // enpoints para tareas

//GET a /users
app.get('/users', async (req, res) => {
  try {
    //vamos a optener el resultado de consultar a todos los usuarios de la bd
    const result = await Users.findAll() //SELECT * FROM users
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})
//obtener un usuario sabiendo su id

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Users.findByPk(id)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.get('/users/usermane/:usermane', async (req, res) => {
  try {
    const { usermane } = req.params
    const result = await Users.findOne({ where: { usermane } })
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.post('/users', async (req, res) => {
  try {
    const user = req.body
    const result = Users.create(user)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`el servidor corredor en el puerto ${PORT}`)
})
//actualizar un usuario, solo podemos cambiar solamente el password
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const field = req.body
    const result = Users.update(field, { where: { id } })
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
// eliminar un usuario
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = Users.destroy({ where: { id } })
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
// tarea entregable manda por el clas enter hacer lo mismo con tareas

// vamos a terminar los modelos
// crear las relaciones entre los modelos
// les voy a enseñar a insertar

// vamor a estar haciendo los endpoints y consultas

//users

//vamos a insertar informacion en nuestra db
//desde nuestro proyecto de node

// consultar informacion con endpoints

// seed (semilla)  sembrar en nuestro archivo

// entregable de academlo todoapp

app.get('/todos', async (req, res) => {
  try {
    const result = await Todos.findAll()
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params //identificador el id
    const result = await Todos.findByPk(id)
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

app.post('/todos', async (req, res) => {
  try {
    const task = req.body
    const result = await Todos.create(task)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    // console.log(error);
  }
})

app.put('/todos/:id', async (req, res) => {
  try {
    const saveTask = req.body // es el browser el navegador
    const { id } = req.params // sacamos el id para obetener l tarea a modificar, atraves delasolicitud con su parametro q es el id
    const result = await Todos.update(saveTask, { where: { id: id } }) //select * from where id = result.id
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    // console.log(error);
  }
})

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Todos.destroy({ where: { id } })
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

app.get('/todos/title/:title', async (req, res) => {
  try {
    const { title } = req.params
    const result = await Todos.findOne({ where: { title } })
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
