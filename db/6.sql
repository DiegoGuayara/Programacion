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

-- Inserción de registros
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


-- Clasificar libros por antigüedad: si año publicación es antes de 1950 es Clásico, si esta entre 1950 y el 2000 es Moderno, y mas del 2000 es Contemporáneo

SELECT titulo,
autor,
año_publicacion,
if(año_publicacion < 1950, 'Clasico', if(año_publicacion BETWEEN 1950 AND 2000, 'Moderno', if(año_publicacion > 2000, 'Contemporaneo', 'efple'))) AS 'Antiguedad'
FROM libros
ORDER BY titulo;

-- Determinar disponibilidad de libros si las copias son mayores a 1

SELECT titulo,
autor,
año_publicacion,
if(copias_disponibles > 1, 'Si', 'No') AS 'Hay copias disponibles'
FROM libros
ORDER BY titulo;

-- Aplicar descuento del 10% a Bestsellers

SELECT titulo,
autor,
año_publicacion,
if(es_bestseller = 1, precio*0.1, precio) AS 'Precio'
FROM libros
ORDER BY titulo;

-- Para los libros clasificados como clásicos dar 7 días mas de préstamo

SELECT titulo,
autor,
año_publicacion,
if(año_publicacion < 1950, 'Clasico', if(año_publicacion BETWEEN 1950 AND 2000, 'Moderno', if(año_publicacion > 2000, 'Contemporaneo', 'efple'))) AS 'Antiguedad',
if(año_publicacion<1950, dias_prestamo + 7, dias_prestamo) AS 'Dias prestamo'
FROM libros
ORDER BY titulo;

-- Si un libro tiene más de 365 días que aparezca para revisión

SELECT 
*,
IF(DATEDIFF(CURDATE(), fecha_ingreso) > 365, 'Para revisión', 'No requiere revisión') AS estado_revision
FROM libros;


-- Clasificar libros por precio, si el precio es menos de 20: Económico, entre 20 y 50 Precio medio, más de 50 Premiun

SELECT titulo,
autor,
precio,
if(precio < 20, 'Económico', if(precio BETWEEN 20 AND 50, 'Medio', if(precio > 50, 'Premium', NULL))) AS 'Tipo'
FROM libros
ORDER BY titulo;

-- Clasificar los libros de manera que si esta en Español es Local, de lo contrario es Extranjero

SELECT titulo,
autor,
if(idioma = 'Español', 'Local', 'Extranjero') AS 'Procedencia'
FROM libros
ORDER BY titulo;

-- Los libros cuyo valor sea mas de 10, poseen un seguro del 10% del valor, los otros pagan un seguro de 5, calcule dicho valor

SELECT titulo,
autor,
precio,
if(precio > 10, precio + precio * 0.1, precio + 5) AS 'Seguro'
FROM libros
ORDER BY titulo;

-- Para determinar el método de conservación si la publicación es antes de 1950 su conservación es especial, si no va en estantería normal

SELECT titulo,
autor,
precio,
año_publicacion,
if(año_publicacion < 1950, 'Especial', 'Normal') AS 'Conservacion'
FROM libros
ORDER BY titulo;

-- Clasifique los libros así: Si son Ficción y publicación antes de 1950 es Ficción Clásica, si el genero es no Ficción y año de publicación mayor a 2000 es Ficción no contemporánea, los demás son clasificados como Otros


