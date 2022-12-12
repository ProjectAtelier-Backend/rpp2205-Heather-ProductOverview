CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    slogan TEXT,
    description TEXT,
    category TEXT,
    default_price INTEGER
);
CREATE TABLE IF NOT EXISTS related (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  related_id INTEGER,
  CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES products(id)
);
CREATE TABLE IF NOT EXISTS features (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  feature TEXT,
  value TEXT,
  CONSTRAINT fk_features FOREIGN KEY(product_id) REFERENCES products(id)
);
CREATE TABLE IF NOT EXISTS styles (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  name TEXT,
  original_price TEXT,
  sale_price TEXT,
  default_style BOOLEAN,
  CONSTRAINT fk_styles FOREIGN KEY(product_id) REFERENCES products(id)
);
CREATE TABLE IF NOT EXISTS photos (
  id INTEGER PRIMARY KEY,
  style_id INTEGER,
  url TEXT,
  thumbnail_url TEXT,
  CONSTRAINT fk_photos FOREIGN KEY(style_id) REFERENCES styles(id)
);
CREATE TABLE IF NOT EXISTS skus (
  id SERIAL PRIMARY KEY,
  style_id INTEGER,
  size TEXT,
  quantity INTEGER,
  CONSTRAINT fk_skus FOREIGN KEY(style_id) REFERENCES styles(id)
);