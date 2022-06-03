--  Basic Select Statement
-- 1
select first_name as "First Name", last_name as "Last Name" from employees;
-- 2
select distinct employee_id from employees;
-- 3
select * from employees order by first_name desc;
-- 4
select first_name, last_name, salary, salary * 0.15 as "PF" from employees;
-- 5
select employee_id, first_name, last_name, salary from employees order by salary asc;
-- 6
select sum(salary) from employees;
-- 7
select min(salary), max(salary) from employees;
-- 8
select avg(salary) from employees;
-- 9
select count(*) from employees;
-- 10
select upper(first_name) from employees;
-- 11
select left(first_name, 3) from employees;
-- 12
select concat(first_name,' ', last_name) as "Full Name" from employees;
-- 13
select first_name, last_name, length(concat(first_name,last_name)) from employees;
-- 14
select * from employees where first_name ~ '^[A-z]+$' order by employee_id asc;
-- 15
select * from employees fetch first 10 row only;

--  Restricting And Sorting
-- 1
select first_name, last_name, salary from employees where salary between 10000 and 15000;
-- 2
select first_name, last_name, hire_date from employees where extract(year from hire_date) = 1987;
-- 3
select count(*) from employees where first_name ilike '%c%e%';
-- 4
select first_name, last_name, jobs.job_title, salary 
from employees 
inner join jobs 
using (job_id) 
where job_id 
not in ((select job_id from jobs where job_title = 'Programmer'), 
		(select job_id from jobs where job_title = 'Shipping Clerk')) 
and salary not in (4500, 10000, 15000);
-- 5
select last_name from employees where length(last_name) = 6;
-- 6
select last_name from employees where last_name like '__e%';
-- 7
select employees.*, jobs.job_title from employees inner join jobs using (job_id);
-- 8
select * from employees where last_name in ('Jones', 'Blake', 'Scott', 'King', 'Ford');