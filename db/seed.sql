CREATE DATABASE IF NOT EXISTS `sword-api-db`;
USE `sword-api-db`;

DROP TABLE Tasks;
DROP TABLE Roles;

CREATE TABLE Roles (
    ID varchar(128) PRIMARY KEY,
    FirstName varchar(32) NOT NULL,
    LastName varchar(32) NOT NULL,
    CurrentRole varchar(32) NOT NULL
);

CREATE TABLE Tasks (
    ID varchar(128) PRIMARY KEY,
    PerformedByID varchar(128) NOT NULL, 
    FOREIGN KEY (PerformedByID) REFERENCES Roles(ID),
    Summary varchar(2500),
    SubmitDate varchar(32)
);

INSERT INTO Roles (ID, FirstName, LastName, CurrentRole) VALUES ('4be6ac58-f3e0-11ed-8d73-b3ef9725f24f', 'Tech', 'John', 'Technician');
INSERT INTO Roles (ID, FirstName, LastName, CurrentRole) VALUES ('4be6f488-f3e0-11ed-8d73-b3ef9725f25a', 'Manager', 'John', 'Manager');

INSERT INTO Tasks (ID, PerformedByID, Summary, SubmitDate) 
VALUES ('4be6ac58-f3e0-11ed-8d73-b3ef9725f25b', '4be6ac58-f3e0-11ed-8d73-b3ef9725f24f', 'First Task Created', '2023-05-15 11:22:15 UTC');
INSERT INTO Tasks (ID, PerformedByID, Summary, SubmitDate) 
VALUES ('4be6ac58-f3e0-11ed-8d73-b3ef9725f25c', '4be6ac58-f3e0-11ed-8d73-b3ef9725f24f', 'Second Task Created', '2023-05-15 11:22:30 UTC');
