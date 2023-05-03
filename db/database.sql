CREATE DATABASE Skyline;
use skyline;

create table usuarios(
	idUsuario varchar(38) primary key,
    nombreUsuario varchar(20) unique not null,
    telefono int,
    correo varchar(20) unique not null
    );

create table agencia(
	idAgencia varchar(10) primary key,
    nombreAgencia varchar(20) unique not null
    );

create table Avion(
	idAvion int unique not null,
    idAgencia int
);

    DESCRIBE usuarios;
    DESCRIBE agencia;
    DESCRIBE Avion;


    INSERT INTO usuarios VALUES
(1, 'Lucas','74846415','lucasp@gmail.com')
(2, 'Julio','71833213','juli1@gmail.com'),
(3, 'Pedro','78451244','psetro@gmail.com'),
(4, 'Carlos','7789413','carloss@gmail.com');


INSERT INTO agencia VALUES
(3,'InstaClothes'),
(5,'Lighthouse Clothes'),
(7,'Exquisite Panty');

INSERT INTO Avion VALUES
(4,'8'),
(5,'3');