-- Exercises XP Gold
-- 1
update employees set email = 'Not available', commission_pct = 0.10 where department_id = 110;
-- 2
update employees set email = 'Available' where department_id = (select department_id from departments where department_name ilike 'accounting');
-- 3
update employees set salary = 8000 where employee_id = 105 and salary < 5000;

-- Aggregate Functions
-- 1
select count(distinct job_id) from employees;
-- 2
select departments.department_name, count(employees.*) from departments inner join employees on departments.department_id = employees.department_id group by departments.department_name;
-- 3
select max(salary) - min(salary) from employees;
-- 4
select manager_id, salary from employees where salary = (select min(salary) from employees);
-- 5
select avg(salary) from employees where job_id != (select job_id from jobs where job_title = 'Programmer');
-- 6
select departments.department_name, count(employees.*) as "Number_of_employees", avg(employees.salary) as "Average salary" from departments inner join employees on departments.department_id = employees.department_id group by departments.department_name having count(employees.*) > 10;

-- Alter Table Statement
-- 1
alter table locations rename column state_province to state;
-- 2
alter table locations add primary key (location_id);

-- Create Tables
-- 1
create table new_countries (country_id serial unique primary key not null, country_name varchar(50) not null check(country_name in ('Italy','India','China')));
-- 2
create table new_countries_copy as select * from new_countries;
-- 3
create table new_jobs (job_id serial primary key not null, job_title varchar(50) default null, min_salary int default 8000, max_salary int default null check (max_salary <= 25000));
-- 4
create table new_employees (employee_id serial primary key not null, first_name varchar(50) not null, last_name varchar(50) not null, email varchar(50) not null, phone_number text not null, hire_date date not null, job_id int not null, salary int not null, foreign key (job_id) references new_jobs(job_id));
-- 5
create table new_job_history (employee_id int not null, start_date date not null, end_date date, job_id int not null, foreign key(employee_id) references new_employees(employee_id), foreign key (job_id) references new_jobs(job_id));

-- Insert
-- 1
insert into new_countries (country_name) values ('India');
-- 2
insert into new_countries (country_name) values ('India'), ('China'),('Italy');
-- 3
insert into new_countries_copy (country_name)  (select country_name from new_countries limit 3 order by country_id desc);
-- 4
insert into new_employees (first_name, last_name,email,phone_number,hire_date,job_id,salary) values ('Ram','Ben-David','ram@outlook.com', '054-7564812','1999-01-01', (select job_id from new_jobs where job_id = 5), 15000);