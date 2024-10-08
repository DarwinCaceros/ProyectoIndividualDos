CREATE DATABASE gestion_notas;
USE gestion_notas;

CREATE USER 'usuario1'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON gestion_notas.* TO 'usuario1'@'localhost';
FLUSH PRIVILEGES;

USE gestion_notas;
CREATE TABLE nota (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
nombre_estudiante VARCHAR(255) NOT NULL,
actividades INT NOT NULL CHECK (actividades <= 35),
primer_parcial INT NOT NULL CHECK (primer_parcial <= 15),
segundo_parcial INT NOT NULL CHECK (segundo_parcial <= 15),
examen_final INT NOT NULL CHECK (examen_final <= 35)
);

INSERT INTO nota (nombre_estudiante, activities, parcial_one, parcial_two, final_exam)
VALUES
('Juan Pérez', 30, 14, 13, 32),
('Ana Gómez', 28, 13, 14, 34),
('Carlos López', 32, 15, 15, 33),
('Felipe Teodoro', 30, 10, 12, 34);


SELECT * FROM nota;
