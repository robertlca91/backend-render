// vamos a validar el token

//si el token es valido
//lo dejamos pasar a la ruta

//si es invalido
//respondemos anda pasha
require('dotenv').config()
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers
  token = token.replace('Bearer ', '') // cualquiera de los dos esta bien
  //token = token.split(' ')[1] // cualquiera de los dos esta bien
  console.log(token)
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithms: 'HS512' },
    (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: 'esta mal',
          message: 'token invalido cambialo',
        })
      } else {
        console.log(decoded)
        next()
      }
    }
  )
}
module.exports = authMiddleware
