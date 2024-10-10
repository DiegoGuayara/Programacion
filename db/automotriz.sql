-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-06-2024 a las 17:06:09
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `practica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `almacenes`
--

CREATE TABLE `almacenes` (
  `id_almacenes` int(11) NOT NULL,
  `nombre_almacen` varchar(100) NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `id_productos_por_pedidos` int(11) DEFAULT NULL,
  `id_productos` int(11) DEFAULT NULL,
  `id_stock_por_almacen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_clientes` int(11) NOT NULL,
  `nombre_cliente` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `contacto` varchar(100) NOT NULL,
  `id_empleados` int(11) DEFAULT NULL,
  `id_pedidos` int(11) DEFAULT NULL,
  `id_productos` int(11) DEFAULT NULL,
  `id_productos_por_pedidos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleados` int(11) NOT NULL,
  `nombre_empleado` varchar(100) NOT NULL,
  `cargo` varchar(100) NOT NULL,
  `id_clientes` int(11) DEFAULT NULL,
  `id_inventario` int(11) DEFAULT NULL,
  `id_productos_por_pedidos` int(11) DEFAULT NULL,
  `id_almacenes` int(11) DEFAULT NULL,
  `id_productos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `id_inventario` int(11) NOT NULL,
  `tipo_movimiento` varchar(100) NOT NULL,
  `id_producto` varchar(100) NOT NULL,
  `id_almacen` varchar(100) NOT NULL,
  `cantidad` varchar(100) NOT NULL,
  `fecha_movimiento` varchar(100) NOT NULL,
  `id_productos` int(11) DEFAULT NULL,
  `id_empleados` int(11) DEFAULT NULL,
  `id_almacenes` int(11) DEFAULT NULL,
  `id_proveedores` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedidos` int(11) NOT NULL,
  `numero_pedido` varchar(100) NOT NULL,
  `fecha_pedido` varchar(100) NOT NULL,
  `total` varchar(100) NOT NULL,
  `id_cliente` varchar(100) NOT NULL,
  `id_productos` int(11) DEFAULT NULL,
  `id_empleados` int(11) DEFAULT NULL,
  `id_clientes` int(11) DEFAULT NULL,
  `id_inventario` int(11) DEFAULT NULL,
  `id_almacenes` int(11) DEFAULT NULL,
  `id_productos_por_pedidos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_productos` int(11) NOT NULL,
  `codigo_producto` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `precio_compra` varchar(100) NOT NULL,
  `precio_venta` varchar(100) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `id_pedidos` int(11) DEFAULT NULL,
  `id_productos_por_pedidos` int(11) DEFAULT NULL,
  `id_inventario` int(11) DEFAULT NULL,
  `id_almacenes` int(11) DEFAULT NULL,
  `id_clientes` int(11) DEFAULT NULL,
  `id_empleados` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_por_pedidos`
--

