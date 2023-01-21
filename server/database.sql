CREATE DATABASE library;

CREATE TABLE engineering(
    eng_id SERIAL PRIMARY KEY,
    book VARCHAR(255),
    author VARCHAR(255),
    price VARCHAR(255),
    book_ed VARCHAR(255) 
);

CREATE TABLE mba(
    mba_id SERIAL PRIMARY KEY,
    book VARCHAR(255),
    author VARCHAR(255),
    price VARCHAR(255),
    book_ed VARCHAR(255) 
);