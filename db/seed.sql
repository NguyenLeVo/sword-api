CREATE DATABASE IF NOT EXISTS `sword-api-db`;
USE `sword-api-db`;

CREATE TABLE IF NOT EXISTS Roles (
    ID varchar(128) PRIMARY KEY,
    FirstName varchar(32) NOT NULL,
    LastName varchar(32) NOT NULL,
    CurrentRole varchar(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS Tasks (
    ID varchar(128) PRIMARY KEY,
    PerformedByID varchar(128) NOT NULL, 
    FOREIGN KEY (PerformedByID) REFERENCES Roles(ID),
    Summary varchar(2500),
    SubmitDate varchar(32)
);

