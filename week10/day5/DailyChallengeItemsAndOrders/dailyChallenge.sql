-- Daily Challenge : Items And Orders
-- 1 + 2
create table items (item_id serial not null primary key, item_title varchar(50) not null, item_price varchar(50) not null);
create table orders (order_id serial not null primary key, buyer_first_name varchar(50) not null, buyer_last_name varchar(50) not null, item_id int not null, foreign key (item_id) references items(item_id));
-- 3 + 4
select * from orders;
select * from items;    
--  5
select orders.*, items.* from orders inner join items on orders.item_id = items.item_id;