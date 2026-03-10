import React, { useState, useEffect } from 'react';
import { ShoppingCart, Wrench, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const navLinks = [
  { href: '#catalog', label: 'Products' },
  { href: '#assorted-packs', label: 'Assorted Packs' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick }) => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

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
          <nav className="hidden md:flex items-center space-x-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-brand-400 bg-brand-500/10 font-medium'
                    : 'text-slate-300 hover:text-brand-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
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

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden glass-light hover:bg-white/10 p-2.5 rounded-xl transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-slate-300" />
              ) : (
                <Menu className="h-5 w-5 text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-64 border-t border-white/5' : 'max-h-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-brand-400 bg-brand-500/10 font-medium'
                  : 'text-slate-300 hover:text-brand-400 hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};