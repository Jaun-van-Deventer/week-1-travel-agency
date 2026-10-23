CREATE TABLE IF NOT EXISTS tours (
  id       INTEGER PRIMARY KEY,
  name     TEXT NOT NULL,
  category TEXT NOT NULL,
  days     INTEGER NOT NULL,
  price    INTEGER NOT NULL,
  image    TEXT NOT NULL,
  alt      TEXT NOT NULL
);