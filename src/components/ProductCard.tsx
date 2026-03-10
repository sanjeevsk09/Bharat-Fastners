import React, { useState } from 'react';
import { ShoppingCart, Check, Eye } from 'lucide-react';
import type { Product } from '../data/products';

type Props = {
  product: Product;
  onAddToCart?: (product: any) => void;
};

const fmt = (v: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(v);

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [showSpec, setShowSpec] = useState(false);
  const { name, price, image_url, stock_quantity, description, specifications, categoryLabel } = product;

  const handleAdd = () => {
    onAddToCart?.(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="glass rounded-2xl glow-border card-hover group relative overflow-hidden animate-fade-in">
      {/* Category badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-md">
          {categoryLabel}
        </span>
      </div>

      {/* Image */}
      <div className="relative w-full h-40 flex items-center justify-center p-4 overflow-hidden bg-white/5">
        <img
          src={image_url}
          alt={name}
          className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-slate-100 leading-snug line-clamp-2 min-h-[40px]">
          {name}
        </h3>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xl font-bold text-white font-display">{fmt(price)}</span>
            <span className="text-[10px] text-slate-500 ml-1">/ pc</span>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            stock_quantity > 100 ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'
          }`}>
            {stock_quantity > 100 ? 'In Stock' : `${stock_quantity} left`}
          </span>
        </div>

        {/* Specs toggle */}
        {showSpec && (
          <ul className="text-[11px] text-slate-400 space-y-1 animate-fade-in border-t border-white/5 pt-2">
            <li><span className="text-slate-500">Dia:</span> {specifications?.diameter}</li>
            {specifications?.length_mm && <li><span className="text-slate-500">Length:</span> {specifications.length_mm}mm</li>}
            {specifications?.grade && <li><span className="text-slate-500">Grade:</span> {specifications.grade}</li>}
            <li><span className="text-slate-500">Finish:</span> {specifications?.finish}</li>
            <li><span className="text-slate-500">Material:</span> {specifications?.material}</li>
          </ul>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={handleAdd}
            disabled={added}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
              added
                ? 'bg-green-500/20 text-green-400'
                : 'btn-primary'
            }`}
          >
            {added ? <Check className="h-3.5 w-3.5" /> : <ShoppingCart className="h-3.5 w-3.5" />}
            {added ? 'Added!' : 'Add to Cart'}
          </button>
          <button
            onClick={() => setShowSpec(!showSpec)}
            className="px-3 py-2 rounded-xl glass-light text-slate-300 hover:text-white text-xs transition-all"
            title="Toggle specs"
          >
            <Eye className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
