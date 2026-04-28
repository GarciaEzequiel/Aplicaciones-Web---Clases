import express from 'express'   
const PUERTO = 3000
const  app = express()

//midleware
function middleware(req, res, next){
    console.log('Se ejecuto middleware')
    if(true){
        res.send('terminado el middleware')
    }else{
        next()
    }   
}

app.use(express.static())
app.use('/saludo', middleware)


app.get('/', middleware, (req, res)=>{
    console.log('peticion')
     res.send('Bienvenidos perross')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})









