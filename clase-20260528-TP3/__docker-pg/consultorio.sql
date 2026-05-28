-- Conectar a la base de datos 'tienda'
\c consultorio;

-- Crear la tabla 'productos'
CREATE TABLE servicios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(255),
    imagen VARCHAR(200)
);

-- Insertar 10 productos deportivos
INSERT INTO servicios (nombre, descripcion, imagen) VALUES
    ('Puericultura', 'Acompañamiento en el cuidado y crianza de bebés y niños pequeños.', 'Puericultura.png'),
    ('Orientación Vocacional', 'Sesiones para jóvenes y adultos que buscan definir su camino académico o laboral.', 'OrientacioVocacional.png'),
    ('Sesiones Individuales', 'Espacio personal de escucha y acompañamiento psicológico.','Individuales.png'),
    ('Asesoramiento Familiar', 'Apoyo y orientación para resolver conflictos dentro del grupo familiar.','Familiar.png'),

