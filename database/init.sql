CREATE DATABASE myappdb;

\c myappdb;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

INSERT INTO todos (title) VALUES
('Learn Docker'),
('Set up PostgreSQL with Docker'),
('Create a todo app');
