BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users(name, password) VALUES
('Chuck', 'norris'), 
('Jack123', 'andJill'),
('Jack234', 'bauer');

CREATE TABLE IF NOT EXISTS scores(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  scores REAL NOT NULL
);

INSERT INTO scores(user_id, scores) VALUES
(1, 0.00),
(2, 4.14),
(3, 3.14);


COMMIT;
