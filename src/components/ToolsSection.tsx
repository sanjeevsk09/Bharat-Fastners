import React, { useState } from 'react';
import { Wrench, Ruler, Bell, Check, Star } from 'lucide-react';

type Tool = {
  id: string;
  name: string;
  description: string;
  sizes: string;
  material: string;
  price: number | null;
  image: string;
  comingSoon?: boolean;
  rating: number;
};

const tools: Tool[] = [
  {
    id: 'allen-set-metric',
    name: 'Metric Allen Key Set',
    description: 'Precision hex wrenches for socket head screws. Chrome-vanadium steel with ball-end tips.',
    sizes: '1.5, 2, 2.5, 3, 4, 5, 6, 8 mm',
    material: 'Chrome-Vanadium (Cr-V)',
    price: 299,
    image: '/images/socket-head.png',
    rating: 4.8,
  },
  {
    id: 'allen-set-long',
    name: 'Long Arm Allen Key Set',
    description: 'Extra reach for recessed bolts. Hardened S2 steel with anti-slip finish.',
    sizes: '2, 2.5, 3, 4, 5, 6 mm',
    material: 'S2 Tool Steel',
    price: 449,
    image: '/images/socket-head.png',
    rating: 4.9,
  },
  {
    id: 'precision-driver-set',
    name: 'Precision Screwdriver Set',
    description: '24-in-1 with Phillips, Slotted, Torx, and Hex bits. Magnetic tip holder.',
    sizes: 'PH0–PH2, SL1.5–SL4, T5–T20, H1.5–H4',
    material: 'CR-V Steel + Rubber Grip',
    price: 599,
    image: '/images/socket-head.png',
    rating: 4.7,
  },
  {
    id: 'torque-driver',
    name: 'Adjustable Torque Driver',
    description: 'Calibrated 1–6 N·m range. Click-type indicator for repeatable fastening.',
    sizes: '1/4" hex bits compatible',
    material: 'Stainless Steel Body',
    price: null,
    image: '/images/socket-head.png',
    comingSoon: true,
    rating: 0,
  },
  {
    id: 'thread-gauge',
    name: 'Thread Pitch Gauge Set',
    description: 'Metric 0.25–6mm pitch leaves. Essential for identifying unknown threads.',
    sizes: '0.25 – 6.0 mm pitch',
    material: 'Hardened Steel',
    price: null,
    image: '/images/socket-head.png',
    comingSoon: true,
    rating: 0,
  },
  {
    id: 'deburring-tool',
    name: 'Deburring & Chamfer Tool',
    description: 'Removes burrs from drilled holes. Swivel blade with ergonomic handle.',
    sizes: '3–12 mm hole range',
    material: 'HSS Blade + ABS Handle',
    price: null,
    image: '/images/socket-head.png',
    comingSoon: true,
    rating: 0,
  },
];

const fmt = (v: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

export const ToolsSection: React.FC = () => {
  const [notified, setNotified] = useState<Set<string>>(new Set());

  const handleNotify = (id: string) => {
    setNotified((prev) => new Set(prev).add(id));
  };

  return (
    <section id="tools" className="scroll-mt-20 py-16">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-2 rounded-xl">
          <Wrench className="h-5 w-5 text-white" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
          Tools & Accessories
        </h2>
      </div>
      <p className="text-sm text-slate-400 mb-8 max-w-xl">
        Professional-grade tools designed to complement your fastener collection.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool, i) => (
          <div
            key={tool.id}
            className={`glass rounded-2xl glow-border card-hover group relative overflow-hidden animate-fade-in flex flex-col ${
              tool.comingSoon ? 'opacity-80' : ''
            }`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Coming soon overlay */}
            {tool.comingSoon && (
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-700 text-slate-200 px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            )}

            {/* Rating badge */}
            {!tool.comingSoon && (
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full">
                <Star className="h-3 w-3 fill-amber-400" />
                <span className="text-[10px] font-semibold">{tool.rating}</span>
              </div>
            )}

            {/* Image */}
            <div className="relative w-full h-36 flex items-center justify-center p-4 overflow-hidden bg-white/5">
              <img
                src={tool.image}
                alt={tool.name}
                className="object-contain max-h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-white font-display mb-1">{tool.name}</h3>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">{tool.description}</p>

              <div className="space-y-1.5 mb-4 flex-1">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Ruler className="h-3.5 w-3.5 text-brand-400 mt-0.5 shrink-0" />
                  <span><span className="text-slate-500">Sizes:</span> {tool.sizes}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <Wrench className="h-3.5 w-3.5 text-brand-400 mt-0.5 shrink-0" />
                  <span><span className="text-slate-500">Material:</span> {tool.material}</span>
                </div>
              </div>

              {tool.comingSoon ? (
                <button
                  onClick={() => handleNotify(tool.id)}
                  disabled={notified.has(tool.id)}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    notified.has(tool.id)
                      ? 'bg-green-500/20 text-green-400'
                      : 'glass-light text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {notified.has(tool.id) ? (
                    <><Check className="h-4 w-4" /> We'll notify you!</>
                  ) : (
                    <><Bell className="h-4 w-4" /> Notify Me</>
                  )}
                </button>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white font-display">{fmt(tool.price!)}</span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">
                    In Stock
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
