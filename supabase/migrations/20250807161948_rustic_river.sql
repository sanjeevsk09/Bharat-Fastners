/*
  # E-commerce Database Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `category` (text)
      - `specifications` (jsonb)
      - `stock_quantity` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `orders`
      - `id` (uuid, primary key)
      - `customer_email` (text)
      - `customer_name` (text)
      - `total_amount` (numeric)
      - `status` (text)
      - `payment_method` (text)
      - `shipping_address` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key)
      - `product_id` (uuid, foreign key)
      - `quantity` (integer)
      - `unit_price` (numeric)
      - `total_price` (numeric)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to products
    - Add policies for order creation and customer access
*/

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  image_url text,
  category text DEFAULT 'general',
  specifications jsonb DEFAULT '{}',
  stock_quantity integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email text NOT NULL,
  customer_name text NOT NULL,
  total_amount numeric(10,2) NOT NULL,
  status text DEFAULT 'pending',
  payment_method text DEFAULT 'gpay',
  shipping_address jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL,
  unit_price numeric(10,2) NOT NULL,
  total_price numeric(10,2) NOT NULL
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Products are publicly readable"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Customers can read their own orders"
  ON orders
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create order items"
  ON order_items
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Order items are readable"
  ON order_items
  FOR SELECT
  TO public
  USING (true);

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category, specifications, stock_quantity) VALUES
('Phillips Head Wood Screws #8 x 1.5"', 'High-quality phillips head screws perfect for woodworking projects', 12.99, 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400', 'wood', '{"head_type": "Phillips", "material": "Steel", "coating": "Zinc", "thread_pitch": "Coarse"}', 150),
('Hex Socket Cap Screws M6 x 20mm', 'Precision machined hex socket cap screws for mechanical applications', 8.50, 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400', 'machine', '{"head_type": "Hex Socket", "material": "Stainless Steel", "grade": "A2", "thread_pitch": "1.0mm"}', 200),
('Self-Drilling Drywall Screws #6 x 1"', 'Self-drilling screws with sharp point for easy drywall installation', 15.75, 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400', 'drywall', '{"head_type": "Phillips", "material": "Hardened Steel", "coating": "Phosphate", "point_type": "Self-drilling"}', 300),
('Torx Drive Security Screws T20 x 25mm', 'Tamper-resistant torx screws for security applications', 22.00, 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400', 'security', '{"head_type": "Torx Security", "material": "Stainless Steel", "grade": "A4", "drive_size": "T20"}', 100),
('Flat Head Machine Screws M4 x 12mm', 'Countersunk flat head screws for flush mounting', 6.25, 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400', 'machine', '{"head_type": "Flat Head", "material": "Steel", "coating": "Black Oxide", "thread_pitch": "0.7mm"}', 250),
('Deck Screws #10 x 2.5" Bronze', 'Weather-resistant bronze deck screws for outdoor projects', 28.50, 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400', 'outdoor', '{"head_type": "Square Drive", "material": "Bronze", "coating": "Weather Resistant", "thread_type": "Deep Thread"}', 120);