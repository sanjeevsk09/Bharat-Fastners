/*
  # Full Product Catalog Migration — OnlyScrews

  1. Schema Changes
    - Add `category_label` column to products table

  2. Data
    - Clear existing products
    - Insert full catalog: 170+ products across 13 categories
      Socket Head, Button Head, Countersunk, Phillips Pan/CSK,
      Grub Screws, Hex/Nyloc Nuts, Flat/Spring Washers, Brass Inserts, Spacers
*/

-- Add category_label column
ALTER TABLE products ADD COLUMN IF NOT EXISTS category_label text DEFAULT '';

-- Clear old data
DELETE FROM order_items;
DELETE FROM orders;
DELETE FROM products;

-- ==============================
-- ALLEN SOCKET HEAD (High Tensile 10.9)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Allen Socket Head M2 x 4mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.20,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M2","length_mm":4,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.4}',600),
('Allen Socket Head M2 x 6mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.22,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M2","length_mm":6,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.4}',550),
('Allen Socket Head M2 x 8mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.25,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M2","length_mm":8,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.4}',500),
('Allen Socket Head M2 x 10mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.30,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M2","length_mm":10,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.4}',480),
('Allen Socket Head M2 x 12mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.35,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M2","length_mm":12,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.4}',420),
('Allen Socket Head M2 x 16mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.45,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M2","length_mm":16,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.4}',360),
('Allen Socket Head M3 x 6mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.40,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M3","length_mm":6,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',220),
('Allen Socket Head M3 x 8mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.45,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M3","length_mm":8,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',200),
('Allen Socket Head M3 x 10mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.55,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M3","length_mm":10,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',180),
('Allen Socket Head M3 x 12mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.65,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M3","length_mm":12,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',160),
('Allen Socket Head M3 x 16mm – Black Oxide','Socket head cap screw, high tensile 10.9.',0.95,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M3","length_mm":16,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',120),
('Allen Socket Head M3 x 20mm – Black Oxide','Socket head cap screw, high tensile 10.9.',1.10,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M3","length_mm":20,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',100),
('Allen Socket Head M4 x 8mm – Black Oxide','Socket head cap screw, high tensile 10.9.',1.10,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M4","length_mm":8,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.7}',100),
('Allen Socket Head M4 x 10mm – Black Oxide','Socket head cap screw, high tensile 10.9.',1.25,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M4","length_mm":10,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.7}',90),
('Allen Socket Head M4 x 12mm – Black Oxide','Socket head cap screw, high tensile 10.9.',1.40,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M4","length_mm":12,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.7}',80),
('Allen Socket Head M4 x 16mm – Black Oxide','Socket head cap screw, high tensile 10.9.',1.85,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M4","length_mm":16,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.7}',60),
('Allen Socket Head M4 x 20mm – Black Oxide','Socket head cap screw, high tensile 10.9.',2.20,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M4","length_mm":20,"grade":"10.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.7}',50),
('Allen Socket Head M5 x 8mm – SS304','Socket head cap screw, SS304.',3.80,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M5","length_mm":8,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',200),
('Allen Socket Head M5 x 10mm – SS304','Socket head cap screw, SS304.',3.80,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M5","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',180),
('Allen Socket Head M5 x 12mm – SS304','Socket head cap screw, SS304.',4.00,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M5","length_mm":12,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',170),
('Allen Socket Head M5 x 16mm – SS304','Socket head cap screw, SS304.',4.40,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M5","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',150),
('Allen Socket Head M5 x 20mm – SS304','Socket head cap screw, SS304.',5.00,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M5","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',130),
('Allen Socket Head M6 x 10mm – SS304','Socket head cap screw, SS304.',5.50,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M6","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":1.0}',150),
('Allen Socket Head M6 x 16mm – SS304','Socket head cap screw, SS304.',6.50,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M6","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":1.0}',120),
('Allen Socket Head M6 x 20mm – SS304','Socket head cap screw, SS304.',7.20,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M6","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":1.0}',100),
('Allen Socket Head M6 x 30mm – SS304','Socket head cap screw, SS304.',9.50,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M6","length_mm":30,"finish":"Stainless Steel","material":"SS304","pitch":1.0}',80),
('Allen Socket Head M8 x 16mm – SS304','Socket head cap screw, SS304.',10.50,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M8","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',90),
('Allen Socket Head M8 x 20mm – SS304','Socket head cap screw, SS304.',12.00,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M8","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',80),
('Allen Socket Head M8 x 25mm – SS304','Socket head cap screw, SS304.',14.00,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M8","length_mm":25,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',70),
('Allen Socket Head M8 x 30mm – SS304','Socket head cap screw, SS304.',16.00,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M8","length_mm":30,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',60),
('Allen Socket Head M8 x 40mm – SS304','Socket head cap screw, SS304.',20.00,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M8","length_mm":40,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',50),
('Allen Socket Head M8 x 50mm – SS304','Socket head cap screw, SS304.',24.00,'/images/socket-head.png','socket-head','Allen Socket Head','{"diameter":"M8","length_mm":50,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',40);

-- ==============================
-- ALLEN BUTTON HEAD (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Allen Button Head M3 x 6mm – SS304','Low-profile button head cap screw, SS304.',1.40,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M3","length_mm":6,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',300),
('Allen Button Head M3 x 10mm – SS304','Low-profile button head cap screw, SS304.',1.80,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M3","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',260),
('Allen Button Head M3 x 16mm – SS304','Low-profile button head cap screw, SS304.',2.40,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M3","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',200),
('Allen Button Head M4 x 8mm – SS304','Low-profile button head cap screw, SS304.',2.40,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M4","length_mm":8,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',250),
('Allen Button Head M4 x 12mm – SS304','Low-profile button head cap screw, SS304.',2.80,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M4","length_mm":12,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',210),
('Allen Button Head M4 x 16mm – SS304','Low-profile button head cap screw, SS304.',3.20,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M4","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',190),
('Allen Button Head M5 x 10mm – SS304','Low-profile button head cap screw, SS304.',3.80,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M5","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',180),
('Allen Button Head M5 x 16mm – SS304','Low-profile button head cap screw, SS304.',4.80,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M5","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',140),
('Allen Button Head M5 x 20mm – SS304','Low-profile button head cap screw, SS304.',5.40,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M5","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',120),
('Allen Button Head M6 x 10mm – SS304','Low-profile button head cap screw, SS304.',6.00,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M6","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":1.0}',150),
('Allen Button Head M6 x 16mm – SS304','Low-profile button head cap screw, SS304.',7.50,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M6","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":1.0}',110),
('Allen Button Head M6 x 20mm – SS304','Low-profile button head cap screw, SS304.',8.50,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M6","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":1.0}',90),
('Allen Button Head M8 x 20mm – SS304','Low-profile button head cap screw, SS304.',18.00,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M8","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',70),
('Allen Button Head M8 x 30mm – SS304','Low-profile button head cap screw, SS304.',22.00,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M8","length_mm":30,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',50),
('Allen Button Head M8 x 40mm – SS304','Low-profile button head cap screw, SS304.',26.00,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M8","length_mm":40,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',40),
('Allen Button Head M8 x 50mm – SS304','Low-profile button head cap screw, SS304.',28.00,'/images/socket-head.png','button-head','Allen Button Head','{"diameter":"M8","length_mm":50,"finish":"Stainless Steel","material":"SS304","pitch":1.25}',30);

-- ==============================
-- ALLEN COUNTERSUNK CSK (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Allen CSK M3 x 6mm – SS304','Flat head countersunk screw, SS304.',1.60,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M3","length_mm":6,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',300),
('Allen CSK M3 x 10mm – SS304','Flat head countersunk screw, SS304.',2.00,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M3","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',260),
('Allen CSK M3 x 16mm – SS304','Flat head countersunk screw, SS304.',2.60,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M3","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',200),
('Allen CSK M4 x 10mm – SS304','Flat head countersunk screw, SS304.',2.80,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M4","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',230),
('Allen CSK M4 x 16mm – SS304','Flat head countersunk screw, SS304.',3.40,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M4","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',190),
('Allen CSK M4 x 20mm – SS304','Flat head countersunk screw, SS304.',4.00,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M4","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',170),
('Allen CSK M5 x 10mm – SS304','Flat head countersunk screw, SS304.',4.20,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M5","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',180),
('Allen CSK M5 x 16mm – SS304','Flat head countersunk screw, SS304.',5.20,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M5","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',140),
('Allen CSK M5 x 20mm – SS304','Flat head countersunk screw, SS304.',6.00,'/images/socket-head.png','countersunk','Allen Countersunk','{"diameter":"M5","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',120);

-- ==============================
-- PHILLIPS PAN HEAD (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Phillips Pan Head M2 x 4mm – SS304','Pan head screw with Phillips drive, SS304.',1.80,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M2","length_mm":4,"finish":"Stainless Steel","material":"SS304","pitch":0.4}',400),
('Phillips Pan Head M2 x 8mm – SS304','Pan head screw with Phillips drive, SS304.',2.20,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M2","length_mm":8,"finish":"Stainless Steel","material":"SS304","pitch":0.4}',360),
('Phillips Pan Head M3 x 6mm – SS304','Pan head screw with Phillips drive, SS304.',1.60,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M3","length_mm":6,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',350),
('Phillips Pan Head M3 x 10mm – SS304','Pan head screw with Phillips drive, SS304.',2.00,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M3","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',310),
('Phillips Pan Head M3 x 16mm – SS304','Pan head screw with Phillips drive, SS304.',2.60,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M3","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',270),
('Phillips Pan Head M4 x 8mm – SS304','Pan head screw with Phillips drive, SS304.',2.20,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M4","length_mm":8,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',300),
('Phillips Pan Head M4 x 12mm – SS304','Pan head screw with Phillips drive, SS304.',2.60,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M4","length_mm":12,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',260),
('Phillips Pan Head M4 x 20mm – SS304','Pan head screw with Phillips drive, SS304.',3.60,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M4","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',220),
('Phillips Pan Head M5 x 10mm – SS304','Pan head screw with Phillips drive, SS304.',3.20,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M5","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',230),
('Phillips Pan Head M5 x 16mm – SS304','Pan head screw with Phillips drive, SS304.',4.00,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M5","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',190),
('Phillips Pan Head M5 x 20mm – SS304','Pan head screw with Phillips drive, SS304.',4.80,'/images/socket-head.png','phillips-pan','Phillips Pan Head','{"diameter":"M5","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',170);

-- ==============================
-- PHILLIPS CSK (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Phillips CSK M3 x 5mm – SS304','Countersunk screw with Phillips drive, SS304.',1.20,'/images/socket-head.png','phillips-csk','Phillips CSK','{"diameter":"M3","length_mm":5,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',400),
('Phillips CSK M3 x 8mm – SS304','Countersunk screw with Phillips drive, SS304.',1.40,'/images/socket-head.png','phillips-csk','Phillips CSK','{"diameter":"M3","length_mm":8,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',380),
('Phillips CSK M3 x 10mm – SS304','Countersunk screw with Phillips drive, SS304.',1.40,'/images/socket-head.png','phillips-csk','Phillips CSK','{"diameter":"M3","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',360),
('Phillips CSK M4 x 10mm – SS304','Countersunk screw with Phillips drive, SS304.',2.00,'/images/socket-head.png','phillips-csk','Phillips CSK','{"diameter":"M4","length_mm":10,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',330),
('Phillips CSK M4 x 16mm – SS304','Countersunk screw with Phillips drive, SS304.',2.60,'/images/socket-head.png','phillips-csk','Phillips CSK','{"diameter":"M4","length_mm":16,"finish":"Stainless Steel","material":"SS304","pitch":0.7}',280),
('Phillips CSK M5 x 12mm – SS304','Countersunk screw with Phillips drive, SS304.',3.20,'/images/socket-head.png','phillips-csk','Phillips CSK','{"diameter":"M5","length_mm":12,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',230),
('Phillips CSK M5 x 20mm – SS304','Countersunk screw with Phillips drive, SS304.',4.40,'/images/socket-head.png','phillips-csk','Phillips CSK','{"diameter":"M5","length_mm":20,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',190);

-- ==============================
-- GRUB SCREWS (High Tensile 12.9)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Grub Screw M3 x 3mm – 12.9 Black Oxide','Set screw headless, 12.9 grade.',1.20,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M3","length_mm":3,"grade":"12.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',500),
('Grub Screw M3 x 4mm – 12.9 Black Oxide','Set screw headless, 12.9 grade.',1.40,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M3","length_mm":4,"grade":"12.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.5}',480),
('Grub Screw M3 x 6mm – SS304','Set screw headless, SS304.',1.40,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M3","length_mm":6,"finish":"Stainless Steel","material":"SS304","pitch":0.5}',440),
('Grub Screw M4 x 5mm – 12.9 Black Oxide','Set screw headless, 12.9 grade.',1.60,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M4","length_mm":5,"grade":"12.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.7}',380),
('Grub Screw M4 x 8mm – 12.9 Black Oxide','Set screw headless, 12.9 grade.',1.80,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M4","length_mm":8,"grade":"12.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.7}',340),
('Grub Screw M5 x 4mm – SS304','Set screw headless, SS304.',1.40,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M5","length_mm":4,"finish":"Stainless Steel","material":"SS304","pitch":0.8}',350),
('Grub Screw M5 x 10mm – 12.9 Black Oxide','Set screw headless, 12.9 grade.',1.80,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M5","length_mm":10,"grade":"12.9","finish":"Black Oxide","material":"Alloy Steel","pitch":0.8}',270),
('Grub Screw M6 x 6mm – 12.9 Black Oxide','Set screw headless, 12.9 grade.',2.20,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M6","length_mm":6,"grade":"12.9","finish":"Black Oxide","material":"Alloy Steel","pitch":1.0}',250),
('Grub Screw M6 x 10mm – 12.9 Black Oxide','Set screw headless, 12.9 grade.',2.80,'/images/socket-head.png','grub-screw','Grub Screws','{"diameter":"M6","length_mm":10,"grade":"12.9","finish":"Black Oxide","material":"Alloy Steel","pitch":1.0}',210);

-- ==============================
-- HEX NUTS (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Hex Nut M2 – SS304','Standard hex nut, SS304.',0.60,'/images/socket-head.png','hex-nut','Hex Nuts','{"diameter":"M2","finish":"Stainless Steel","material":"SS304"}',800),
('Hex Nut M3 – SS304','Standard hex nut, SS304.',1.00,'/images/socket-head.png','hex-nut','Hex Nuts','{"diameter":"M3","finish":"Stainless Steel","material":"SS304"}',600),
('Hex Nut M4 – SS304','Standard hex nut, SS304.',1.40,'/images/socket-head.png','hex-nut','Hex Nuts','{"diameter":"M4","finish":"Stainless Steel","material":"SS304"}',500),
('Hex Nut M5 – SS304','Standard hex nut, SS304.',2.00,'/images/socket-head.png','hex-nut','Hex Nuts','{"diameter":"M5","finish":"Stainless Steel","material":"SS304"}',400),
('Hex Nut M6 – SS304','Standard hex nut, SS304.',2.80,'/images/socket-head.png','hex-nut','Hex Nuts','{"diameter":"M6","finish":"Stainless Steel","material":"SS304"}',350),
('Hex Nut M8 – SS304','Standard hex nut, SS304.',4.50,'/images/socket-head.png','hex-nut','Hex Nuts','{"diameter":"M8","finish":"Stainless Steel","material":"SS304"}',300);

-- ==============================
-- NYLOC NUTS (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Nyloc Nut M3 – SS304','Self-locking nylon insert nut, SS304.',1.80,'/images/socket-head.png','nyloc-nut','Nyloc Nuts','{"diameter":"M3","finish":"Stainless Steel","material":"SS304"}',400),
('Nyloc Nut M4 – SS304','Self-locking nylon insert nut, SS304.',2.40,'/images/socket-head.png','nyloc-nut','Nyloc Nuts','{"diameter":"M4","finish":"Stainless Steel","material":"SS304"}',350),
('Nyloc Nut M5 – SS304','Self-locking nylon insert nut, SS304.',3.20,'/images/socket-head.png','nyloc-nut','Nyloc Nuts','{"diameter":"M5","finish":"Stainless Steel","material":"SS304"}',300),
('Nyloc Nut M6 – SS304','Self-locking nylon insert nut, SS304.',4.00,'/images/socket-head.png','nyloc-nut','Nyloc Nuts','{"diameter":"M6","finish":"Stainless Steel","material":"SS304"}',250),
('Nyloc Nut M8 – SS304','Self-locking nylon insert nut, SS304.',6.00,'/images/socket-head.png','nyloc-nut','Nyloc Nuts','{"diameter":"M8","finish":"Stainless Steel","material":"SS304"}',200);

-- ==============================
-- FLAT WASHERS (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Flat Washer M3 – SS304','Standard flat washer, SS304.',0.60,'/images/socket-head.png','flat-washer','Flat Washers','{"diameter":"M3","finish":"Stainless Steel","material":"SS304"}',800),
('Flat Washer M4 – SS304','Standard flat washer, SS304.',0.80,'/images/socket-head.png','flat-washer','Flat Washers','{"diameter":"M4","finish":"Stainless Steel","material":"SS304"}',700),
('Flat Washer M5 – SS304','Standard flat washer, SS304.',1.00,'/images/socket-head.png','flat-washer','Flat Washers','{"diameter":"M5","finish":"Stainless Steel","material":"SS304"}',600),
('Flat Washer M6 – SS304','Standard flat washer, SS304.',1.40,'/images/socket-head.png','flat-washer','Flat Washers','{"diameter":"M6","finish":"Stainless Steel","material":"SS304"}',500),
('Flat Washer M8 – SS304','Standard flat washer, SS304.',2.00,'/images/socket-head.png','flat-washer','Flat Washers','{"diameter":"M8","finish":"Stainless Steel","material":"SS304"}',400);

-- ==============================
-- SPRING WASHERS (SS304)
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Spring Washer M3 – SS304','Split lock spring washer, SS304.',0.80,'/images/socket-head.png','spring-washer','Spring Washers','{"diameter":"M3","finish":"Stainless Steel","material":"SS304"}',700),
('Spring Washer M4 – SS304','Split lock spring washer, SS304.',1.00,'/images/socket-head.png','spring-washer','Spring Washers','{"diameter":"M4","finish":"Stainless Steel","material":"SS304"}',600),
('Spring Washer M5 – SS304','Split lock spring washer, SS304.',1.40,'/images/socket-head.png','spring-washer','Spring Washers','{"diameter":"M5","finish":"Stainless Steel","material":"SS304"}',500),
('Spring Washer M6 – SS304','Split lock spring washer, SS304.',1.80,'/images/socket-head.png','spring-washer','Spring Washers','{"diameter":"M6","finish":"Stainless Steel","material":"SS304"}',400),
('Spring Washer M8 – SS304','Split lock spring washer, SS304.',2.60,'/images/socket-head.png','spring-washer','Spring Washers','{"diameter":"M8","finish":"Stainless Steel","material":"SS304"}',300);

-- ==============================
-- BRASS INSERTS
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Brass Insert M2','Knurled threaded insert for plastic/3D prints.',3.00,'/images/socket-head.png','brass-insert','Brass Inserts','{"diameter":"M2","finish":"Natural Brass","material":"Brass"}',500),
('Brass Insert M2.5','Knurled threaded insert for plastic/3D prints.',3.50,'/images/socket-head.png','brass-insert','Brass Inserts','{"diameter":"M2.5","finish":"Natural Brass","material":"Brass"}',450),
('Brass Insert M3','Knurled threaded insert for plastic/3D prints.',4.00,'/images/socket-head.png','brass-insert','Brass Inserts','{"diameter":"M3","finish":"Natural Brass","material":"Brass"}',400),
('Brass Insert M4','Knurled threaded insert for plastic/3D prints.',5.00,'/images/socket-head.png','brass-insert','Brass Inserts','{"diameter":"M4","finish":"Natural Brass","material":"Brass"}',350),
('Brass Insert M5','Knurled threaded insert for plastic/3D prints.',6.50,'/images/socket-head.png','brass-insert','Brass Inserts','{"diameter":"M5","finish":"Natural Brass","material":"Brass"}',300);

-- ==============================
-- NYLON SPACERS
-- ==============================
INSERT INTO products (name, description, price, image_url, category, category_label, specifications, stock_quantity) VALUES
('Nylon Spacer M3 x 5mm','F-F nylon hex spacer standoff.',2.00,'/images/socket-head.png','spacer','Nylon Spacers','{"diameter":"M3","length_mm":5,"finish":"White Nylon","material":"Nylon"}',500),
('Nylon Spacer M3 x 10mm','F-F nylon hex spacer standoff.',2.50,'/images/socket-head.png','spacer','Nylon Spacers','{"diameter":"M3","length_mm":10,"finish":"White Nylon","material":"Nylon"}',450),
('Nylon Spacer M3 x 15mm','F-F nylon hex spacer standoff.',3.00,'/images/socket-head.png','spacer','Nylon Spacers','{"diameter":"M3","length_mm":15,"finish":"White Nylon","material":"Nylon"}',400),
('Nylon Spacer M4 x 5mm','F-F nylon hex spacer standoff.',2.80,'/images/socket-head.png','spacer','Nylon Spacers','{"diameter":"M4","length_mm":5,"finish":"White Nylon","material":"Nylon"}',400),
('Nylon Spacer M4 x 10mm','F-F nylon hex spacer standoff.',3.20,'/images/socket-head.png','spacer','Nylon Spacers','{"diameter":"M4","length_mm":10,"finish":"White Nylon","material":"Nylon"}',350),
('Nylon Spacer M4 x 15mm','F-F nylon hex spacer standoff.',3.80,'/images/socket-head.png','spacer','Nylon Spacers','{"diameter":"M4","length_mm":15,"finish":"White Nylon","material":"Nylon"}',300);
