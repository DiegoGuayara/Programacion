/*
Instrumento de evaluación de Bases de Datos Relacionales con MySQL
*/
/*
Instrumento de evaluación de Bases de Datos Relacionales con MySQL

Instrucciones:
A continuación, se te proporcionará un esquema de tabla llamado empleados y un conjunto de datos insertados en dicha tabla.
Realizar las HH consultas solicitadas utilizando las funciones específicas de MySQL estudiadas.
Para cada consulta, escriba el código SQL correspondiente y explique brevemente qué hace la consulta y qué resultado se espera obtener.
Todas las respuestas deben ser escritas claramente, y los resultados deben estar bien justificados.
*/


-- # --------- Realice las consultas ------------



-- # Obtener el salario módulo 100.

SELECT salario, salario%100 AS modulo FROM empleados;

-- # Listar el nombre y  un numero aleatorio para cada empleado

SELECT nombre, FLOOR(1+RAND()*20) AS 'Numero aleatorio' FROM empleados;

-- # Redondear el salario a 1 decimal.

SELECT salario, ROUND(salario,1) AS redondeo FROM empleados;

-- # Truncar el salario a 1 decimal.

SELECT salario, TRUNCATE(salario, 1) FROM empleados;

-- # Obtener la longitud del nombre

SELECT nombre, LENGTH(nombre) AS longitud FROM empleados;

-- # Concatenar nombre y apellido con un espacio entre ambos.

SELECT CONCAT(nombre, SPACE(1), apellido) AS 'Nombre completo' FROM empleados;

-- # Insertar una cadena HHHH dentro del nombre.

SELECT CONCAT(nombre, SPACE(1), 'HHHH') FROM empleados;

-- # Encontrar la posición de la letra 'a' en el nombre.

SELECT nombre, INSTR(nombre, 'a') FROM empleados;

-- # Extraer los primeros 3 caracteres del nombre.

SELECT SUBSTRING(nombre, 4) FROM empleados;

-- # Obtener la longitud del email.

SELECT email, LENGTH(email) AS 'Longitud email' FROM empleados;

-- # Localizar la posición de '@' en el email.

SELECT email, INSTR(email, '@') AS 'Posicion @' FROM empleados;

-- # Convertir el nombre a minúsculas.

SELECT nombre, LOWER(nombre) AS 'Minuscula' FROM empleados;

-- #  Rellenar el nombre con * a la izquierda hasta 10 caracteres.

SELECT nombre, LPAD(nombre, 10, '*') FROM empleados;

-- # Eliminar espacios en blanco a la izquierda del nombre.

SELECT nombre, LTRIM(nombre) FROM empleados;

-- # Repetir el nombre 3 veces.

SELECT repeat(nombre, 3) FROM empleados;

-- # Reemplazar 'a' por 'x' en el nombre.

SELECT nombre, REPLACE(nombre, 'a', 'x') FROM empleados;

-- # Invertir el nombre.

SELECT nombre, REVERSE(nombre) FROM empleados;

-- # Extraer los últimos 2 caracteres del nombre.

SELECT nombre, RIGHT(nombre, 2) AS 'Ultimos caracteres' FROM empleados;

-- # Añadir 5 espacios en blanco entre nombre y apellido.

SELECT CONCAT(nombre, SPACE(5), apellido) FROM empleados;

-- # Añadir 30 días a la fecha de contratación.

SELECT fecha_contratacion, ADDDATE(fecha_contratacion, interval 30 DAY) FROM empleados;

-- # Calcular la diferencia en días entre la fecha de contratación y la fecha actual.

SELECT DATEDIFF(CURDATE(), fecha_contratacion) FROM empleados;

-- # Añadir 1 mes a la fecha de contratación.

SELECT fecha_contratacion, ADDDATE(fecha_contratacion, INTERVAL 1 MONTH) FROM empleados;

-- # Restar 1 semana a la fecha de contratación

SELECT fecha_contratacion, ADDDATE(fecha_contratacion, INTERVAL -1 WEEK) FROM empleados;

-- # Formatear la fecha de contratación en el formato 'día-mes-año'.

SELECT fecha_contratacion, DATE_FORMAT(fecha_contratacion, '%d-%m-%Y') FROM empleados;

-- # Obtener el nombre del día de la semana de la fecha de contratación.

SELECT fecha_contratacion, DAYNAME(fecha_contratacion) FROM empleados;

-- # Extraer el mes de la fecha de contratación.

