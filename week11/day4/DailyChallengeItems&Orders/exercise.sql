-- Daily Challenge : Items & Orders
-- 1 + 2
create table items (item_id serial primary key not null, item_name varchar(100) not null, item_price int not null);
create table product_orders (id serial primary key not null, order_number int not null, item_id int not null references items(item_id), customer_first_name varchar(50) not null, customer_last_name varchar(50) not null);
insert into items (item_name, item_price) values ('Chair', 334);
insert into items (item_name, item_price) values ('Car', 1099);
insert into items (item_name, item_price) values ('TV', 224);
insert into items (item_name, item_price) values ('Microwave', 128);
insert into items (item_name, item_price) values ('House', 2464355);
insert into items (item_name, item_price) values ('Phone', 552);
insert into product_orders (order_number, item_id, customer_first_name, customer_last_name) values (231, (select item_id from items where item_name = 'TV'), 'Or', 'Turi');
insert into product_orders (order_number,item_id, customer_first_name, customer_last_name) values (231, (select item_id from items where item_name = 'Phone'), 'Or', 'Turi');
insert into product_orders (order_number,item_id, customer_first_name, customer_last_name) values (231, (select item_id from items where item_name = 'Microwave'), 'Or', 'Turi');
insert into product_orders (order_number,item_id, customer_first_name, customer_last_name) values (227, (select item_id from items where item_name = 'Chair'), 'Liran', 'Levy');
insert into product_orders (order_number,item_id, customer_first_name, customer_last_name) values (227, (select item_id from items where item_name = 'House'), 'Liran', 'Levy');
-- 3
create function order_sum (order_num int)
returns int as $int$
begin 
return (select sum(item_price) from product_orders inner join items using (item_id) where product_orders.order_number = order_num group by order_number);
end;
$int$ language plpgsql;

-- Bonus
-- 1 + 2
create table users (user_id serial primary key not null,
order_number int not null unique, 
username varchar(100) not null);
-- 3
create or replace function calc_order_sum (order_numberValue int, usernameValue varchar(100))
returns int as $$
declare order_sum int;
begin 
select sum(items.item_price) into order_sum from product_orders 
inner join items using (item_id)
inner join users using (order_number)
where username = usernameValue and order_number = order_numberValue
group by customer_first_name, customer_last_name, users.username;
return order_sum;
end;
$$ language plpgsql;

            