CREATE TABLE `productos_por_pedidos` (
  `id_productos_por_pedidos` int(11) NOT NULL,
  `id_pedido` varchar(100) NOT NULL,
  `id_producto` varchar(100) NOT NULL,
  `cantidad` varchar(100) NOT NULL,
  `id_productos` int(11) DEFAULT NULL,
  `id_pedidos` int(11) DEFAULT NULL,
  `id_clientes` int(11) DEFAULT NULL,
  `id_inventario` int(11) DEFAULT NULL,
  `id_almacenes` int(11) DEFAULT NULL,
  `id_proveedores` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `id_proveedores` int(11) NOT NULL,
  `Nombre_Proveedor` varchar(100) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Contacto` varchar(100) NOT NULL,
  `id_almacenes` int(11) DEFAULT NULL,
  `id_inventario` int(11) DEFAULT NULL,
  `id_empleados` int(11) DEFAULT NULL,
  `id_productos_por_pedidos` int(11) DEFAULT NULL,
  `id_pedidos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock_por_almacen`
--

CREATE TABLE `stock_por_almacen` (
  `id_Stock_por_Almacen` int(11) NOT NULL,
  `id_producto` varchar(100) NOT NULL,
  `id_almacen` varchar(100) NOT NULL,
  `cantidad_en_stock` varchar(100) NOT NULL,
  `id_inventario` int(11) DEFAULT NULL,
  `id_proveedores` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `almacenes`
--
ALTER TABLE `almacenes`
  ADD PRIMARY KEY (`id_almacenes`),
  ADD KEY `id_productos_por_pedidos` (`id_productos_por_pedidos`),
  ADD KEY `id_productos` (`id_productos`),
  ADD KEY `id_stock_por_almacen` (`id_stock_por_almacen`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_clientes`),
  ADD KEY `id_empleados` (`id_empleados`),
  ADD KEY `id_pedidos` (`id_pedidos`),
  ADD KEY `id_productos` (`id_productos`),
  ADD KEY `id_productos_por_pedidos` (`id_productos_por_pedidos`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_empleados`),
  ADD KEY `id_clientes` (`id_clientes`),
  ADD KEY `id_inventario` (`id_inventario`),
  ADD KEY `id_productos_por_pedidos` (`id_productos_por_pedidos`),
  ADD KEY `id_almacenes` (`id_almacenes`),
  ADD KEY `id_productos` (`id_productos`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`id_inventario`),
  ADD KEY `id_productos` (`id_productos`),
  ADD KEY `id_empleados` (`id_empleados`),
  ADD KEY `id_almacenes` (`id_almacenes`),
  ADD KEY `id_proveedores` (`id_proveedores`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedidos`),
  ADD KEY `id_productos` (`id_productos`),
  ADD KEY `id_empleados` (`id_empleados`),
  ADD KEY `id_clientes` (`id_clientes`),
  ADD KEY `id_inventario` (`id_inventario`),
  ADD KEY `id_almacenes` (`id_almacenes`),
  ADD KEY `id_productos_por_pedidos` (`id_productos_por_pedidos`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_productos`),
  ADD KEY `id_productos_por_pedidos` (`id_productos_por_pedidos`),
  ADD KEY `id_inventario` (`id_inventario`),
  ADD KEY `id_pedidos` (`id_pedidos`),
  ADD KEY `id_almacenes` (`id_almacenes`),
  ADD KEY `id_clientes` (`id_clientes`),
  ADD KEY `id_empleados` (`id_empleados`);

--
-- Indices de la tabla `productos_por_pedidos`
--
ALTER TABLE `productos_por_pedidos`
  ADD PRIMARY KEY (`id_productos_por_pedidos`),
  ADD KEY `id_productos` (`id_productos`),
  ADD KEY `id_pedidos` (`id_pedidos`),
  ADD KEY `id_clientes` (`id_clientes`),
  ADD KEY `id_inventario` (`id_inventario`),
  ADD KEY `id_almacenes` (`id_almacenes`),
  ADD KEY `id_proveedores` (`id_proveedores`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`id_proveedores`),
  ADD KEY `id_almacenes` (`id_almacenes`),
  ADD KEY `id_inventario` (`id_inventario`),
  ADD KEY `id_empleados` (`id_empleados`),
  ADD KEY `id_productos_por_pedidos` (`id_productos_por_pedidos`);

--
-- Indices de la tabla `stock_por_almacen`
--
ALTER TABLE `stock_por_almacen`
  ADD PRIMARY KEY (`id_Stock_por_Almacen`),
  ADD KEY `id_inventario` (`id_inventario`),
  ADD KEY `id_proveedores` (`id_proveedores`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `almacenes`
--
ALTER TABLE `almacenes`
  MODIFY `id_almacenes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_clientes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleados` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `id_inventario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_productos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_por_pedidos`
--
ALTER TABLE `productos_por_pedidos`
  MODIFY `id_productos_por_pedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `id_proveedores` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stock_por_almacen`
--
ALTER TABLE `stock_por_almacen`
  MODIFY `id_Stock_por_Almacen` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `almacenes`
--
ALTER TABLE `almacenes`
  ADD CONSTRAINT `almacenes_ibfk_1` FOREIGN KEY (`id_productos_por_pedidos`) REFERENCES `productos_por_pedidos` (`id_productos_por_pedidos`),
  ADD CONSTRAINT `almacenes_ibfk_2` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`),
  ADD CONSTRAINT `almacenes_ibfk_3` FOREIGN KEY (`id_stock_por_almacen`) REFERENCES `stock_por_almacen` (`id_Stock_por_Almacen`);

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`id_empleados`),
  ADD CONSTRAINT `clientes_ibfk_2` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`),
  ADD CONSTRAINT `clientes_ibfk_3` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`),
  ADD CONSTRAINT `clientes_ibfk_4` FOREIGN KEY (`id_productos_por_pedidos`) REFERENCES `productos_por_pedidos` (`id_productos_por_pedidos`);

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_1` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_clientes`),
  ADD CONSTRAINT `empleados_ibfk_2` FOREIGN KEY (`id_inventario`) REFERENCES `inventario` (`id_inventario`),
  ADD CONSTRAINT `empleados_ibfk_3` FOREIGN KEY (`id_productos_por_pedidos`) REFERENCES `productos_por_pedidos` (`id_productos_por_pedidos`),
  ADD CONSTRAINT `empleados_ibfk_4` FOREIGN KEY (`id_almacenes`) REFERENCES `almacenes` (`id_almacenes`),
  ADD CONSTRAINT `empleados_ibfk_5` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`);

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`),
  ADD CONSTRAINT `inventario_ibfk_2` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`id_empleados`),
  ADD CONSTRAINT `inventario_ibfk_3` FOREIGN KEY (`id_almacenes`) REFERENCES `almacenes` (`id_almacenes`),
  ADD CONSTRAINT `inventario_ibfk_4` FOREIGN KEY (`id_proveedores`) REFERENCES `proveedores` (`id_proveedores`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`id_empleados`),
  ADD CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_clientes`),
  ADD CONSTRAINT `pedidos_ibfk_4` FOREIGN KEY (`id_inventario`) REFERENCES `inventario` (`id_inventario`),
  ADD CONSTRAINT `pedidos_ibfk_5` FOREIGN KEY (`id_almacenes`) REFERENCES `almacenes` (`id_almacenes`),
  ADD CONSTRAINT `pedidos_ibfk_6` FOREIGN KEY (`id_productos_por_pedidos`) REFERENCES `productos_por_pedidos` (`id_productos_por_pedidos`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_productos_por_pedidos`) REFERENCES `productos_por_pedidos` (`id_productos_por_pedidos`),
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`id_inventario`) REFERENCES `inventario` (`id_inventario`),
  ADD CONSTRAINT `productos_ibfk_4` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`),
  ADD CONSTRAINT `productos_ibfk_5` FOREIGN KEY (`id_almacenes`) REFERENCES `almacenes` (`id_almacenes`),
  ADD CONSTRAINT `productos_ibfk_6` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_clientes`),
  ADD CONSTRAINT `productos_ibfk_7` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`id_empleados`);

