import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { allProducts, categories } from '../data/products';

type Props = {
  onAddToCart?: (product: any) => void;
};

const ProductCatalog: React.FC<Props> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let list = activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.specifications.diameter.toLowerCase().includes(q) ||
          p.specifications.material?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog" className="scroll-mt-20">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Product Catalog
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {filtered.length} product{filtered.length !== 1 && 's'} available
          </p>
        </div>
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No products found.</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-3 text-brand-400 text-sm hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;
