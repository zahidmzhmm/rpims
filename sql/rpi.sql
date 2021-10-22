-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2021 at 10:12 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rpi`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roll` varchar(10) DEFAULT NULL,
  `registration` varchar(13) DEFAULT NULL,
  `department` varchar(11) DEFAULT NULL,
  `semester` varchar(8) DEFAULT NULL,
  `session` varchar(10) DEFAULT NULL,
  `shift` varchar(11) DEFAULT NULL,
  `role` varchar(8) NOT NULL DEFAULT 'student'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `roll`, `registration`, `department`, `semester`, `session`, `shift`, `role`) VALUES
(1, 'Zahid', 'admin@admin.com', 'admin12123', '', '', '', '', '', '', 'admin'),
(2, 'Zahid', 'admin1@admin.com', 'admin12123', '', '', '', '', '', '', 'teacher'),
(4, 'Zahid', 'admin2@admin.com', 'admin12123', '180287', '1500965423', '1', '5', '18-19', '1', 'student'),
(5, 'Zahid', 'mjhm118899@gmail.com', 'mjhm118899', '180287', '1500965423', '1', '5', '18-19', '1', 'student'),
(6, 'Zahid', 'mjhm1188992@gmail.com', 'mjhm1188992', '180287', '1500965423', '1', '5', '18-19', '1', 'student'),
(8, 'Zahid', 'mjhm1188993@gmail.com', 'mjhm1188993', '180287', '1500965423', '1', '5', '18-19', '1', 'student'),
(9, 'Zahid', 'mjhm1188994@gmail.com', 'mjhm1188993', '180287', '1500965423', '2', '5', '18-19', '1', 'student'),
(10, 'Zahid', 'mjhm1188995@gmail.com', 'mjhm1188993', '180287', '1500965423', '3', '5', '18-19', '1', 'student'),
(11, 'Zahid', 'mjhm1188996@gmail.com', 'mjhm1188993', '180287', '1500965423', '4', '5', '18-19', '1', 'student'),
(12, 'Zahid', 'mjhm1188997@gmail.com', 'mjhm1188993', '180287', '1500965423', '5', '5', '18-19', '1', 'student'),
(13, 'Zahid', 'mjhm1188998@gmail.com', 'mjhm1188993', '180287', '1500965423', '6', '5', '18-19', '1', 'student'),
(14, 'Zahid', 'mjhm1188999@gmail.com', 'mjhm1188993', '180287', '1500965423', '7', '5', '18-19', '1', 'student'),
(15, 'Zahid', 'mjhm11889910@gmail.com', 'mjhm1188993', '180287', '1500965423', '8', '5', '18-19', '1', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
