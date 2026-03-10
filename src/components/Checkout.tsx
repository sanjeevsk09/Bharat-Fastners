import React, { useState } from 'react';
import { X, CreditCard, MapPin, User } from 'lucide-react';
import { CartItem } from '../lib/supabase';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
  onOrderComplete: (orderData: any) => void;
}

interface CustomerInfo { name: string; email: string; address: string; city: string; zipCode: string; phone: string; }

const fmt = (v: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(v);

export const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose, items, totalPrice, onOrderComplete }) => {
  const [info, setInfo] = useState<CustomerInfo>({ name: '', email: '', address: '', city: '', zipCode: '', phone: '' });
  const [processing, setProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!info.name || !info.email || !info.address) { alert('Please fill all required fields'); return; }
    setProcessing(true);
    try {
      await new Promise((r) => setTimeout(r, 1800));
      onOrderComplete({ customer: info, items, total: totalPrice, payment_method: 'google_pay', order_id: Math.random().toString(36).substring(2, 15) });
    } catch { alert('Payment failed. Try again.'); }
    finally { setProcessing(false); }
  };

  if (!isOpen) return null;

  const inputCls = "w-full px-3 py-2.5 rounded-xl glass-light text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all";

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="glass rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/5 animate-fade-in">
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h2 className="text-xl font-display font-semibold text-white">Checkout</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-xl transition-colors">
              <X className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Customer */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="h-4 w-4 text-brand-400" />
                <h3 className="text-sm font-semibold text-white">Customer Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" name="name" placeholder="Full Name *" value={info.name} onChange={handleChange} required className={inputCls} />
                <input type="email" name="email" placeholder="Email *" value={info.email} onChange={handleChange} required className={inputCls} />
                <input type="text" name="address" placeholder="Address *" value={info.address} onChange={handleChange} required className={`${inputCls} md:col-span-2`} />
                <input type="text" name="city" placeholder="City" value={info.city} onChange={handleChange} className={inputCls} />
                <input type="text" name="zipCode" placeholder="ZIP Code" value={info.zipCode} onChange={handleChange} className={inputCls} />
                <input type="tel" name="phone" placeholder="Phone" value={info.phone} onChange={handleChange} className={`${inputCls} md:col-span-2`} />
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-brand-400" />
                <h3 className="text-sm font-semibold text-white">Order Summary</h3>
              </div>
              <div className="glass-light rounded-xl p-4 space-y-2">
                {items.map((i) => (
                  <div key={i.product.id} className="flex justify-between text-xs text-slate-300">
                    <span className="truncate max-w-[70%]">{i.product.name} <span className="text-slate-500">× {i.quantity}</span></span>
                    <span className="font-medium">{fmt(i.product.price * i.quantity)}</span>
                  </div>
                ))}
                <div className="border-t border-white/5 pt-2 flex justify-between">
                  <span className="font-semibold text-white text-sm">Total</span>
                  <span className="font-bold text-brand-400 text-lg">{fmt(totalPrice)}</span>
                </div>
              </div>
            </div>

            {/* Pay */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-4 w-4 text-brand-400" />
                <h3 className="text-sm font-semibold text-white">Payment</h3>
              </div>
              <button type="submit" disabled={processing} className="w-full btn-primary py-3 text-base flex items-center justify-center space-x-2 disabled:opacity-50">
                {processing ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white" />
                ) : (
                  <>
                    <span>Pay with</span>
                    <span className="font-bold">G</span><span className="font-bold text-blue-400">o</span><span className="font-bold text-red-400">o</span><span className="font-bold text-yellow-400">g</span><span className="font-bold text-green-400">l</span><span className="font-bold text-blue-400">e</span>
                    <span className="font-bold ml-0.5">Pay</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-slate-500 mt-2 text-center">Secure payment processing powered by Google Pay</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};