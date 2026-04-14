//Actividad 2
//1 leer desde un endpoint
    //1.1 Reconfigurar los datos/ adaptar   

//2 Escribir datos en un archivo local tipo json



//3 Leer los datos del archivo guardado
import fsp from 'node:fs/promises'
import path from 'node:path'

try{
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json() // convierte json texto a objeto javascript

    const usuariosModificados = usuarios.map((usuario)=>{
        //construyo objeto nuevo
        const usuariosModificado = {
            id: usuario.id,
            email: usuario.email,
            nombre: usuario.name
        }
        return usuariosModificado
    })

    const ruta = path.resolve('usuarios.json')
    const datosJson = JSON.stringify(usuariosModificados,null, 4)
    await fsp.writeFile(ruta, datosJson)

    const usuarioslocales = await fsp.readFile(ruta, 'utf8')
    console.log(usuarioslocales)

}catch(error){
    console.log(error)
}