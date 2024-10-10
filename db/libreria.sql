-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2024 a las 03:01:23
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
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_clientes` int(11) NOT NULL,
  `nombre_del_cliente` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `numero_de_telefono` varchar(100) NOT NULL,
  `id_pedidos` int(11) DEFAULT NULL,
  `id_libros` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_libros` int(11) NOT NULL,
  `titulo_del_libro` varchar(100) NOT NULL,
  `autor_o_autores` varchar(100) NOT NULL,
  `editorial` varchar(100) NOT NULL,
  `ISBN` varchar(100) NOT NULL,
  `bookmarks_y_bolsas_de_libros` varchar(100) NOT NULL,
  `fecha_de_publicacion` varchar(100) NOT NULL,
  `precio` varchar(100) NOT NULL,
  `id_clientes` int(11) DEFAULT NULL,
  `id_pedidos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedidos` int(11) NOT NULL,
  `libros_a_pedir` varchar(100) NOT NULL,
  `numero_del_pedido` varchar(100) NOT NULL,
  `fecha_del_pedido` varchar(100) NOT NULL,
  `direccion_de_envio` varchar(100) NOT NULL,
  `total` varchar(100) NOT NULL,
  `resenas_para_los_libros_o_revistas_comprados` varchar(100) NOT NULL,
  `id_clientes` int(11) DEFAULT NULL,
  `id_libros` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_clientes`),
  ADD KEY `id_pedidos` (`id_pedidos`),
  ADD KEY `id_libros` (`id_libros`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_libros`),
  ADD KEY `id_clientes` (`id_clientes`),
  ADD KEY `id_pedidos` (`id_pedidos`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedidos`),
  ADD KEY `id_clientes` (`id_clientes`),
  ADD KEY `id_libros` (`id_libros`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_clientes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id_libros` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedidos` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`),
  ADD CONSTRAINT `clientes_ibfk_2` FOREIGN KEY (`id_libros`) REFERENCES `libros` (`id_libros`);

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `libros_ibfk_1` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_clientes`),
  ADD CONSTRAINT `libros_ibfk_2` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_clientes`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`id_libros`) REFERENCES `libros` (`id_libros`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
