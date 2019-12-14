-- In order to run this example, you need to have MySQL installed on your computer

-- This SQL statement creates the database
CREATE DATABASE `ecommerce_website`;

-- This SQL statement switches to the newly created database
use `ecommerce_website`;

-- This SQL statement creates the users table inside the database
-- You need to switch to the database first (as shown above)
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- These SQL statements insert test data into the users table
INSERT INTO users (user_id, firstname, lastname, password, username) VALUES (1, 'John', 'Doe', MD5('hello1'), 'john.doe');
INSERT INTO users (user_id, firstname, lastname, password, username) VALUES (2, 'Jane', 'Doe', MD5('hello2'), 'jane.doe');
INSERT INTO users (user_id, firstname, lastname, password, username) VALUES (3, 'Max', 'Mustermann', MD5('hello3'), 'max.mustermann');
INSERT INTO users (user_id, firstname, lastname, password, username) VALUES (4, 'Moritz', 'Miller', MD5('hello4'), 'moritz.miller');