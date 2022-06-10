-- Exercises XP
-- 1
select first_name, last_name, salary from employees where salary > (select salary from employees where last_name ilike 'bell');
-- 2