import express from 'express'
import * as controlador from './controlador.productos.mjs'


// Defini un enrutamiento
const rutasProductos = express.Router()

// Modulo productos
// GET /api/v1/productos
rutasProductos.get('/api/v1/productos',controlador.obtenerProductos)

// GET /api/v1/productos/:id
// rutasProductos.get('/productos/:id',)

// POST /api/v1/productos
// rutasProductos.post('/productos',)

// PUT /api/v1/productos/:id
// rutasProductos.put('/productos/:id',)

// DELETE /api/v1/producto/:id
// rutasProductos.delete('/producto/:id',)

export default rutasProductos