import http from "node:http";
import fsp from "node:fs/promises";
import path from "node:path";

const PUERTO = 3000;
const rutaArchivo = path.join(process.cwd(), "usuarios.json");
const URL_API = "https://api.escuelajs.co/api/v1/users";

// Trae usuarios desde la API externa
async function obtenerUsuariosApi() {
  const respuesta = await fetch(URL_API);
  const usuarios = await respuesta.json();
  return usuarios;
}

// Guarda usuarios en el archivo usuarios.json
async function guardarUsuarios(usuarios) {
  await fsp.writeFile(rutaArchivo, JSON.stringify(usuarios, null, 2));
}

// Lee el archivo usuarios.json
async function leerUsuarios() {
  const contenido = await fsp.readFile(rutaArchivo, "utf8");
  return JSON.parse(contenido);
}

// Envía una respuesta JSON al cliente
function responderJson(res, codigoEstado, datos) {
  res.writeHead(codigoEstado, { "Content-Type": "application/json" });
  res.end(JSON.stringify(datos, null, 2));
}

// Envía una respuesta de texto al cliente
function responderTexto(res, codigoEstado, mensaje) {
  res.writeHead(codigoEstado, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(mensaje);
}

// Maneja la ruta /usuarios
async function manejarUsuarios(res) {
  const usuarios = await obtenerUsuariosApi();

  await guardarUsuarios(usuarios);

  const usuariosGuardados = await leerUsuarios();

  responderJson(res, 200, usuariosGuardados);
}

// Maneja la ruta /usuarios/filtrados
async function manejarUsuariosFiltrados(res) {
  try {
    const usuarios = await leerUsuarios();

    const usuariosFiltrados = usuarios.filter(usuario => usuario.id < 10);

    responderJson(res, 200, usuariosFiltrados);
  } catch (error) {
    responderTexto(res, 400, "Primero debe ejecutar la ruta /usuarios");
  }
}

// Creo el servidor HTTP
const servidor = http.createServer(async (req, res) => {
  try {
    if (req.url === "/usuarios" && req.method === "GET") {
      await manejarUsuarios(res);
    }

    else if (req.url === "/usuarios/filtrados" && req.method === "GET") {
      await manejarUsuariosFiltrados(res);
    }

    else {
      responderTexto(res, 404, "Recurso no encontrado");
    }
  } catch (error) {
    responderTexto(res, 500, "Ocurrió un error en el servidor");
  }
});

servidor.listen(PUERTO, () => {
  console.log(`Servidor funcionando en http://localhost:${PUERTO}`);
});