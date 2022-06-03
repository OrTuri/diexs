-- Exercise XP
-- Exercise 1: DVD Rental
-- 1
select language.name from film inner join language using (language_id) group by language.name;
-- 2.1
select title, description, language.name from film left join language using (language_id);
-- 2.2
select title, description, language.name from film right join language using (language_id);
-- 3
create table new_film (id serial primary key not null, name varchar(50) not null);
insert into new_film (name) values ('The game'),('Gladiator'),('The saw'),('Aquaman'),('Glass');
-- 4
create table customer_review (review_id serial primary key not null, film_id int references new_film(id) on delete cascade not null, language_id int references language(language_id) not null, title varchar(100) not null, score int check(score > 0 and score < 11) not null, review_text text not null, last_update date not null);
-- 5
insert into customer_review (film_id, language_id, title, score, review_text, last_update) values ((select id from new_film where name = 'The game'), (select language_id from language where name = 'English'), 'The best review EVER!', 9, 'Some review text............', now());
-- 
insert into customer_review (film_id, language_id, title, score, review_text, last_update) values ((select id from new_film where name = 'Gladiator'), (select language_id from language where name = 'Italian'), 'Just another review..', 4, 'Some review text111............', '2022-03-22');
-- 6
delete from new_film where id = 2;
-- After deleting it the movie review record also got deleted from customer_revie table;

-- Exercise 2 : DVD Rental
-- 1
update film set language_id = (select language_id from language where name = 'German') where film_id = 5;
-- 2
-- The foreign key in the customer table is: address(address_id). That means that you can only insert address_id that is available in the address table.
-- 3
-- drop table customer_review; 
-- 4
select count(*) from rental where return_date is null;
-- 5
select film.title ,film.rental_rate from rental inner join inventory using (inventory_id) inner join film using (film_id) where return_date is null order by film.rental_rate desc limit 30;
-- 6.1
select title, description, film_id from film inner join film_actor using (film_id) inner join actor using(actor_id) where description ilike '%sumo wrestler%' and actor.first_name = 'Penelope' and actor.last_name = 'Monroe';
-- 6.2
select * from film inner join film_category using (film_id) inner join category using (category_id) where film.length < 60 and film.rating = 'R' and category.name ilike 'documentary';
-- 6.3
select * from rental inner join payment using (customer_id) where customer_id = (select customer_id from customer where first_name ilike 'matthew' and last_name ilike 'mahan') and payment.amount > 4 and rental.return_date between '2005-07-28' and '2005-08-01';
-- 6.4
select inventory.film_id, film.title, film.description, customer.customer_id, payment.amount from rental inner join inventory using (inventory_id) inner join film using (film_id) inner join customer using (customer_id) inner join payment using(customer_id) where customer_id = (select customer_id from customer where first_name ilike 'matthew' and last_name ilike 'mahan') and (film.title ilike '%boat%' or film.description ilike '%boat%');