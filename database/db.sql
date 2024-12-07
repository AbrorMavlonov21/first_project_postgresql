CREATE DATABASE behi_market;

create table if not EXISTS users (
    id serial primary key,
    login varchar(36) unique not null,
    password text not null,
    fullname varchar(128) default null,
    is_active boolean default true,
    created_at timestamp default current_timestamp,
    last_updated_at timestamp default current_timestamp,
    created_by int default null, 
    last_updated_by int default null,
    constraint fk_created_by foreign key (created_by) references users(id) on delete
    set null,
        constraint fk_last_updated_by foreign key (last_updated_by) references users(id) on delete
    set null
);
create table if not EXISTS categories (
    id serial primary key,
    name varchar(36) unique not null,
    created_at timestamp default current_timestamp,
    last_updated_at timestamp default current_timestamp,
    created_by int default null,
    last_updated_by int default null,
    constraint fk_created_by foreign key (created_by) references users(id) on delete
    set null,
        constraint fk_last_updated_by foreign key (last_updated_by) references users(id) on delete
    set null
);
create table if not EXISTS products (
    id serial primary key,
    name varchar(128) not null,
    description text default null,
    price int default 0 not null,
    count int default 0 not null,
    category_id int not null,
    constraint fk_category_id foreign key (category_id) references categories(id) on delete cascade,
    created_at timestamp default current_timestamp,
    last_updated_at timestamp default current_timestamp,
    created_by int default null,
    last_updated_by int default null,
    constraint fk_created_by foreign key (created_by) references users(id) on delete
    set null,
        constraint fk_last_updated_by foreign key (last_updated_by) references users(id) on delete
    set null
);
create table if not EXISTS user_balances (
    id serial primary key,
    balance int default 0 not null,
    user_id int unique not null,
    constraint fk_user_id foreign key (user_id) references users(id) on delete cascade,
    created_at timestamp default current_timestamp,
    last_updated_at timestamp default current_timestamp,
    created_by int default null,
    last_updated_by int default null,
    constraint fk_created_by foreign key (created_by) references users(id) on delete
    set null,
        constraint fk_last_updated_by foreign key (last_updated_by) references users(id) on delete
    set null
);
create table if not EXISTS baskets (
    id serial primary key, 
    total_price int default 0 not null,
    user_id int not null,
    status varchar(36) default 'created' not null,
    created_at timestamp default current_timestamp,
    last_updated_at timestamp default current_timestamp,
    created_by int default null,
    last_updated_by int default null,
    constraint fk_created_by foreign key (created_by) references users(id) on delete
    set null,
        constraint fk_last_updated_by foreign key (last_updated_by) references users(id) on delete
    set null
);
create table if not EXISTS basket_products (
    id serial primary key,
    product_id int not null,
    constraint fk_product_id foreign key (product_id) references products(id) on delete
    set null,
        basket_id int not null,
        constraint fk_basket_id foreign key (basket_id) references baskets(id) on delete cascade,
        count int default 0 not null,
        total_price int default 0 not null,
        created_at timestamp default current_timestamp,
        last_updated_at timestamp default current_timestamp,
        created_by int default null,
        last_updated_by int default null,
        constraint fk_created_by foreign key (created_by) references users(id) on delete
    set null,
        constraint fk_last_updated_by foreign key (last_updated_by) references users(id) on delete
    set null
);