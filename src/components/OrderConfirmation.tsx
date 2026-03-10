import React from 'react';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';

interface OrderConfirmationProps {
  orderData: any;
  onNewOrder: () => void;
}

const fmt = (v: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(v);

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ orderData, onNewOrder }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%)' }}>
      <div className="glass rounded-2xl glow-border max-w-md w-full p-8 text-center animate-fade-in">
        {/* Success icon */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-400" />
          </div>
        </div>

        <h2 className="text-2xl font-display font-bold text-white mb-2">Order Confirmed!</h2>
        <p className="text-slate-400 text-sm">Thank you for your purchase</p>

        {/* Order info */}
        <div className="glass-light rounded-xl p-4 mt-6 mb-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Order ID</span>
            <span className="text-xs font-mono font-bold text-brand-400">{orderData.order_id}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Total</span>
            <span className="text-lg font-bold text-white font-display">{fmt(orderData.total)}</span>
          </div>
        </div>

        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Mail className="h-4 w-4 text-brand-400 shrink-0" />
            <span>Confirmation sent to <span className="text-slate-300">{orderData.customer.email}</span></span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <Package className="h-4 w-4 text-green-400 shrink-0" />
            <span>Your order ships within 1–2 business days</span>
          </div>
        </div>

        <button onClick={onNewOrder} className="btn-primary w-full py-3 text-base flex items-center justify-center gap-2">
          Continue Shopping <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};