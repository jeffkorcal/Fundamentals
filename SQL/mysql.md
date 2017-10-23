# MySQL

## (0) INSTALLATION TIPS
https://coolestguidesontheplanet.com/start-stop-mysql-from-the-command-line-terminal-osx-linux/

## (1) CREATING DATABASES AND TABLE

### Database
```
show databases;
```
```
CREATE DATABASE <name>;
```
```
DROP DATABASE <name>;
```
```
USE <database_name>;
```
```
SELECT database( ); - shows what database you are using
```

### Data Types
| Numeric Types | String Types | Date Types |
|-              |-             |-           |
| INT           | CHAR         | DATE       |
| SMALLINT      | VARCHAR      | DATETIME   |
| TINYINT       | BINARY       | TIMESTAMP  |
| MEDIUMINT     | VARBINARY    | TIME       |
| BIGINT        | BLOB         | YEAR       |
| DECIMAL       | TINYBLOB     |            |
| NUMERIC       | MEDIUMBLOB   |            |
| FLOAT         | LONGBLOB     |            |
| DOUBLE        | TEXT         |            |
| BIT           | TINYTEXT     |            |
|               | MEDIUMTEXT   |            |
|               | LONGTEXT     |            |
|               | ENUM         |            |
- INT - whole number with a max value of 4,294,967,295
- VARCHAR - a variable-length string between 1 and 255 characters

### Tables
```
Creating a Table with columns *note you should make your table names plural
CREATE TABLE <table_name> (
    column_name data_type,
    column_name data_type(length) - varchar will need a max-length specified
);
```
```
SHOW TABLES;
```
```
SHOW COLUMNS FROM <table_name>;
```
```
DESC <table_name>;
```
```
DROP TABLE <table_name>;
```

## (2) INSERTING DATA
```
INSERT INTO <table_name> (<column1>, <column2>)
VALUES ('value 1', 1),
       ('value 2', 2);
```
```
SHOW WARNING;
```
```
NULL/DEFAULT VALUE Example
CREATE TABLE people (
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL DEFAULT 0
);
```
```
PRIMARY KEY Example
CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    age INT NOT NULL,
    current_status VARCHAR(255) NOT NULL DEFAULT 'employed'
);
```

## (3) CRUD (Create, Read, Update, Delete)
- CREATE - INSERT
- READ - SELECT
- UPADATE - UPDATE
- DELETE - DELETE

```
Read
SELECT * FROM cats;
SELECT name, age FROM cats;
SELECT * FROM cats WHERE name='Egg'; - remember that it is case insensitive when using where
SELECT * FROM cats WHERE cat_id=age; - you can compare columns values as well
```
```
Aliases
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats; - you can use 'as' to rename a column
```
```
Update
UPDATE cats SET breed='Shorthair' WHERE breed='Tabby';
UPDATE shirts SET color='off white', shirt_size='XS' WHERE color='white';
good rule of thumb is to query what you are looking for before updating
```
```
Delete
DELETE FROM cats WHERE name='Egg';
good rule of thumb is to query what you are looking for before deleting
```

## (4) STRING FUNCTIONS
```
Source - allows you to read sql files
SOURCE testing/insert.sql
```
- CONCAT
- SUBSTRING
- REPLACE
- REVERSE
- CHAR LENGTH
- UPPER
- LOWER

## (5) REFINING SELECTIONS
```
DISTINCT - unique
SELECT DISTINCT author_fname, author_lname FROM books; - this will query for only unique authors
```
```
ORDER BY - order a column by ascending or descending
SELECT released_year FROM books ORDER BY released_year; - default is ascending
SELECT released_year FROM books ORDER BY released_year DESC; - DESC is descending
SELECT released_year FROM books ORDER BY released_year ASC; - ASC is ascending
SELECT title, author_fname, author_lname FROM books ORDER BY 2; - shortcut to specify you want to sort by the second column
SELECT author_fname, author_lname FROM books ORDER BY author_lname, author_fname; - sort last name then first name
```
```
LIMIT - limit the number of output
SELECT title, released_year FROM books ORDER BY released_year DESC LIMIT 5;
```
```
LIKE - filter by substring or wildcard
SELECT title, author_fname FROM books WHERE author_fname LIKE '%da%';
SELECT title, stock_quantity FROM books WHERE stock_quantity LIKE '__';
```
## (6) Aggregate Functions
```
COUNT - count number of rows
SELECT COUNT(DISTINCT author_lname, author_fname) FROM books;
```
```
MAX - checks the highest number | MIN - checks the smaller number
SELECT MAX(released_year) FROM books;
SELECT title, pages FROM books WHERE pages = (SELECT Min(pages) FROM books); - select the minimum pages and show the title of it (having two selects create a subquery with makes things slower)
SELECT title, pages FROM books ORDER BY pages ASC LIMIT 1; - this achieves the same thing as above
```
```
GROUP BY 
SELECT released_year, COUNT(*) FROM books GROUP BY released_year; - groups the release year and shows the count for each 
SELECT author_fname, author_lname, Max(pages) FROM books GROUP BY author_lname, author_fname;
```
```
SUM
SELECT author_fname, author_lname, Sum(pages) FROM books GROUP BY author_lname, author_fname;
```
```
AVG
SELECT released_year, AVG(stock_quantity) FROM books GROUP BY released_year;
```

