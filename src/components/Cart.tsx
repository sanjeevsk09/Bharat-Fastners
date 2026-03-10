import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../lib/supabase';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  totalPrice: number;
}

const fmt = (v: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(v);

export const Cart: React.FC<CartProps> = ({
  isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout, totalPrice,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-full max-w-md glass z-50 animate-slide-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-brand-400" />
              <h2 className="text-lg font-display font-semibold text-white">Shopping Cart</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
              <X className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-14 w-14 text-slate-700 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">Your cart is empty</p>
                <p className="text-slate-600 text-sm mt-1">Add some products to get started!</p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="glass-light rounded-xl p-3 animate-fade-in">
                  <div className="flex items-start space-x-3">
                    <img src={item.product.image_url} alt={item.product.name} className="w-14 h-14 object-contain rounded-lg bg-white/5 p-1" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-medium text-slate-200 line-clamp-2">{item.product.name}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{fmt(item.product.price)} each</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1">
                          <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                            <Minus className="h-3 w-3 text-slate-400" />
                          </button>
                          <span className="w-7 text-center text-sm font-semibold text-white">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                            <Plus className="h-3 w-3 text-slate-400" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold text-brand-400">{fmt(item.product.price * item.quantity)}</span>
                          <button onClick={() => onRemoveItem(item.product.id)} className="p-1 text-red-400/60 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-white/5 p-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 font-medium">Total</span>
                <span className="text-xl font-bold text-white font-display">{fmt(totalPrice)}</span>
              </div>
              <button onClick={onCheckout} className="w-full btn-primary py-3 text-base">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};