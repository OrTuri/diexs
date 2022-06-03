-- Exercises XP
-- Basic Select Statement
-- 1
select first_name as "First Name", last_name as "Last Name" from employees;
-- 2
select distinct department_id from employees;
-- 3
select * from employees order by first_name desc;
-- 4
select first_name, last_name, salary, salary * 0.15 as "PF" from employees;
-- 5
select employee_id, first_name, last_name, salary from employees order by salary asc;
-- 6
select sum(salary) from employees;
-- 7
select max(salary), min(salary) from employees;
-- 8
select avg(salary) from employees;
-- 9
select count(*) from employees;
-- 10
select upper(first_name) from employees;
-- 11
select left(first_name,3) from employees;
-- 12
select concat(first_name, ' ', last_name) as "Full Name" from employees;
-- 13
select count(*) from employees where first_name like '%[0-9]%';
-- 14
SELECT * FROM employees WHERE first_name ~ '[0-9]';
-- 15
select * from employees order by employee_id limit 10;

-- Restricting And Sorting
-- 1
select first_name, last_name, salary from employees where salary between 10000 and 15000;
-- 2
select first_name, last_name, hire_date from employees where extract(year from hire_date) = '1987';
-- 3
select * from employees where first_name like '%c%' and first_name like '%e%';
-- 4
select employees.last_name, jobs.job_title, employees.salary from employees inner join jobs on employees.job_id = jobs.job_id  where employees.job_id <> (select job_id from jobs where job_title ilike 'programmer') and employees.job_id <> (select job_id from jobs where job_title ilike 'shipping clerk') and salary not in (4500, 10000, 15000);
-- 5
select last_name from employees where last_name like '______';
-- 6
select last_name from employees where last_name like '__e%';
-- 7
select employees.first_name, employees.last_name, jobs.job_title from employees inner join jobs on employees.job_id = jobs.job_id;
-- 8
select * from employees where last_name not in ('JONES', 'BLAKE', 'SCOTT', 'KING', 'FORD');
