import express from "express"

const puerto = 6000
//instancia de servidor express
const app = express()

const obtenerCosas =(req,res)=>{
 res.set('content-type', 'text/html')
 res.status(200)
 res.end('<h1>Servidor de EZE</h1>')   
}
app.get(`/`, obtenerCosas)

app.get(`/saludo`, (req, res)=>{
    res.end('Hola soy eze')
})


//post
app.post(`/`, (req,res)=>{
 res.end('estoy en verbo POST y ruta /')   
})

//
app.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})