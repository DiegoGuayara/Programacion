DROP TABLE IF EXISTS empleados;
create table empleados(
  documento varchar(8) not null,
  nombre varchar(30) not null,
  apellido varchar(30),
  sexo char(1),
  fechaingreso date,
  fechanacimiento date,
  sueldo float,
  hijos tinyint unsigned,
  primary key(documento)
);

INSERT INTO empleados (documento, nombre, apellido, fechaingreso, sexo, fechanacimiento, sueldo, hijos) VALUES
(100, 'Ana', 'Alvarez', '2000-01-15', 'F', '1975-05-10', 1000000, 2),
(200, 'Beto', 'Bermúdez', '2001-02-20', 'M', '1980-08-15', 2000000, 1),
(300, 'Carmen', 'Cruz', '2002-03-25', 'F', '1975-11-30', 3000000, 3),
(400, 'David', 'Díaz', '2003-04-30', 'M', '1981-02-20', 4000000, 0),
(500, 'Elena', 'Espinosa', '2004-05-05', 'F', '1982-07-25', 5000000, 4),
(600, 'Fernando', 'Fernández', '2005-06-10', 'M', '1979-12-10', 6000000, 5),
(700, 'Gabriela', 'García', '2006-07-15', 'F', '1983-03-05', 7000000, 6),
(800, 'Héctor', 'Hernández', '2007-08-20', 'M', '1984-06-12', 8000000, 1),
(900, 'Isabel', 'Ibarra', '2008-09-25', 'F', '1985-09-18', 9000000, 2),
(1000, 'Jorge', 'Jiménez', '2009-10-30', 'M', '1986-11-22', 10000000, 3);

SELECT*FROM empleados;

-- 1.  Contar Pañoletas y Pañuelos para diciembre

SELECT sexo, 
if(sexo = 'F', 'Pañoletas', 'Pañuelos') AS 'Obsequio',
if(sexo = 'F', COUNT('Pañoletas'), COUNT('Pañuelos')) AS 'Para diciembre'
FROM empleados
GROUP BY sexo;

-- 2.  Contar años de servicio para colaboradores que ingresaron en enero

SELECT CONCAT(nombre, ' ', apellido) AS 'Nombre completo', fechaingreso, 
YEAR(CURRENT_DATE()) - YEAR(fechaingreso) AS 'Antiguedad'
FROM empleados
WHERE MONTH(fechaingreso) = 1
GROUP BY nombre;

-- 3.  Calcular subsidio familiar y sueldo final para todos los colaboradores

SELECT CONCAT(nombre," ",apellido) AS Colaborador,sueldo AS "Sueldo básico",hijos,
if (sueldo <= 5000000,300000 * hijos,150000 * hijos) AS "Subsidio familiar",
if (sueldo <= 5000000,sueldo + (300000 * hijos),sueldo + (150000 * hijos)) AS "Sueldo final"
from empleados
where hijos > 0
ORDER BY nombre;

-- 4. Clasificación de colaborador según sueldo si: El sueldo es menor a 3.millones es bajo, entre 3.millones y 6millones es medio y mas de 6 millones es alto

SELECT CONCAT(nombre, ' ', apellido) AS 'Nombre completo',
sueldo,
if(sueldo<3000000, 'Baja', if(sueldo BETWEEN 3000000 AND 6000000, 'Media', if(sueldo > 6000000, 'Alto', NULL))) AS 'Clasificacion de sueldo'
FROM empleados
ORDER BY nombre;

-- 5. Listar el nombre del colaborador y si tiene más de 15 años de servicio.

SELECT nombre,
fechaingreso,
if(YEAR(CURRENT_DATE())- YEAR(fechaingreso) > 15, 'Si', 'No') AS 'Tiene mas de 15 años de servicio?'
FROM empleados
ORDER BY nombre;

-- 6. Sumar sueldos según género

SELECT sexo,
SUM(sueldo) AS 'Sueldo acumulado segun genero'
FROM empleados
GROUP BY sexo;

-- 7. Según el numero de hijos contar cuantos colaboradores hay

SELECT COUNT(nombre) AS 'Cantidad colaboradores', 
hijos
FROM empleados
GROUP BY hijos;

-- 8. Mostrar el nombre del colaborador con bonificación solo si tienen más de 3 hijos

SELECT nombre AS 'Colaboradores que tienen mas de 3 hijos'
FROM empleados
WHERE hijos > 3
ORDER BY nombre;

-- 9. Identificar colaboradores que cumplen años en el mes actual

SELECT nombre,
fechanacimiento,
if(DAY(CURRENT_DATE()) = DAY(fechanacimiento), 'Si', 'No') AS 'Cumple años hoy?'
FROM empleados
ORDER BY nombre;

-- 10. Calcular el porcentaje del sueldo que representa el salario familiar, como ayuda (salario_familiar / sueldo) * 100 AS porcentaje_salario_familiar

SELECT CONCAT(nombre," ",apellido) AS Colaborador,sueldo,hijos,
if (sueldo <= 5000000,((300000 * hijos)/sueldo)*100,((150000 * hijos)/sueldo)*100) AS "Porcentaje_salario_familiar"
from empleados
where hijos > 0
ORDER BY nombre;