CREATE TABLE users (
    id SERIAL PRIMARY KEY,         -- Chave primária com auto incremento
    name VARCHAR(255) NOT NULL,    -- Nome do usuário (obrigatório)
    password VARCHAR(255) NOT NULL, -- Senha do usuário (obrigatório)
    mail VARCHAR(255) NOT NULL,    -- E-mail do usuário (obrigatório)
    CONSTRAINT users_mail_unique UNIQUE (mail) -- Garantir que o e-mail seja único
);