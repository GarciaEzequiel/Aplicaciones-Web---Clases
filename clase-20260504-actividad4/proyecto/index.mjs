import express from 'express'

const PUERTO = 3000
const app = express()

const ValidacionCodigo= async (req, res, next)=>{
    const codigo = Number(req.params.codigo)
    const respuesta = await fetch('http://localhost:4321/usuario')
    const usuario = await respuesta.json()
   if(usuario.codigo===codigo){
        next()
   }

   usuario.codigo
} 

app.get('/:codigo', (req, res)=>{
    res.status(200).json({mensaje: 'El codigo es correcto'})
})
