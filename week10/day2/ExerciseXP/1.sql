-- Exercise XP
-- Exercise 1 : Items And Customers

CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	item_desc VARCHAR (50) NOT NULL,
	item_price SMALLINT NOT NULL
);
CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	customer_first_name VARCHAR (50) NOT NULL,
	customer_last_name VARCHAR (50) NOT NULL
)

INSERT INTO items VALUES (1,'Small Desk',100);
INSERT INTO items VALUES(2,'Large Desk',300);
INSERT INTO items VALUES(3,'Fan',80);
INSERT INTO customers VALUES(1,'Greg','Jones');
INSERT INTO customers VALUES(2,'Sandra','Jones');
INSERT INTO customers VALUES(3,'Scott','Scott');
INSERT INTO customers VALUES(4,'Trevor','Green');
INSERT INTO customers VALUES(5,'Melanie','Johnson');

SELECT * FROM items;
SELECT * FROM items WHERE item_price > 80;
SELECT * FROM items WHERE item_price <= 300;
SELECT * FROM customers WHERE customer_last_name = 'Smith'; Get an empty table.
SELECT * FROM customers WHERE customer_last_name = 'Jones';
SELECT * FROM customers WHERE NOT (customer_first_name = 'Scott');