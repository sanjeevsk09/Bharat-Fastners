import React from 'react';
import { Package, ShoppingCart, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

type PackItem = { name: string; qty: number };

type Pack = {
  id: string;
  name: string;
  tagline: string;
  items: PackItem[];
  totalValue: number;
  packPrice: number;
  badge?: string;
  gradient: string;
};

const packs: Pack[] = [
  {
    id: 'starter-kit',
    name: 'M3 Starter Kit',
    tagline: 'Perfect for hobby projects & electronics',
    items: [
      { name: 'M3×8 Socket Head', qty: 20 },
      { name: 'M3×12 Socket Head', qty: 20 },
      { name: 'M3 Hex Nut', qty: 40 },
      { name: 'M3 Flat Washer', qty: 40 },
      { name: 'M3 Spring Washer', qty: 20 },
    ],
    totalValue: 98,
    packPrice: 69,
    badge: 'Best Seller',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'makers-essentials',
    name: "Maker's Essentials",
    tagline: '3D printing, CNC & prototyping must-haves',
    items: [
      { name: 'M3×6 Button Head', qty: 20 },
      { name: 'M3×10 Button Head', qty: 20 },
      { name: 'M3 Brass Insert', qty: 30 },
      { name: 'M3 Nylon Spacer', qty: 20 },
      { name: 'M3 Nyloc Nut', qty: 20 },
    ],
    totalValue: 185,
    packPrice: 129,
    badge: 'Popular',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 'pro-workshop',
    name: 'Pro Workshop Set',
    tagline: 'Complete M2–M8 range for serious builders',
    items: [
      { name: 'M4×10 Socket Head', qty: 20 },
      { name: 'M5×16 Socket Head', qty: 15 },
      { name: 'M6×20 Socket Head', qty: 10 },
      { name: 'M4–M8 Hex Nut Assorted', qty: 50 },
      { name: 'M4–M8 Flat Washer Assorted', qty: 50 },
      { name: 'M4 Grub Screw 6mm', qty: 10 },
    ],
    totalValue: 349,
    packPrice: 249,
    badge: 'Best Value',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'electronics-kit',
    name: 'Electronics & PCB Kit',
    tagline: 'Micro fasteners for boards & enclosures',
    items: [
      { name: 'M2×4 Socket Head', qty: 30 },
      { name: 'M2×8 Socket Head', qty: 30 },
      { name: 'M2.5×6 Socket Head', qty: 20 },
      { name: 'M2 Hex Nut', qty: 30 },
      { name: 'M2.5 Hex Nut', qty: 20 },
      { name: 'M2 Brass Insert', qty: 20 },
    ],
    totalValue: 142,
    packPrice: 99,
    gradient: 'from-sky-500 to-blue-500',
  },
];

const fmt = (v: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

interface Props {
  onAddToCart?: (product: any) => void;
}

export const AssortedPacks: React.FC<Props> = ({ onAddToCart }) => {
  const [addedPack, setAddedPack] = useState<string | null>(null);

  const handleAddPack = (pack: Pack) => {
    if (onAddToCart) {
      onAddToCart({
        id: pack.id,
        name: pack.name,
        price: pack.packPrice,
        image_url: '/images/socket-head.png',
        category: 'assorted-pack',
        categoryLabel: 'Assorted Pack',
        stock_quantity: 50,
        specifications: { diameter: 'Mixed', finish: 'Mixed', material: 'Mixed' },
      });
    }
    setAddedPack(pack.id);
    setTimeout(() => setAddedPack(null), 1500);
  };

  return (
    <section id="assorted-packs" className="scroll-mt-20 py-16">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-gradient-to-br from-brand-500 to-amber-500 p-2 rounded-xl">
          <Package className="h-5 w-5 text-white" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
          Assorted Packs
        </h2>
      </div>
      <p className="text-sm text-slate-400 mb-8 max-w-xl">
        Curated combos hand-picked for common use-cases. Save up to 30% versus buying individually.
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {packs.map((pack, i) => (
          <div
            key={pack.id}
            className="glass rounded-2xl glow-border card-hover group relative overflow-hidden animate-fade-in flex flex-col"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Badge */}
            {pack.badge && (
              <div className="absolute top-3 right-3 z-10">
                <span className={`text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${pack.gradient} text-white px-2.5 py-1 rounded-full flex items-center gap-1`}>
                  <Sparkles className="h-3 w-3" />
                  {pack.badge}
                </span>
              </div>
            )}

            {/* Gradient header */}
            <div className={`h-2 bg-gradient-to-r ${pack.gradient}`} />

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-white font-display mb-1">{pack.name}</h3>
              <p className="text-xs text-slate-400 mb-4">{pack.tagline}</p>

              {/* Items list */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {pack.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="h-3.5 w-3.5 text-brand-400 mt-0.5 shrink-0" />
                    <span>{item.qty}× {item.name}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-end justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-white font-display">{fmt(pack.packPrice)}</span>
                  <span className="text-xs text-slate-500 line-through ml-2">{fmt(pack.totalValue)}</span>
                </div>
                <span className="text-[10px] font-semibold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                  Save {Math.round(((pack.totalValue - pack.packPrice) / pack.totalValue) * 100)}%
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={() => handleAddPack(pack)}
                disabled={addedPack === pack.id}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  addedPack === pack.id
                    ? 'bg-green-500/20 text-green-400'
                    : 'btn-primary'
                }`}
              >
                {addedPack === pack.id ? (
                  <><Check className="h-4 w-4" /> Added!</>
                ) : (
                  <><ShoppingCart className="h-4 w-4" /> Add Pack to Cart</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