## (9) DATA TYPES
```
CHAR(n) - fixed width
DECIMAL(n, n) - first number is how many numbers, second number is number after decimal
FLOAT/DOUBLE - not precise but takes up less space
```
```
DATE
CREATE TABLE people (name VARCHAR(100), birthdate DATE, birthtime TIME, birthdt DATETIME);
CURDATE, CURTIME, and NOW
SELECT DATE_FORMAT(date_time, '%m/%d/%Y at %h:%i') FROM people;
```

## (10) LOGICAL OPERATOR

- SQL is not case sensitive. So for letters 'a' = 'A'
- = | !=
- \> | >=
- < | <=
- AND
- OR
- BETWEEN x AND y;
- NOT BETWEEN x AND y;
- CAST( x AS datatype); - use cast to make what you are comparing the same datatype
- IN (x, y );
- NOT IN (x, y);
- % - modulo
```
SELECT title, stock_quantity,
    CASE 
        WHEN stock_quantity <= 50 THEN '*'
        WHEN stock_quantity <= 100 THEN '**'
        ELSE '***'
    END AS STOCK
FROM books; 
```

## (11) ONE TO MANY
```
CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);
CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
```
```
INNER JOIN (Get Exact Overlap)
SELECT * FROM table_one JOIN table_two ON table_one.primary_key = table_two.foreign_key;
SELECT * FROM orders JOIN customers ON customers.id = orders.customer_id; 
SELECT 
    first_name, 
    last_name, 
    SUM(amount) AS total_spent
FROM customers
JOIN orders
    ON customers.id = orders.customer_id
GROUP BY orders.customer_id
ORDER BY total_spent DESC;

LEFT JOIN (Selects Everything From One Table)
SELECT 
    first_name, 
    last_name,
    IFNULL(SUM(amount), 0) AS total_spent
FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY customers.id
ORDER BY total_spent;

RIGHT JOIN (Selects Everything From Second Table)
SELECT 
    IFNULL(first_name,'MISSING') AS first, 
    IFNULL(last_name,'USER') as last, 
    order_date, 
    amount, 
    SUM(amount)
FROM customers
RIGHT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY first_name, last_name;

DELETE CASCADE (Deletes when orders when a customer is deleted)
CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY(customer_id) 
        REFERENCES customers(id)
        ON DELETE CASCADE
);
```

## (12) MANY TO MANY
```
SELECT first_name, 
       Ifnull(Avg(grade), 0) AS average, 
       CASE 
         WHEN Avg(grade) IS NULL THEN 'FAILING' 
         WHEN Avg(grade) >= 75 THEN 'PASSING' 
         ELSE 'FAILING' 
       end                   AS passing_status 
FROM   students 
       LEFT JOIN papers 
              ON students.id = papers.student_id 
GROUP  BY students.id 
ORDER  BY average DESC;    

SELECT first_name, 
       last_name, 
       Count(rating)                               AS COUNT, 
       Ifnull(Min(rating), 0)                      AS MIN, 
       Ifnull(Max(rating), 0)                      AS MAX, 
       Round(Ifnull(Avg(rating), 0), 2)            AS AVG, 
       IF(Count(rating) > 0, 'ACTIVE', 'INACTIVE') AS STATUS 
FROM   reviewers 
       LEFT JOIN reviews 
              ON reviewers.id = reviews.reviewer_id 
GROUP  BY reviewers.id; 
```

## (13) Examples
```
CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
 
CREATE TABLE photos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id)
);
 
CREATE TABLE comments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(255) NOT NULL,
    photo_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);
 
CREATE TABLE likes (
    user_id INTEGER NOT NULL,
    photo_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    PRIMARY KEY(user_id, photo_id)
);
 
CREATE TABLE follows (
    follower_id INTEGER NOT NULL,
    followee_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(follower_id) REFERENCES users(id),
    FOREIGN KEY(followee_id) REFERENCES users(id),
    PRIMARY KEY(follower_id, followee_id)
);
 
CREATE TABLE tags (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);
 
CREATE TABLE photo_tags (
    photo_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id),
    PRIMARY KEY(photo_id, tag_id)
);
```