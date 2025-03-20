-- Creación de la tabla 'libros'
CREATE TABLE libros (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(50) NOT NULL,
  genero VARCHAR(30),
  año_publicacion INT,
  copias_disponibles INT,
  precio DECIMAL(6,2),
  es_bestseller BOOLEAN,
  idioma VARCHAR(20),
  dias_prestamo INT,
  ultima_revision DATE
);

-- Inserción de 20 registros de muestra
INSERT INTO libros (titulo, autor, genero, año_publicacion, copias_disponibles, precio, es_bestseller, idioma, dias_prestamo, ultima_revision) VALUES
('Cien años de soledad', 'Gabriel García Márquez', 'Ficción', 1967, 5, 25.99, TRUE, 'Español', 14, '2023-12-15'),
('To Kill a Mockingbird', 'Harper Lee', 'Ficción', 1960, 3, 15.50, TRUE, 'Inglés', 14, '2024-01-20'),
('1984', 'George Orwell', 'Ficción', 1949, 0, 12.99, TRUE, 'Inglés', 14, '2023-11-05'),
('El principito', 'Antoine de Saint-Exupéry', 'Ficción', 1943, 7, 10.99, TRUE, 'Español', 14, '2024-02-28'),
('Breve historia del tiempo', 'Stephen Hawking', 'No ficción', 1988, 2, 30.00, FALSE, 'Español', 21, '2023-10-10'),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Ficción', 1605, 1, 35.99, FALSE, 'Español', 14, '2023-09-01'),
('El código Da Vinci', 'Dan Brown', 'Ficción', 2003, 4, 20.50, TRUE, 'Español', 14, '2024-03-15'),
('La metamorfosis', 'Franz Kafka', 'Ficción', 1915, 3, 11.99, FALSE, 'Español', 14, '2023-08-20'),
('El arte de la guerra', 'Sun Tzu', 'No ficción', -500, 6, 14.99, FALSE, 'Español', 21, '2024-01-05'),
('Orgullo y prejuicio', 'Jane Austen', 'Ficción', 1813, 2, 18.50, TRUE, 'Inglés', 14, '2023-12-01'),
('El nombre de la rosa', 'Umberto Eco', 'Ficción', 1980, 1, 28.99, FALSE, 'Español', 14, '2023-11-15'),
('Los juegos del hambre', 'Suzanne Collins', 'Ficción', 2008, 5, 22.99, TRUE, 'Español', 14, '2024-02-10'),
('El alquimista', 'Paulo Coelho', 'Ficción', 1988, 4, 19.99, TRUE, 'Español', 14, '2024-03-01'),
('Sapiens: De animales a dioses', 'Yuval Noah Harari', 'No ficción', 2011, 3, 32.50, TRUE, 'Español', 21, '2023-10-25'),
('Crónica de una muerte anunciada', 'Gabriel García Márquez', 'Ficción', 1981, 2, 16.99, FALSE, 'Español', 14, '2023-09-30'),
('El gran Gatsby', 'F. Scott Fitzgerald', 'Ficción', 1925, 0, 13.50, TRUE, 'Inglés', 14, '2023-07-15'),
('Mujercitas', 'Louisa May Alcott', 'Ficción', 1868, 3, 17.99, FALSE, 'Español', 14, '2024-01-10'),
('El señor de los anillos', 'J.R.R. Tolkien', 'Ficción', 1954, 1, 45.00, TRUE, 'Español', 21, '2023-12-20'),
('Breve historia de casi todo', 'Bill Bryson', 'No ficción', 2003, 2, 29.99, FALSE, 'Español', 21, '2024-02-05'),
('Rayuela', 'Julio Cortázar', 'Ficción', 1963, 1, 23.50, FALSE, 'Español', 14, '2023-11-30');


--1
select titulo,
autor,
año_publicacion,
case
    when año_publicacion < 1900 then 'Muy Antiguo'
    when año_publicacion between 1900 and 1949 then 'Antiguo'
    when año_publicacion between 1950 and 2000 then 'Moderno'
    when año_publicacion > 2000 then 'Contemporaneo'
    else null
end as 'clasificacion_antigüedad'
from libros
order by titulo;

--2
select titulo,
copias_disponibles,
case
    when copias_disponibles = 0 then 'No disponible'
    when copias_disponibles between 1 and 3 then 'Disponibilidad limitada'
    when copias_disponibles > 3 then 'Ampliamente disponible'
    else null
end as 'estado_disponibilidad'
from libros
order by titulo;

--3
select titulo,
precio,
case
    when precio < 15 then 'Económico'
    when precio between 15 and 24 then 'Precio medio'
    when precio between 25 and 32.99 then 'Precio alto'
    when precio > 32 then 'Premium'
    else null
end as 'categoria_precio'
from libros
order by titulo;

--4
select titulo,
es_bestseller,
copias_disponibles,
case
    when es_bestseller = 0 and copias_disponibles > 2 then 'Interés bajo'
    when es_bestseller = 0 and copias_disponibles between 0 and 2 then 'Interés moderado'
    when es_bestseller = 1 and copias_disponibles > 2 then 'Popular'
    when es_bestseller = 1 and copias_disponibles between 0 and 2 then 'Muy popular'
    else null
end as 'nivel_popularidad'
from libros;


--5
select titulo,
idioma,
case
    when idioma = 'Español' then 'Español(Principal)'
    when idioma = 'Inglés' then 'Inglés(Secundario)'
    else null
end as 'clasificacion_idioma'
from libros
order by titulo;

--6
select titulo,
genero,
año_publicacion,
case
    when año_publicacion < 1950 and genero = 'Ficción' then 'Ficción clásica'
    when año_publicacion < 1950 and genero = 'No ficción' then 'No ficción clasica'
    when año_publicacion between 1950 and 1999 and genero = 'Ficción' then 'Ficción moderna'
    when año_publicacion between 1950 and 1999 and genero = 'No ficción' then 'No ficción moderna'
    when año_publicacion >= 2000 and genero = 'Ficción' then 'Ficción contemporanea'
    when año_publicacion >= 2000 and genero = 'No ficción' then 'No ficción contemporanea'
end as 'categoria_especial'
from libros;


--7
select titulo,
dias_prestamo,
case
    when dias_prestamo = 14 then 'Préstamo estándar'
    when dias_prestamo <> 14 then 'Préstamo extendido'
end as 'tipo_prestamo'
from libros;

--8
select titulo,
año_publicacion,
case
    when año_publicacion < 1950 then 'Antes de 1950'
    when año_publicacion between 1950 and 1959 then 'Década de 1950'
    when año_publicacion between 1960 and 1969 then 'Década de 1960'
    when año_publicacion between 1970 and 1979 then 'Década de 1970'
    when año_publicacion between 1980 and 1989 then 'Década de 1980'
    when año_publicacion between 1990 and 1999 then 'Década de 1990'
    when año_publicacion between 2000 and 2009 then 'Década de 2000'
    when año_publicacion >= 2010 then 'Década de 2010 en adelante'
end as 'decada_publicacion'
from libros;


--9
select titulo,
ultima_revision,
case
    when ultima_revision > '2023-09-30' then 'Revisión próxima'
    when ultima_revision < '2023-10-01' then 'Necesita revisión urgente'
end as 'estado_revision'
from libros;

--10
select titulo,
case
    when length(titulo) < 9 then 'Titulo corto'
    when length(titulo) between 9 and 20 then 'Titulo medio'
    when length(titulo) > 20 then 'Tiutlo largo'
end as 'longitud_titulo'
from libros;