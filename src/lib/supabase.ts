import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  category_label?: string;
  specifications: Record<string, any>;
  stock_quantity: number;
  created_at?: string;
  updated_at?: string;
};

export type Order = {
  id: string;
  customer_email: string;
  customer_name: string;
  total_amount: number;
  status: string;
  payment_method: string;
  shipping_address: Record<string, any>;
  created_at: string;
  updated_at: string;
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
};

export type CartItem = {
  product: Product | any;
  quantity: number;
};