--
-- Filtros para la tabla `productos_por_pedidos`
--
ALTER TABLE `productos_por_pedidos`
  ADD CONSTRAINT `productos_por_pedidos_ibfk_1` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id_productos`),
  ADD CONSTRAINT `productos_por_pedidos_ibfk_2` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`),
  ADD CONSTRAINT `productos_por_pedidos_ibfk_3` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_clientes`),
  ADD CONSTRAINT `productos_por_pedidos_ibfk_4` FOREIGN KEY (`id_inventario`) REFERENCES `inventario` (`id_inventario`),
  ADD CONSTRAINT `productos_por_pedidos_ibfk_5` FOREIGN KEY (`id_almacenes`) REFERENCES `almacenes` (`id_almacenes`),
  ADD CONSTRAINT `productos_por_pedidos_ibfk_6` FOREIGN KEY (`id_proveedores`) REFERENCES `proveedores` (`id_proveedores`);

--
-- Filtros para la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD CONSTRAINT `proveedores_ibfk_1` FOREIGN KEY (`id_almacenes`) REFERENCES `almacenes` (`id_almacenes`),
  ADD CONSTRAINT `proveedores_ibfk_2` FOREIGN KEY (`id_inventario`) REFERENCES `inventario` (`id_inventario`),
  ADD CONSTRAINT `proveedores_ibfk_3` FOREIGN KEY (`id_empleados`) REFERENCES `empleados` (`id_empleados`),
  ADD CONSTRAINT `proveedores_ibfk_4` FOREIGN KEY (`id_productos_por_pedidos`) REFERENCES `productos_por_pedidos` (`id_productos_por_pedidos`);

--
-- Filtros para la tabla `stock_por_almacen`
--
ALTER TABLE `stock_por_almacen`
  ADD CONSTRAINT `stock_por_almacen_ibfk_1` FOREIGN KEY (`id_inventario`) REFERENCES `inventario` (`id_inventario`),
  ADD CONSTRAINT `stock_por_almacen_ibfk_2` FOREIGN KEY (`id_proveedores`) REFERENCES `proveedores` (`id_proveedores`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
