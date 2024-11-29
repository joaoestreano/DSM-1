DROP TABLE IF EXISTS Filmes_has_Usuario;
DROP TABLE IF EXISTS Filmes, Usuario;

CREATE TABLE Usuario (
  idCPF VARCHAR NOT NULL,
	NOME VARCHAR(30) NULL,
  	CELULAR VARCHAR(30) NULL,
  PRIMARY KEY(idCPF)
);

CREATE TABLE Filmes (
  idFilme VARCHAR NOT NULL,
  TITULO  VARCHAR(255) NULL,
  GENERO VARCHAR(255) NULL,
  PRIMARY KEY(idFilme)
);

CREATE TABLE Filmes_has_Usuario (
  Filmes_idFilme VARCHAR NOT NULL,
  Usuario_idCPF VARCHAR NOT NULL,
  PRIMARY KEY(Filmes_idFilme, Usuario_idCPF)
);

insert into Usuario(idCPF,NOME,CELULAR)
values
(12345678900,'Ana Oliveira', '(11) 98765-4321'),
(98765432100,'João Silva', '(21) 91234-5678'),
(45678912300,'Maria Santos ', '(31) 99876-5432'),
(65432198700 ,'Pedro Costa', '(41) 97654-3210');

insert into Filmes(idFilme,titulo,genero)
values
(101 ,'Vingadores: Ultimato', 'Ação'),
(102,'Interestelar', 'Ficção Científica'),
(103,'O Senhor dos Anéis', 'Fantasia'),
(104 ,'Matrix ', 'Ficção Científica');

insert into Filmes_has_Usuario
values
(101 , 12345678900 ),
(102 , 98765432100),
(103 , 45678912300 ),
(103 , 12345678900 ),
(104  , 98765432100),
(101  , 65432198700),
(104 , 45678912300);

SELECT 
    Filmes.idFilme AS "idCFP", 
    Filmes.titulo AS "Título", 
    Filmes.GENERO AS "Genero", 
    Usuario.idCPF AS "CPF", 
    Usuario.NOME AS "Nome", 
    Usuario.CELULAR AS "Celular"
FROM Filmes, Usuario, Filmes_has_Usuario
WHERE Filmes.idFilme = Filmes_has_usuario.Filmes_idFilme
  AND Usuario.idCPF = Filmes_has_Usuario.Usuario_idCPF


SELECT usuario.nome FROM 
    usuario, filmes, Filmes_has_Usuario
WHERE filmes.titulo = 'O Senhor dos Anéis'
    AND usuario.idcpf = Filmes_has_Usuario.usuario_idcpf 
	AND filmes.idfilme = Filmes_has_Usuario.filmes_idfilme;
 
