UNLOCK TABLES;
CREATE DATABASE IF NOT EXISTS `niepcedb`;
USE `niepcedb`;
 SET NAMES utf8 ;
 SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `photo_post`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_post` (
  `POST_ID` int(11) NOT NULL,
  `DESCRIPTION` varchar(200) DEFAULT NULL,
  `CREATION_DATE` date DEFAULT NULL,
  `NAME` varchar(25) DEFAULT NULL,
  `USER_ID` int(11) NOT NULL,
  `PHOTO_LINK` varchar(100) DEFAULT NULL,
  `LIKES` int(11) DEFAULT NULL,
  PRIMARY KEY (`POST_ID`),
  KEY `USER_ID` (`USER_ID`),
  CONSTRAINT `photo_post_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES `photo_post` WRITE;
INSERT INTO `photo_post` VALUES (1,'Description1','2019-03-18','Username1',2241,'phLink1.jpg',18),
(2,'Description2','2018-03-11','Username2',1321,'phLink2.jpg',500),
(3,'Description3','2019-03-12','Username3',1320,'phLink3.jpg',478),
(4,'Description4','2009-04-12','Username4',1421,'phLink4.jpg',120),
(5,'Description5','2019-03-13','Username5',1488,'phLink5.jpg',134),
(6,'Description6','2019-03-14','Username6',2251,'phLink6.jpg',1472),
(7,'Description7','2019-03-16','Username7',1323,'phLink7.jpg',978),
(8,'Description8','2019-03-17','Username8',1440,'phLink8.jpg',1000),
(9,'Description9','2019-03-18','Username9',1370,'phLink9.jpg',872),
(10,'Description10','2019-03-19','Username10',1788,'phLink10.jpg',2000);
UNLOCK TABLES;
DROP TABLE IF EXISTS `USER`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `USER` (
  `USER_ID` int(11) NOT NULL,
  `NAME` varchar(30) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 SET FOREIGN_KEY_CHECKS = 1;
LOCK TABLES `USER` WRITE;
INSERT INTO `USER` VALUES (2241, 'Username1'),(1321,'Username2'),(1788,'Username10'),(1320,'Username3'),(1421,'Username4'),(1488,'Username5'),(2251,'Username6'),(1323,'Username7'),(1440,'Username8'),(1370,'Username9');
UNLOCK TABLES;

