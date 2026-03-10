import React from 'react';
import { Zap, Truck, Shield, Package } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const stats = [
    { icon: Package, label: 'Products', value: '170+' },
    { icon: Zap, label: 'Categories', value: '13' },
    { icon: Truck, label: 'Delivery', value: '2-Day' },
    { icon: Shield, label: 'Quality', value: 'SS304' },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-600/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass-light rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-slate-300 font-medium">Bharat Fasteners — India's #1 Online Fastener Store</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-slide-up leading-tight">
          Premium <span className="gradient-text">Screws</span> &<br className="hidden sm:block" />
          Fasteners, Delivered Fast
        </h2>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Allen, Phillips &amp; Slotted screws in every head style — Socket Head, Button Head,
          Countersunk, Pan Head and more. SS304 &amp; High Tensile grades from M2 to M8.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-14 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a href="#catalog" className="btn-primary text-base px-8 py-3">
            Browse All Products
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 glow-border card-hover">
              <s.icon className="h-5 w-5 text-brand-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white font-display">{s.value}</p>
              <p className="text-xs text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
