-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 11, 2019 at 09:46 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hw17UsersDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `PostID` int(11) UNSIGNED NOT NULL,
  `UserID` int(11) NOT NULL,
  `Title` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Post` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Created` varchar(256) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`PostID`, `UserID`, `Title`, `Post`, `Created`) VALUES
(2, 2, 'vgghg', 'ggfhghhghgjjhgjhg', '02.08.19'),
(3, 2, 'fdgfgfg', 'gbhnhjjhjhjh', '02.08.19'),
(5, 1, 'drere', 'eerrettyuyi', '02.08.19'),
(7, 1, 'gjyjkuyk', 'jyukiuoupuioiuoiui', '02.08.19'),
(8, 4, 'ergttyyt', 'rrttyyuyiyuiyiyiy', '02.09.19'),
(10, 4, 'mbnbmmjhjjh', 'nnnbghjghjhjgjghhjhg', '02.09.19'),
(11, 2, 'rerrreertrterterte', 'rrrerrtertertetrettttttt gtttyrtyrtyytrn gtrtrtytyryh', '02.09.19'),
(12, 2, 'trreterer', 'fgbghjtuyuytuyrtyrtytyrtyr', '09.02.19'),
(13, 3, 'ewertyyrtr', 'rrretttyryyyytu', '09.02.19'),
(14, 3, 'gggtttr', 'rttrtttttty', '09.02.19'),
(15, 3, 'zzz', 'zzz', '09.02.19');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) UNSIGNED NOT NULL,
  `Username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Firstname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Lastname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `Password` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Age` int(3) NOT NULL,
  `Gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserID`, `Username`, `Firstname`, `Lastname`, `Password`, `Email`, `Age`, `Gender`) VALUES
(1, 'qqq', 'qqq', 'qqq', 'b2ca678b4c936f905fb82f2733f5297f', 'qqq@qqq', 22, 'female'),
(2, 'www', 'www', 'www', '4eae35f1b35977a00ebd8086c259d4c9', 'www@www', 32, 'male'),
(3, 'zzz', 'zzz', 'zzz', 'f3abb86bd34cf4d52698f14c0da1dc60', 'zzz@zzz', 45, 'other'),
(4, 'ttt', 'ttyryyuuty', 'rttyryytuyt', '9990775155c3518a0d7917f7780b24aa', 'ttt@tttttt', 23, 'other');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`PostID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `PostID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
