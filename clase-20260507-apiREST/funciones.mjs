import productos from './productos.mjs'
export function obtenerProductos(req, res){
    res.json(productos)
}