-- Productos cuyo nombre contenga 'ina’

SELECT*FROM productos WHERE nombre LIKE '%ina%';

-- Clientes nacidos entre 1980 y 1990

SELECT*FROM clientes WHERE YEAR(fecha_nacimiento) BETWEEN 1980 AND 1990;

-- Ventas con cantidad entre 2 y 5

SELECT*FROM ventas WHERE cantidad BETWEEN 2 AND 5;

-- Productos cuyo precio sea mayor a 6

SELECT*FROM productos WHERE precio > 6;

-- Productos cuyo tipo sea 'Analgésico' o 'Antiinflamatorio’

SELECT*FROM productos WHERE tipo = 'Analgésico' OR tipo = 'Antiinflamatorio';

-- Ordenar productos por precio de manera ascendente

SELECT*FROM productos ORDER BY precio ASC;

-- Ordenar clientes por nombre de manera descendente

SELECT*FROM clientes ORDER BY nombre DESC;

-- Ventas realizadas el día '2024-06-17’

SELECT*FROM ventas WHERE fecha = '2024-06-17';

-- Los productos con cantidad menor a 10, actualizar ubicación por “Pocas existencias”

UPDATE productos SET cantidad = 'Pocas existencias' WHERE cantidad < 10;

-- Calcular la ganancia total de cada venta

SELECT cantidad*precio_total FROM ventas;

-- Productos con precio entre 4 y 10

SELECT * FROM productos WHERE precio BETWEEN 4 AND 10;

-- Ventas con precio_total mayor a 20

SELECT*FROM ventas WHERE precio_total > 20;

-- **Insertar un nuevo producto con un valor por defecto en ubicación**

ALTER TABLE productos
MODIFY COLUMN ubicacion VARCHAR(30) DEFAULT 'Estante X';

INSERT productos(nombre, tipo, precio, cantidad, ubicacion)
VALUES('Fenitoina', 'Anticonvulsivo', 6, 40, DEFAULT);

SELECT*FROM productos;

-- Clientes cuyo nombre empiece con 'J’

SELECT * FROM clientes WHERE nombre LIKE 'J%';

-- Clientes cuyo nombre termine con la letra 'z’

SELECT*FROM clientes WHERE SUBSTRING(nombre, -1) = 'z';

-- Productos cuyo tipo no sea 'Analgésico’

SELECT*FROM productos WHERE tipo <> 'Analgésico';

-- **Sumar el total de ventas

SELECT SUM(precio_total) FROM ventas;

-- Contar el número de productos en 'Estante B’

SELECT SUM(cantidad) FROM productos WHERE ubicacion = 'Estante B';

-- Actualizar el precio de todos los productos aumentando un 10%

UPDATE productos SET precio = (precio + (precio*0.1));

-- Eliminar ventas con precio_total menor a 15

DELETE FROM ventas
WHERE precio_total < 15;
