import http from 'node:http'

const app = http.createServer((peticion, respuesta)=>{
    if(peticion.method === 'GET'){

        if(peticion.url === '/'){
            respuesta.statusCode = 200
            return respuesta.end('Estas en la raiz' + peticion.url)
        }
        if(peticion.url === '/usuarios'){
            respuesta.statusCode = 200
            return respuesta.end('Estas en la ruta usuarios')
        }
    }

    //fallback
    respuesta.statusCode = 404
    respuesta.end('Ruta no encontrada')
})

//escuchar, estar atento a las peticiones
app.listen(3000, ()=>{
    console.log('servidor corriendo en http://localhost:3000')
}) 