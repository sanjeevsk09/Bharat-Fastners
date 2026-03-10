// src/data/socketProducts.ts
export type SocketSpec = {
  head_dia: string;
  length_mm: number;
  grade: string;
  finish: string;
  pitch: number;
  allen_key_size: string;
};

export type SocketProduct = {
  id: string;
  name: string;
  description: string;
  price: number; // INR (or whatever currency)
  image_url: string; // public URL
  category: string;
  stock_quantity: number;
  specifications: SocketSpec;
  created_at?: string;
};

// Use the public folder path (image must be at public/images/socket-head.png)
const IMG = "/images/socket-head.png";

export const socketProducts: SocketProduct[] = [
  // M2
  { id: "socket-m2-4",  name: "Socket Head M2 x 4mm - 10.9 - Black Oxide",  description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.20, image_url: IMG, category: "socket-head", stock_quantity: 600, specifications: { head_dia: "M2", length_mm: 4,  grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m2-5",  name: "Socket Head M2 x 5mm - 10.9 - Black Oxide",  description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.21, image_url: IMG, category: "socket-head", stock_quantity: 600, specifications: { head_dia: "M2", length_mm: 5,  grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m2-6",  name: "Socket Head M2 x 6mm - 10.9 - Black Oxide",  description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.22, image_url: IMG, category: "socket-head", stock_quantity: 550, specifications: { head_dia: "M2", length_mm: 6,  grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m2-8",  name: "Socket Head M2 x 8mm - 10.9 - Black Oxide",  description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.25, image_url: IMG, category: "socket-head", stock_quantity: 500, specifications: { head_dia: "M2", length_mm: 8,  grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m2-10", name: "Socket Head M2 x 10mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.30, image_url: IMG, category: "socket-head", stock_quantity: 480, specifications: { head_dia: "M2", length_mm: 10, grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m2-12", name: "Socket Head M2 x 12mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.35, image_url: IMG, category: "socket-head", stock_quantity: 420, specifications: { head_dia: "M2", length_mm: 12, grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m2-14", name: "Socket Head M2 x 14mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.40, image_url: IMG, category: "socket-head", stock_quantity: 400, specifications: { head_dia: "M2", length_mm: 14, grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m2-16", name: "Socket Head M2 x 16mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.45, image_url: IMG, category: "socket-head", stock_quantity: 360, specifications: { head_dia: "M2", length_mm: 16, grade: "10.9", finish: "Black Oxide", pitch: 0.4, allen_key_size: "1.5 mm" }, created_at: new Date().toISOString() },

  // M2.5
  { id: "socket-m25-4", name: "Socket Head M2.5 x 4mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.28, image_url: IMG, category: "socket-head", stock_quantity: 300, specifications: { head_dia: "M2.5", length_mm: 4, grade: "10.9", finish: "Black Oxide", pitch: 0.45, allen_key_size: "2 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m25-5", name: "Socket Head M2.5 x 5mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.30, image_url: IMG, category: "socket-head", stock_quantity: 300, specifications: { head_dia: "M2.5", length_mm: 5, grade: "10.9", finish: "Black Oxide", pitch: 0.45, allen_key_size: "2 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m25-6", name: "Socket Head M2.5 x 6mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.33, image_url: IMG, category: "socket-head", stock_quantity: 280, specifications: { head_dia: "M2.5", length_mm: 6, grade: "10.9", finish: "Black Oxide", pitch: 0.45, allen_key_size: "2 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m25-8", name: "Socket Head M2.5 x 8mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.36, image_url: IMG, category: "socket-head", stock_quantity: 240, specifications: { head_dia: "M2.5", length_mm: 8, grade: "10.9", finish: "Black Oxide", pitch: 0.45, allen_key_size: "2 mm" }, created_at: new Date().toISOString() },

  // M3 (6–16)
  { id: "socket-m3-6",  name: "Socket Head M3 x 6mm - 10.9 - Black Oxide",  description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.40, image_url: IMG, category: "socket-head", stock_quantity: 220, specifications: { head_dia: "M3", length_mm: 6, grade: "10.9", finish: "Black Oxide", pitch: 0.5, allen_key_size: "2.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m3-8",  name: "Socket Head M3 x 8mm - 10.9 - Black Oxide",  description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.45, image_url: IMG, category: "socket-head", stock_quantity: 200, specifications: { head_dia: "M3", length_mm: 8, grade: "10.9", finish: "Black Oxide", pitch: 0.5, allen_key_size: "2.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m3-10", name: "Socket Head M3 x 10mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.55, image_url: IMG, category: "socket-head", stock_quantity: 180, specifications: { head_dia: "M3", length_mm: 10, grade: "10.9", finish: "Black Oxide", pitch: 0.5, allen_key_size: "2.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m3-12", name: "Socket Head M3 x 12mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.65, image_url: IMG, category: "socket-head", stock_quantity: 160, specifications: { head_dia: "M3", length_mm: 12, grade: "10.9", finish: "Black Oxide", pitch: 0.5, allen_key_size: "2.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m3-14", name: "Socket Head M3 x 14mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.80, image_url: IMG, category: "socket-head", stock_quantity: 140, specifications: { head_dia: "M3", length_mm: 14, grade: "10.9", finish: "Black Oxide", pitch: 0.5, allen_key_size: "2.5 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m3-16", name: "Socket Head M3 x 16mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 0.95, image_url: IMG, category: "socket-head", stock_quantity: 120, specifications: { head_dia: "M3", length_mm: 16, grade: "10.9", finish: "Black Oxide", pitch: 0.5, allen_key_size: "2.5 mm" }, created_at: new Date().toISOString() },

  // M4 (8–16)
  { id: "socket-m4-8",  name: "Socket Head M4 x 8mm - 10.9 - Black Oxide",  description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 1.10, image_url: IMG, category: "socket-head", stock_quantity: 100, specifications: { head_dia: "M4", length_mm: 8, grade: "10.9", finish: "Black Oxide", pitch: 0.7, allen_key_size: "3 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m4-10", name: "Socket Head M4 x 10mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 1.25, image_url: IMG, category: "socket-head", stock_quantity: 90, specifications: { head_dia: "M4", length_mm: 10, grade: "10.9", finish: "Black Oxide", pitch: 0.7, allen_key_size: "3 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m4-12", name: "Socket Head M4 x 12mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 1.40, image_url: IMG, category: "socket-head", stock_quantity: 80, specifications: { head_dia: "M4", length_mm: 12, grade: "10.9", finish: "Black Oxide", pitch: 0.7, allen_key_size: "3 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m4-14", name: "Socket Head M4 x 14mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 1.60, image_url: IMG, category: "socket-head", stock_quantity: 70, specifications: { head_dia: "M4", length_mm: 14, grade: "10.9", finish: "Black Oxide", pitch: 0.7, allen_key_size: "3 mm" }, created_at: new Date().toISOString() },
  { id: "socket-m4-16", name: "Socket Head M4 x 16mm - 10.9 - Black Oxide", description: "Socket head cap screw, high tensile 10.9, black oxide finish.", price: 1.85, image_url: IMG, category: "socket-head", stock_quantity: 60, specifications: { head_dia: "M4", length_mm: 16, grade: "10.9", finish: "Black Oxide", pitch: 0.7, allen_key_size: "3 mm" }, created_at: new Date().toISOString() },
];
