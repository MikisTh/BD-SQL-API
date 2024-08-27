CREATE TABLE author (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  location VARCHAR(50),
  
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


CREATE TABLE book (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(150),
  author INT UNSIGNED NOT NULL,
   
  PRIMARY KEY (id),
  FOREIGN KEY (author) REFERENCES author (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO author 
    (id, name, location) 
VALUES
    (1, 'Thomas H. Cormen', 'Estados Unidos'),
    (2, 'Andrew S. Tanenbaum', 'Holanda'),
    (3, 'Rafael Santos', 'Brasil');

INSERT INTO book 
    (id, title, author) 
VALUES
    (1, 'Introduction to Algorithms', 1),
    (2, 'Algorithms Unlocked', 1),
    (3, 'Introdução À Programação Orientada A Objetos Usando Java', 3),
    (4, 'Distributed Systems: Principles and Paradigms', 2),
    (5, 'Structured Computer Organization', 2);
