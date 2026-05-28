import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'
// import rutasUsuarios from './rutas.mjs'


const PUERTO = 3000

const app = express()

app.use(rutasProductos)

// Configurar un aAPI REST Basica




app.listen(PUERTO)