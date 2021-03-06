CREATE DATABASE employees;

USE employees;

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL, 
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL, 
    name VARCHAR(30),
    PRIMARY KEY(id)
);

