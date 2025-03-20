-- 1. Listar todos los productos, ordenados alfabéticamente por nombre. 

select*from productos order by nombre;

-- 2. Mostrar los productos que tienen un precio superior a $10.000. 

select * from productos where precio > 10000;

-- 3. Obtener los productos que pertenecen a la categoría "Lácteos".

select * from productos where tipo = 'Lácteos';
 
-- 4. Listar los productos que se encuentran en el pasillo 2. 

select * from productos where ubicacion = 'Pasillo 2';

-- 5. Mostrar los 5 primeros productos de la lista. 

select * from productos limit 5;

-- 6. Consultar los productos que tienen un nombre que comienza con la letra "A". 

select * from productos where nombre like 'A%';

-- 7. Buscar los productos que contienen la palabra "Arroz" en su nombre. 

select * from productos where nombre like '%Arroz%';

-- 8. Obtener los productos que no tienen una ubicación específica. 

select * from productos where ubicacion is null;

-- 9. Listar los clientes ordenados por fecha de nacimiento de menor a mayor. 

select*from clientes order by fecha_nacimiento desc;

-- 10. Mostrar los clientes que nacieron en el año 1990 o posterior. 

select*from clientes where year(fecha_nacimiento) >= 1990;

-- 11. Obtener el número de clientes que nacieron en cada año. 

select fecha_nacimiento, 
count(nombre) as 'Personas nacidas en ese año' 
from clientes 
group by fecha_nacimiento;

-- 12. Listar las ventas realizadas en el mes de julio del año 2024. 

select*from ventas where month(fecha_venta) = '04';

-- 13. Mostrar las ventas realizadas por cada cliente, ordenadas por fecha de venta de menor a mayor. 

select*, sum(cantidad) as 'Ventas realizadas' from ventas group by id_cliente order by fecha_venta asc;

-- 14. Obtener el total de ventas realizadas por cada cliente. 

select sum(cantidad) as 'Ventas realizadas' from ventas group by id_cliente;

-- 15. Listar las ventas que superan los $20.000. 

select*from ventas where precio_total > 20000;

-- 16. Mostrar el producto más vendido durante el mes de julio del año 2024. 

-- No existe mes de julio

-- 17. Obtener el total de ventas de cada tipo de producto. 

select id_producto, sum(cantidad) from ventas group by id_producto;

-- 18. Listar los productos que no se han vendido durante el mes de julio del año 2024. 

-- No existe mes de julio

-- 19. Mostrar el cliente que ha realizado la mayor compra en total. 

select id_cliente, sum(precio_total) from ventas 
group by id_cliente 
order by precio_total desc
limit 1;

-- 20. Obtener el promedio de venta por cada día del mes de julio del año 2024. 

-- No existe mes de julio

-- 21. Listar los productos cuyo nombre tiene una longitud mayor a 15 caracteres. 

select*from productos where length(nombre) > 15;

-- 22. Mostrar el nombre del producto en mayúsculas, minúsculas y con la primera letra en mayúscula. 

select upper(nombre), 
lower(nombre), 
concat(upper(left(nombre, 1)), lower(substring(nombre, 2)))
from productos;

-- 23. Eliminar los espacios en blanco al inicio y final del nombre de los productos. 

select rtrim(ltrim(nombre))from productos;

-- 24. Reemplazar la palabra "Avenida" por "Calle" en la ubicación de los productos. 

-- Estan por pasillos, no por avenida

-- 25. Invertir el orden de los caracteres del nombre de los productos. 

select nombre, reverse(nombre) from productos;

-- 26. Extraer los primeros 3 caracteres del nombre de los productos. 

select nombre, left(nombre, 3) from productos;

-- 27. Obtener los últimos 4 caracteres del nombre de los productos. 

select nombre, right(nombre, 4) from productos;

-- 28. Concatenar el nombre y el precio de los productos, separando los valores por un guión. 

select concat_ws('-', nombre, precio) from productos;

-- 29. Concatenar el nombre, el tipo y la ubicación de los productos, separando los valores por comas y utilizando como separador de miles puntos. 

select concat_ws(',', nombre, tipo, ubicacion) from productos;

-- 30. Buscar si la cadena "Café" se encuentra en cualquier parte del nombre de los productos. 

select*from productos where nombre like '%Café%';
