import React from 'react';
import { Search } from 'lucide-react';

interface Category {
  id: string;
  label: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search screws, nuts, washers…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-light text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500/50 transition-all"
        />
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`
              px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
              ${activeCategory === cat.id
                ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'glass-light text-slate-300 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {cat.label}
            <span className={`ml-1.5 ${activeCategory === cat.id ? 'text-white/70' : 'text-slate-500'}`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
