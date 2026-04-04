import { useState, useMemo } from 'react';
import OptimizedImage from '../components/ui/OptimizedImage';
import { trackEvent } from '../hooks/useAnalytics';
import { menuItems, categories } from '../data/menuItems';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    trackEvent('Menu', 'Filter', categoryId, 1);
  };

  const handleOrderClick = (itemName) => {
    trackEvent('Menu', 'Order Intent', itemName, 1);
    alert(`🛒 Added "${itemName}" to your order!\n\nTake-out orders available at our express window.`);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="menu">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl text-rose-dark mb-4">Our Full Menu</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Every item is handmade daily by our apprentices under the guidance of Master Pastry Chefs.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-12" role="tablist" aria-label="Menu categories">
        {categories.map((cat) => (
          <button key={cat.id} role="tab" aria-selected={activeCategory === cat.id} onClick={() => handleCategoryClick(cat.id)} className={`px-6 py-2 rounded-full font-bold transition capitalize focus:outline-none focus:ring-2 focus:ring-rose ${activeCategory === cat.id ? 'bg-rose text-white shadow-md' : 'border border-rose text-rose hover:bg-rose/10'}`}>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <article key={item.id} className="bg-white p-6 rounded-2xl border border-rose/20 hover:shadow-lg transition group">
            <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
              <OptimizedImage src={item.image} alt={item.name} width={400} height={300} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover w-full h-full group-hover:scale-105 transition duration-500" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-charcoal">{item.name}</h3>
              <span className="font-heading text-rose-dark text-lg">{item.price}</span>
            </div>
            <p className="text-gray-500 italic text-sm mb-3">{item.desc}</p>
            {item.allergens?.length > 0 && <p className="text-xs text-gray-400 mb-4">Contains: {item.allergens.join(', ')}</p>}
            <button onClick={() => handleOrderClick(item.name)} className="w-full mt-2 bg-rose/10 text-rose-dark hover:bg-rose hover:text-white py-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-rose" aria-label={`Order ${item.name}`}>
              Add to Order
            </button>
          </article>
        ))}
      </div>

      {filteredItems.length === 0 && <div className="text-center py-12"><p className="text-gray-500 text-lg">No items found in this category. Try another filter!</p></div>}

      <div className="mt-16 text-center text-sm text-gray-500 border-t border-rose/20 pt-8">
        <p><i className="fas fa-info-circle mr-2" aria-hidden="true"></i>Please inform staff of any allergies. Menu items may contain nuts, gluten, dairy, or eggs.</p>
      </div>
    </section>
  );
}