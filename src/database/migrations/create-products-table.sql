CREATE TABLE IF NOT EXISTS products_table(
  id varchar(255) NOT NULL PRIMARY KEY,
  product_name varchar(255) NOT NULL,
  product_price varchar(255) NOT NULL,
  product_category varchar(255) NOT NULL,
  product_photo varchar(255),
  restaurant_id varchar(255) NOT NULL,
  created_at DATETIME DEFAULT now() NOT NULL,
  updated_at DATETIME DEFAULT now() on update now() NOT NULL,
  CONSTRAINT products_table_FK FOREIGN KEY (restaurant_id) REFERENCES goomer_database.restaurants_table(id)
)