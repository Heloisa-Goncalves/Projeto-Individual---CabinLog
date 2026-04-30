CREATE DATABASE cabinlog;

USE cabinlog;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUser VARCHAR(50),
emailUser VARCHAR(50),
senhaUser CHAR(8),
bioUser VARCHAR(50),
dataNasc DATE
);

CREATE TABLE postagem (
idPostagem INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(300),
conteudo VARCHAR(45),
dataHora DATETIME,
descricao VARCHAR(300),
idUsuario INT,
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE curtida (
idCurtida INT PRIMARY KEY AUTO_INCREMENT,
idUsuario INT,
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
idPostagem INT,
FOREIGN KEY (idPostagem) REFERENCES postagem(idPostagem)
);

CREATE TABLE comentario (
idComentario INT PRIMARY KEY AUTO_INCREMENT,
mensagem VARCHAR(300),
idUsuario INT,
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
idPostagem INT,
FOREIGN KEY (idPostagem) REFERENCES postagem(idPostagem)
);







