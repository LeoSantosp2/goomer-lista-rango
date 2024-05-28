CREATE TABLE IF NOT EXISTS restaurants_table(
  id varchar(255) NOT NULL PRIMARY KEY,
  restaurant_name varchar(255) NOT NULL,
  restaurant_address varchar(255) NOT NULL,
  opening_hours varchar(255) NOT NULL,
  created_at DATETIME DEFAULT now() NOT NULL,
  updated_at DATETIME DEFAULT now() on update now() NOT NULL
)