-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2020 at 02:17 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skripte1`
--
CREATE DATABASE IF NOT EXISTS `skripte1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `skripte1`;

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `content` varchar(500) NOT NULL,
  `category` varchar(18) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `content`, `category`) VALUES
(1, 'Softverske', 'Moram sutra da odradim projekat\r\nTreba mi specifikacija, model dobar, pa onda izrada', 'Fakultet'),
(2, 'Treningasd', 'Danas je bilo dobro, ali moze da se ubaci vise kardia', 'Trening'),
(3, 'Softverske', 'Danas odradjen spec deo, moze da se doda listener u gui', 'Fakultet'),
(4, 'The Social Dilemma', 'Ima na netflixu, ili na netu samo u google se ukuca i ima sa prevodom ali ima reklama puno', 'Filmovi i  serije'),
(5, 'Treninzi', 'ponedeljak: plivanje\r\nutorak: skakanje\r\nsreda: sklekovi\r\ncetvrtak: zgibovi\r\npetak: trcanje', 'Trening');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `category` varchar(18) NOT NULL,
  `content` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `category`, `content`) VALUES
(2, 'Sitni poslovi', 'U prodavnicu u nabavku'),
(3, 'Kola', 'Zamena sijalice na faru'),
(4, 'Kupovina ', 'Sediste za bajs');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
