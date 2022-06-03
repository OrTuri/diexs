-- Daily Challenge: Tables Relationships
-- Part 1
-- 1
create table customer (customer_id serial primary key not null, first_name varchar(50) not null, last_name varchar(50) not null);
create table customer_profile (id serial primary key not null, isLoggedIn boolean default false, customer_id int references customer(customer_id) unique);
-- 2
insert into customer (first_name, last_name) values ('John','Doe'), ('Jerome','Lalu'), ('Lea','Rive');
insert into customer_profile (isLoggedIn, customer_id) values (true, (select customer_id from customer where first_name ilike 'john' and last_name ilike 'doe')), (false, (select customer_id from customer where first_name ilike 'jerome'));
-- 3.1
select first_name from customer inner join customer_profile using (customer_id) where customer_profile.isLoggedIn is true;
-- 3.2
select first_name, customer_profile.isLoggedIn from customer full join customer_profile using (customer_id);
-- 3.3
select count(*) from customer_profile where isLoggedIn is false;

-- Part 2:
-- 1
create table book (book_id serial primary key not null, title varchar(50) not null, author varchar(50) not null);
-- 2
insert into book (title, author) values ('Alice in wonderland','Lewis Carroll'), ('Harry Potter','J.K Rowling'), ('To kill a mackingbird','Harper Lee');
-- 3
create table student (student_id serial primary key not null, name varchar(50) not null unique, age int not null check(age < 15));
-- 4
insert into student (name, age) values ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14);
-- 5
create table library (book_fk_id int not null references book(book_id) on delete cascade on update cascade, student_id int not null references student(student_id) on delete cascade on update cascade, borrowed_date date not null);
-- 6
insert into library (book_fk_id, student_id, borrowed_date) values ((select book_id from book where title ilike 'alice in wonderland'), (select student_id from student where name ilike 'john'), '2022-02-15'), ((select book_id from book where title ilike 'to kill a mackingbird'), (select student_id from student where name ilike 'bob'), '2021-03-03'), ((select book_id from book where title ilike 'alice in wonderland'), (select student_id from student where name ilike 'lera'), '2022-05-23'), ((select book_id from book where title ilike 'harry potter'), (select student_id from student where name ilike 'bob'), '2021-08-12') ;
-- 7.1
select * from library;
-- 7.2
select student.name, book.title from library inner join student using (student_id) inner join book on library.book_fk_id = book.book_id;
-- 7.3
select avg(age) from library inner join student using (student_id) inner join book on library.book_fk_id = book.book_id where book.title = 'Alice in wonderland';
-- 7.4
delete from student where student_id = 2;
-- The record of the student also got deleted from the library table.