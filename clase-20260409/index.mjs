import fsp from 'node:fs/promises';

try {
    const contenido = await fsp.readFile('./texto.txt', 'utf8')
    console.log(contenido)
}
catch(e){
    console.log(e)
}




