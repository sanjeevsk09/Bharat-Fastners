import React from 'react';
import { ShoppingCart, Wrench } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  return (
    <header className="glass sticky top-0 z-40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-2 rounded-xl shadow-lg shadow-brand-500/20">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold gradient-text tracking-tight">
                Bharat Fasteners
              </h1>
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">
                Premium Fasteners
              </p>
            </div>
          </div>

          {/* Nav Links – hidden on small */}
          <nav className="hidden md:flex items-center space-x-6 text-sm text-slate-300">
            <a href="#catalog" className="hover:text-brand-400 transition-colors">Products</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Assorted Packs</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Tools</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Contact</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative glass-light hover:bg-white/10 p-2.5 rounded-xl transition-all duration-200 group"
            >
              <ShoppingCart className="h-5 w-5 text-slate-300 group-hover:text-brand-400 transition-colors" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg shadow-brand-500/30 animate-fade-in">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};