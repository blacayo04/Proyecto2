import express from 'express'
import usuariosRoutes from './routes/usuarios.routes.js'
import agenciaRoutes from './routes/agencia.routes.js'
import avionRoutes from './routes/avion.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express ()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',usuariosRoutes)
app.use('/api',agenciaRoutes)
app.use('/api',avionRoutes)


app.listen(3000)
console.log('Servidor corriendo en el puerto 3000')