-- 1. Obtener todos los productos cuyo precio es mayor que el precio del producto más caro.

SELECT*FROM productos WHERE precio = (SELECT MAX(precio) FROM productos);

-- 2. Obtener el nombre y precio de los productos que han sido pedidos por el cliente con id_cliente = 1.

SELECT nombre, precio FROM productos p JOIN pedidos pd ON p.id_producto = pd.id_producto WHERE pd.id_cliente = 1;

-- 3. Obtener el precio promedio de los productos en cada categoría.

SELECT categoria, AVG(precio) FROM productos GROUP BY categoria;

-- 4. Encontrar el precio del producto más barato en la categoría 'Computación'.

SELECT * FROM productos WHERE precio = (SELECT MIN(precio) FROM productos);

-- 5. Obtener los detalles de los pedidos realizados en la fecha más reciente.

SELECT*FROM pedidos WHERE fecha = (SELECT MAX(fecha) FROM pedidos);

-- 6. Listar los productos que no han sido pedidos por ningún cliente.

SELECT nombre, precio FROM productos WHERE id_producto NOT IN (SELECT id_producto FROM pedidos);

-- 7. Encontrar la cantidad total gastada por cada cliente.

SELECT pd.id_cliente,nombre, SUM(precio) FROM productos p JOIN pedidos pd ON p.id_producto = pd.id_producto GROUP BY pd.id_cliente;

-- 8. Obtener el nombre del producto más caro.

SELECT nombre, precio FROM productos WHERE precio = (SELECT MAX(precio) FROM productos);

-- 9. Obtener el precio de los productos que han sido pedidos más de una vez.

SELECT nombre, precio FROM productos WHERE () > 1

-- 10. Encontrar el cliente que ha realizado el mayor número de pedidos.

SELECT p.precio FROM productos p JOIN pedidos pd ON p.id_producto = pd.id_producto GROUP BY p.id_producto, p.precio HAVING COUNT(pd.id_producto) > 1;

-- 11. Obtener los productos que tienen un precio mayor al precio promedio de los productos.

 

-- 12. Listar los productos que han sido pedidos en la fecha más antigua.



-- 13. Obtener el nombre y precio de los productos que han sido pedidos por más de 3 clientes diferentes.



-- 14. Encontrar los productos en la categoría 'Audio' que han sido pedidos al menos una vez.



-- 15. Obtener los productos que fueron pedidos en todos los pedidos (es decir, cada producto ha sido pedido al menos una vez).



-- 16. Listar el cliente que ha gastado más en total.



-- 17. Obtener todos los pedidos que incluyen productos cuyo precio es superior al precio promedio de los productos.



-- 18. Obtener el nombre de los productos que han sido pedidos por el cliente con id_cliente = 2, pero no han sido pedidos por el cliente con id_cliente = 1.



-- 19. Encontrar los productos que no han sido pedidos en los últimos 30 días.



-- 20. Obtener el promedio de precios de los productos en la categoría 'Telefonía' para los pedidos realizados en el mes más reciente.


