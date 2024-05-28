CREATE TABLE IF NOT EXISTS discounts_table(
  id varchar(255) NOT NULL PRIMARY KEY,
  discount_description varchar(255) NOT NULL,
  discount_price FLOAT NOT NULL,
  week_days VARCHAR(255) NOT NULL,
  start_hour INTEGER NOT NULL,
  end_hour INTEGER NOT NULL,
  product_id VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT now() NOT NULL,
  updated_at DATETIME DEFAULT now() on update now() NOT NULL,
  CONSTRAINT discounts_table_FK FOREIGN KEY (product_id) REFERENCES goomer_database.products_table(id)
)