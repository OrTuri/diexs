-- Exercise XP Gold
-- Exercise 1: DVD Rental 
-- 1
select rating,count(film) film from film group by rating;
-- 2
select rating, count(title) from film where (rating = 'G' or rating = 'PG-13') and length < 120 and rental_rate < 3 group by rating;
-- 3
update customer set first_name = 'Or', last_name = 'Turi' where customer_id = 1;
-- 4
update address set address = 'Ramat Gan' where address_id = (select customer_id from customer where first_name ilike 'or' and last_name ilike 'turi');

-- Exercise 2: Students Table
-- Upadte 
-- 1
update students set birth_date = '1988-11-02' where (first_name ilike 'lea' or first_name ilike 'mark') and last_name ilike 'benichou';
-- 2
update students set last_name = 'Guez' where first_name ilike 'david' and last_name ilike 'grez';
-- Delete 
-- 1
delete from students where first_name ilike 'lea' and last_name ilike 'benichou';
-- Count
-- 1
select count(*) from students;
-- 2
select count(*) from students where birth_date > '2000-01-01';
-- Insert / Alter
-- 1
alter table students add column math_grade int;
-- 2
update students set math_grade = 80 where id = 1;
-- 3
update students set math_grade = 90 where id = 2 or id = 4;
-- 4
update students set math_grade = 40 where id = 6;
-- 5
select count(*) from students where math_grade > 83;
-- 6
insert into students (first_name, last_name, birth_date, math_grade) values ('Omer', 'Simpson', (select birth_date from students where first_name ilike 'omer' and last_name ilike 'simpson'), 70);
-- 7
select first_name, last_name, count(math_grade) as total_grade from students group by first_name, last_name;
-- Sum
-- 1
select sum(math_grade) as sum_grades from students;