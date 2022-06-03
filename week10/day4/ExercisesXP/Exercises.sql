-- Part 1:

-- 1.1 
select * from items order by item_price;
-- 1.2
select * from items where item_price >= 80 order by item_price desc;
-- 1.3
select customer_first_name, customer_last_name from customers order by customer_first_name asc limit 3;
--  1.4 
select customer_last_name from customers order by customer_last_name desc;
-- 2
create table purchases (id serial primary key not null, customer_id int not null, item_id int not null,
quantity_purchased int not null, foreign key (item_id) references items (item_id), foreign key (customer_id) references customers (customer_id));
-- 3
insert into purchases (customer_id, item_id,quantity_purchased) values ((select customer_id from customers where customer_first_name = 'Scott' and customer_last_name = 'Scott'), (select item_id from items where item_desc = 'Fan'), 1);
-- 
insert into purchases (customer_id, item_id,quantity_purchased) values ((select
customer_id from customers where customer_first_name = 'Melanie' and customer_last_name = 'Johnson'), (select item_id from items where item_desc = 'Large Desk'), 10);
-- 
insert into purchases (customer_id, item_id,quantity_purchased) values ((select
customer_id from customers where customer_first_name = 'Greg' and customer_last_name = 'Jones'), (select item_id from items where item_desc = 'Small Desk'), 2);

-- Part 2:
-- 1.1
select * from purchases; 
--  1.2 
select * from purchases inner join customers on purchases.customer_id = customers.customer_id;
-- 1.3 
select * from purchases inner join customers on purchases.customer_id = customers.customer_id where customers.customer_id = 5;
-- 1.4
select * from purchases inner join customers on purchases.customer_id = customers.customer_id where purchases.item_id = (select item_id from
items where item_desc = 'Large Desk') or  purchases.item_id = (select item_id from items where item_desc = 'Small Desk');

-- 2 
select customers.customer_first_name, customers.customer_last_name, items.item_desc from purchases inner join customers on purchases.customer_id = customers.customer_id inner join items on
public-# purchases.item_id = items.item_id where purchases.quantity_purchased > 0;

-- 3 
insert into purchases (customer_id, quantity_purchased) values (7,2);
-- It doesn't work because you can't enter null values at foreign key columns.

-- Exercise 2 : Dvdrental Database

-- 1 
select * from customer;
-- 2
select concat (first_name,' ', last_name) as full_name from customer;
-- 3
select distinct create_date from customer;
-- 4
select * from customer order by first_name desc;
-- 5
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;
-- 6
select address, phone from address where district ilike 'texas';
-- 7
select title from film where film_id = 15 or film_id = 150;
-- 8
select film_id, title,description, length, rental_rate from film where title ilike 'alien';
-- 9
select film_id, title,description, length, rental_rate from film where title ilike 'al%';
-- 10
select film_id, title,description, length, rental_rate from film order by rental_rate asc limit 10;
-- 11
select film_id, title,description, length, rental_rate from film order by rental_rate asc offset 10 fetch next 10 row only;
-- 12
select payment.amount, payment.payment_date, concat(customer.first_name, ' ', customer.last_name) as full_name from payment inner join customer on 
customer.customer_id = payment.customer_id order by customer.customer_id asc;
-- 13
select title, film_id from film where not exists (select film_id from inventory where film_id = film.film_id);
-- 14
select city.city, country.country from city inner join country on city.city_id = country.country_id;
-- 15
select customer.customer_id, concat(customer.first_name,' ', customer.last_name) as customer_full_name, payment.amount, payment.payment_date, payment.staff_id from customer inner join payment on payment.customer_id = customer.customer_id order by payment.staff_id asc;