SELECT fecha_contratacion, MONTH(fecha_contratacion) FROM empleados;

-- # Obtener el último día del mes de la fecha de contratación.

SELECT fecha_contratacion, DAY(LAST_DAY(fecha_contratacion)) FROM empleados;

-- # Obtener el nombre del mes de la fecha de contratación.

SELECT fecha_contratacion, MONTHNAME(fecha_contratacion) FROM empleados;

-- # Obtener la fecha y hora actuales.

SELECT CURDATE(), CURTIME();

-- # Calcular la diferencia entre la hora actual y las 02:00:00.

SELECT TIMEDIFF(CURTIME(), '02:00:00');

-- # ¿Cuantos empleados hay?

SELECT COUNT(nombre) FROM empleados;

-- # Liste los empleados que se contrataron en el año 2020

SELECT fecha_contratacion,CONCAT(nombre, ' ', apellido) FROM empleados WHERE YEAR(fecha_contratacion) = '2020';

-- # ¿Cuál es el email del empleado con ID 2+8/2?

SELECT email, id FROM empleados WHERE id = 2+8/2;

-- # Liste los nombres y apellidos de los empleados ordenados por fecha de contratación de manera descendente

SELECT fecha_contratacion, CONCAT(nombre, ' ', apellido) FROM empleados ORDER BY fecha_contratacion DESC;

-- # ¿Cuáles son los 5 primeros empleados contratados recientemente?

SELECT fecha_contratacion, nombre FROM empleados ORDER BY fecha_contratacion DESC LIMIT 5;

-- # Liste empleados cuyo email contenga la palabra 'gmail'

SELECT nombre FROM empleados WHERE email LIKE '%gmail%';

-- # ¿Nombre del empleado más antiguo?

SELECT nombre FROM empleados ORDER BY fecha_contratacion ASC LIMIT 1;

-- # ¿Cuántos empleados tienen un email que termine en '.edu'?

SELECT COUNT(nombre) FROM empleados WHERE email LIKE '%.edu%';

-- # ¿Liste los empleados cuyo nombre empieza por 'A'?

SELECT nombre FROM empleados WHERE nombre LIKE ' A%';

-- # ¿Cuál es la longitud promedio de los apellidos de los empleados?

SELECT AVG(LENGTH(apellido)) FROM empleados;

-- # ¿Cómo se verían los salarios de los si los invirtiéramos?

SELECT salario, REVERSE(salario) FROM empleados;

-- # ¿Cuántos caracteres tiene el email más largo?

SELECT MAX(LENGTH(email)) FROM empleados;

-- # ¿Cómo se verían los departarmentos en mayúsculas?

SELECT departamento, UPPER(departamento) FROM empleados;

-- # Liste solo los departamentos en minuscula

SELECT departamento, LOWER(departamento) FROM empleados;

-- # ¿Cuántos departamentos hay?

SELECT COUNT(departamento) FROM empleados;

-- # Liste los departamentos sin que se repitan

SELECT DISTINCT departamento FROM empleados;

-- # ¿Cuántos departamentos sin repetir hay?

SELECT COUNT(DISTINCT departamento) FROM empleados;

-- # ¿En qué posición se encuentra la letra 'a' en el primer nombre si se ordena el listado por fecha de contratacion de mayor a menor?

SELECT INSTR(nombre, 'a') FROM empleados ORDER BY fecha_contratacion ASC LIMIT 1;

-- # Liste los empleados de manera que primero este el apellido y luego el nombre en una sola culumna, ordenado por salario

SELECT salario, CONCAT(apellido, ' ', nombre) FROM empleados ORDER BY salario DESC;

-- # ¿Cuántos empleados tienen la letra 'e' en su apellido?

SELECT apellido, COUNT(apellido) FROM empleados WHERE apellido LIKE '%e%';

-- # ¿Liste los nombres y el email si reemplazamos todos los puntos por guiones bajos?

SELECT REPLACE(email, '.', '_') FROM empleados;

-- # Liste el nombre, el correo, departamento y encripte el correo electrónico usando como clave el id del empleado

SELECT nombre, AES_ENCRYPT(email, id) ,departamento FROM empleados;

-- # Cuánto es el sueldo promedio por deparatamento?

SELECT departamento, AVG(salario) FROM empleados GROUP BY departamento;

-- ¿Cuánto suman los sueldos por departamento?

SELECT SUM(salario) FROM empleados;