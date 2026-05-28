import pool from '../../conexion.bd.mjs'

// obtener los datos
export async function obtenerProductos(){
    const resultado = await pool.query('SELECT * FROM productos') //-- Result
    console.log(resultado)
    return resultado.rows
}